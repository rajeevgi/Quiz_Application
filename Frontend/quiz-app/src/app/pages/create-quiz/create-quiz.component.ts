import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-create-quiz',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css'
})
export class CreateQuizComponent {

}
