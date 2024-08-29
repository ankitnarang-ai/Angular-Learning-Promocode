import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { DecoratorComponent } from './decorator/decorator.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneWayDataBindingComponent, TwoWayDataBindingComponent, DecoratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Practice';
}
