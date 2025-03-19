import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-scoreboard',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent {

}
