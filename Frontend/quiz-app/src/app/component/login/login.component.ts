import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { User } from '../../model/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user : User = new User();

  registerObj : any = {
    userName : '',
    email : '',
    password : ''
  }

  constructor(private apiService : ApiService){}

  router = inject(Router);

  onLogin(){
    this.apiService.login(this.user).subscribe(( res : any) => {
      console.log('User Data', res);
     if(this.user.role === 'Admin'){
       alert('Admin Log In Successful...');
       localStorage.setItem('Admin-data', JSON.stringify(res.token));
       this.router.navigateByUrl('/app-home');
     }else if(this.user.role === 'User'){
      alert('User Log In Successful...');
      localStorage.setItem('User-data', JSON.stringify(res.token));
      this.router.navigateByUrl('/app-home');
     }else {
      alert('Invalid Credentials!');
     }
    });
  }

  onRegister(){
    this.apiService.register(this.user).subscribe(( res : any) => {
      alert("Registration successful!");
      this.user = res;
      this.router.navigateByUrl('/app-login');
    })
  }

  toggleRegister() {
    document.querySelector('.container')?.classList.add('active');
  }

  toggleLogin() {
    document.querySelector('.container')?.classList.remove('active');
  }
  
}
