import {StoreModule} from "@ngrx/store";
import {CoreComponent} from './core/core.cmt.ts';
import {EventEffects} from "./effects/eventEffects";
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import routes from "./routes";
import {EffectsModule} from '@ngrx/effects';
import {rootReducer} from './reducers';
import {EventActions} from "./actions/event";

NgModule({
    declarations: [
        CoreComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        }),
        StoreModule.provideStore(rootReducer),
        EffectsModule.run(EventEffects)
    ],
    providers: [
        EventActions
    ],
    bootstrap: [CoreComponent],
});
