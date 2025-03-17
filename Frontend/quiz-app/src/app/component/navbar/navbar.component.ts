import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { User } from '../../model/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  user: User = new User();

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.user.name = 'Guest';
      this.user.role = 'Guest';
    }
  }

  logout() {
    alert("Logged Out Successfully...");
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    this.router.navigateByUrl('/app-login');
  }
}
