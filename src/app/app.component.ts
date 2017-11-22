import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: number;
  idValid: boolean = true;
  checked: boolean = false;

  onKey(id: number) {
    this.id = id;
    if (this.id < 1 || this.id > 5) {
      this.idValid = false;
    } else { this.idValid = true; }
  }

  onChange(e) {
    if (e.target.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
}
