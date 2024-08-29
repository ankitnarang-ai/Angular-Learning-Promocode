import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-decorator',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.css'
})
export class DecoratorComponent {

}
