import { Component, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { InlineStringComponent } from "./examples/inline-string.component";
import { InlineSignalComponent } from "./examples/inline-signal.component";
import { InlineObservableAsyncPipeComponent } from "./examples/inline-observable-async-pipe.component";
import { PropertyComponent } from "./examples/property.component";
import { LetComponent } from "./examples/let.component";
import { LetSignalComponent } from "./examples/let-signal.component";
import { LetObservableAsyncPipeComponent } from "./examples/let-observable-async-pipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <inline-string/>
    <inline-signal/>
    <inline-observable-async-pipe/>
    <property/>
    <let/>
    <let-signal/>
    <let-observable-async-pipe/>
  `,
  imports: [
    InlineStringComponent,
    InlineSignalComponent,
    InlineObservableAsyncPipeComponent,
    PropertyComponent,
    LetComponent,
    LetSignalComponent,
    LetObservableAsyncPipeComponent
],
})
export class App {
}

bootstrapApplication(App, {
  providers: [provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: ['en', 'es'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },        
        loader: TranslocoHttpLoader
      })]
});
