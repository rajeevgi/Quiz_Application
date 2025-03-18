import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink,CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user : User = new User();
}
