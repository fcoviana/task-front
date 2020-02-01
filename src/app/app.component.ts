import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';

  public chips: Materialize.ChipDataObject[] = [
    { tag: 'Banana' },
    { tag: 'Kiwi' },
    { tag: 'Mango' },
  ];

  addChip() {
    this.chips = [
      ...this.chips,
      { tag: 'Papaya' },
    ];
    console.log(this.chips);
  }

  removeChip() {
    this.chips.pop();
    this.chips = [
      ...this.chips,
    ];
  }

  public saveEmail(email: string): void {

  }

  public handleRefusalToSetEmail(dismissMethod: string): void {

  }
}
