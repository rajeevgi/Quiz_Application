import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../model/user';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User();

  constructor(private apiService: ApiService) {}

  router = inject(Router);

  loading : boolean = false;

  onLogin() {
    this.apiService.login(this.user).subscribe((res: any) => {
      console.log('User Data', res);
      const role = res.user.role;

      if (role === 'Admin' || role === 'User') {
        alert(`${role} Log In Successful....`);
        localStorage.setItem('userData', JSON.stringify(res.user));
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/app-home');
      } else {
        alert('Invalid Role!');
      }
    });
  }

  onRegister() {
    this.loading = true;
    this.apiService.register(this.user).subscribe((res: any) => {
      alert("Registration successful!");
      this.user = res;
      this.toggleLogin();
      this.router.navigateByUrl('/app-login');
      this.loading = false;
    });
  }

  toggleRegister() {
    document.querySelector('.container')?.classList.add('active');
  }

  toggleLogin() {
    document.querySelector('.container')?.classList.remove('active');
  }
}
