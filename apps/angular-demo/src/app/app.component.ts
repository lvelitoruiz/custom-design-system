import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>
      <h1>Angular Demo - Design System</h1>
      <p>Demo app for Angular components</p>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-demo';
}