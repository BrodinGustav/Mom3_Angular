import { Component } from '@angular/core';
import { AssignmentComponent } from '../assignment/assignment.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AssignmentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
