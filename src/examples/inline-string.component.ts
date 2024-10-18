import { Component } from "@angular/core";

@Component({
    selector: 'inline-string',
    standalone: true,
    template: `
      <ng-container *transloco="let t">
        <h1>{{ t('inline-string-greeting', {name: "name"}) }}</h1>
      </ng-container>
    `,
  })
export class InlineStringComponent {
}
  
  