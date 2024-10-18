import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { from } from "rxjs";

@Component({
    selector: 'let-observable-async-pipe',
    standalone: true,
    imports: [CommonModule],
    template: `
      <ng-container *transloco="let t">
        @let name = someApiCall$ | async;
        <h1>{{ t('let-observable-async-pipe-greeting', {name: name}) }}</h1>
      </ng-container>
    `,
  })
  export class LetObservableAsyncPipeComponent {
    someApiCall$ = from("Rob");
  }
