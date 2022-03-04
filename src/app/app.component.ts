import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = false;

  name = 'Material Theme Overrides';
  value = '';
  hide = true;

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.setTheme(this.theme);
  }

  toggleTheme() {
    this.theme = !this.theme;
    this.setTheme(this.theme);
  }

  private setTheme(darkTheme: boolean) {
    const lightClass = 'theme--light';
    const darkClass = 'theme--dark';
    const removeClass = darkTheme ? lightClass : darkClass;
    const addClass = darkTheme ? darkClass : lightClass;
    document.body.classList.remove(removeClass);
    document.body.classList.add(addClass);
  }
}
