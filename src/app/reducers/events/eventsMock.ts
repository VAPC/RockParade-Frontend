import {IEvents} from '../../models/IEvents';

export const TestEvents: IEvents = {
    data: [
        {
            id: 'test',
            date: '2016-09-25 01:33',
            name: 'Greatest Event',
            description: 'The most greatest event! Please come.',
            place: 'Woodstock',
            creator: 'petr',
            images: [
                'http:\/\/rockparade.creora.ru\/api\/event\/test\/image\/5ea63678906477542af156d44a735706-test%20image.png'
            ],
            links: [
                {
                    id: '123123',
                    url: 'http:\/\/rockparade.creora.ru',
                    description: 'Rockparade link'
                }
            ]
        }
    ],
    total: 1,
    limit: 50,
    offset: 0
};
