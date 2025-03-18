import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-update-user',
  imports: [FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
  
  user : User = new User();

  id !: string ; 

  constructor(private apiService : ApiService, private router : Router, private route : ActivatedRoute){}
  
  ngOnInit(): void {
    // const userId =  this.user.id;
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log("id:", this.id);
    this.apiService.getUserById(this.id).subscribe(( res : any) => {
      this.user = res;
    });
  } 

  onSubmit() {
    this.apiService.updateUserById(this.id, this.user).subscribe(( res : any) => {
      alert('User Updated Successfully...');
      this.router.navigateByUrl('/app-dashboard');
    });
  }
}
