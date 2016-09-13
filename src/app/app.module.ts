import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {EventEffects} from "../effects/eventEffects";
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import routes from "../routes/routes";
import {EffectsModule} from '@ngrx/effects';
import {rootReducer} from '../reducers';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes, {
            useHash: true
        }),
        StoreModule.provideStore(rootReducer),
        EffectsModule.run(EventEffects)
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {
}
