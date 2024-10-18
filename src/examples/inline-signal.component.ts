import { Component, signal } from "@angular/core";

@Component({
    selector: 'inline-signal',
    standalone: true,
    template: `
      <ng-container *transloco="let t">
        <h1>{{ t('inline-signal-greeting', { name: someApiCall() }) }}</h1>
      </ng-container>
    `,
  })
export class InlineSignalComponent {
  someApiCall = signal("Rob");
}
  
  