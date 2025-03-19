import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { Quiz } from '../../model/quiz';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quiz',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  quiz : Quiz = new Quiz();

  constructor(private apiService : ApiService, private router : Router){}

  
}
