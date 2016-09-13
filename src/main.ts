import {enableProdMode, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from '@ngrx/effects';
import {EventEffects} from "./effects/eventEffects";
import {rootReducer} from './reducers';
import routes from "./routes/routes";
import {AppComponent, environment} from './app/';

if (environment.production) {
    enableProdMode();
}

NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        }),
        StoreModule.provideStore(rootReducer),
        EffectsModule.run(EventEffects)
    ],
    providers: [],
    bootstrap: [AppComponent],
});
