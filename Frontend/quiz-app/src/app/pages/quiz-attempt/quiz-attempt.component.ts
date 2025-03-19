import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-attempt',
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './quiz-attempt.component.html',
  styleUrl: './quiz-attempt.component.css'
})
export class QuizAttemptComponent implements OnInit {
  quiz : any;
  selectedAnswers : any = {};

  constructor(private route : ActivatedRoute, private apiService : ApiService){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.apiService.getQuizById(id).subscribe(( res : any) => {
      this.quiz = res;
    });
  }

  selectAnswer(questionId: string, option: string) {
    this.selectedAnswers[questionId] = option;
  }

  submitQuiz() {
    const payload = {
      quizId: this.quiz._id,
      answers: this.selectedAnswers
    };

    this.apiService.attemptQuiz(payload).subscribe((res) => {
      alert(res.message || 'Quiz submitted successfully');
      // Optionally navigate away or reset
    });
  }

}
