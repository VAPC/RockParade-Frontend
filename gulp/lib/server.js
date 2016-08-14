var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var inject = require('connect-injector');
var portscanner = require('portscanner');
var client = require('fs')
    .readFileSync(__dirname + '/client.bundle.js', 'utf-8');
var chalk = require('gulp-util').colors;
var env = require('minimist')(process.argv.slice(2), {
    alias: {
        o: 'open'
    }
});
var opn = require('opn');

function formatMessage(message) {
    var line = Array(message.length + 5).join('-');
    return [
        line,
        '  ' + message,
        line
    ].join('\n');
}

module.exports = function (dirs, opts) {
    app.use(inject(injectWhen, injectConverter));

    app.get('/__sync-browser__.client.js', function (req, res) {
        res.set('Content-Type', 'text/javascript');
        res.send(client);
    });

    function injectWhen(req, res) {
        var ha = req.headers.accept;
        return ha && ha.indexOf("html") !== -1;
    }

    function injectConverter(content, req, res, cb) {
        var string = content.toString();
        var match = string.match(/<\/body>(?![\s\S]*<\/body>)/i);
        if (match) {
            cb(null, [
                string.slice(0, match.index),
                '<script src="/__sync-browser__.client.js"></script>',
                string.slice(match.index)
            ].join('\n'));
        } else {
            cb(null, content);
        }
    }

    opts = opts || {};
    if (typeof dirs === 'string') {
        dirs = [dirs];
    }

    var middleware = opts.middleware || [];
    var port = opts.port || 3000;
    dirs.forEach(function (dir) {
        app.use(express.static(dir));
    });

    middleware.forEach(function (md) {
        app.use(md);
    });

    return new Promise(function (resolve, reject) {
        portscanner.findAPortNotInUse(port, port + 10, {}, function (err, port) {
            if (err) {
                return reject(err);
            }
            var host = 'http://localhost:' + port;
            http.listen(port, function (err) {
                if (err) {
                    return reject(err);
                }
                console.log(formatMessage(
                    'Started local server on ' + chalk.green(host)
                ));
                resolve(host);
            });
        });
    }).then(function (host) {
        var browser = env.open;
        var opts = typeof browser === 'string'
            ? { app: browser }
            : null;
        if (browser) {
            return opn(host, opts);
        }
    });
};

module.exports.reload = function (options) {
    options = options || {};
    if (options.reinject) {
        io.emit('__sync-browser__.reinject', options.blacklist);
    } else {
        io.emit('__sync-browser__.reload');
    }
};
