import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { from } from "rxjs";

@Component({
    selector: 'inline-observable-async-pipe',
    standalone: true,
    imports: [CommonModule],
    template: `
      <ng-container *transloco="let t">
        <h1>{{ t('inline-observable-async-pipe-greeting', {name: someApiCall$ | async}) }}</h1>
      </ng-container>
    `,
  })
export class InlineObservableAsyncPipeComponent {
  someApiCall$ = from("Rob");
}
  
  