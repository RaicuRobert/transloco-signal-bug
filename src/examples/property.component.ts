import { Component } from "@angular/core";

@Component({
    selector: 'property',
    standalone: true,
    template: `
      <ng-container *transloco="let t">
        <h1>{{ t('property-greeting', { name }) }}</h1>
      </ng-container>
    `,
  })
export class PropertyComponent {
  name: string = "Rob";
}
  
  