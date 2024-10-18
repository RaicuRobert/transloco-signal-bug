import { Component } from "@angular/core";

@Component({
    selector: 'let',
    standalone: true,
    template: `
      <ng-container *transloco="let t">
        @let name = "Rob";
        <h1>{{ t('let-greeting', { name }) }}</h1>
      </ng-container>
    `,
  })
export class LetComponent {
}
  
  