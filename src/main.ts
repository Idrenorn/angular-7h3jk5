import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
/*
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Тур героев {{name}}!</h1>
   
  `,
})
export class App {
  name = 'от Артема';
  title = 'Тур героев';
}
*/
@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Тур героев';
}
/*
bootstrapApplication(App);
*/