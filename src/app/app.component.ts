import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './components/greeting/greeting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreetingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CodeSandbox';
}
