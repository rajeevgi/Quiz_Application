import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-quiz',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

}
