import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'two-way-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {
  name: any = "ankit"
  profession: any = 'software engineer'

  onChangeName(e: any) {
    this.profession = e.target.value
  }
}
