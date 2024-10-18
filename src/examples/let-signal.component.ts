import { Component, signal } from "@angular/core";

@Component({
    selector: 'let-signal',
    standalone: true,
    template: `
      <ng-container *transloco="let t">
        @let name = someApiCall();
        <h1>{{ t('let-signal-greeting', {name: name}) }}</h1>
      </ng-container>
    `,
  })
export class LetSignalComponent {
    someApiCall= signal("Rob");
  }
  
  