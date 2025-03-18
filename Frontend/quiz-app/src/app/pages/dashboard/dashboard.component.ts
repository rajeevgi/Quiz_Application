import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  userList: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiService.getAllUsers().subscribe((res: any) => {
      this.userList = res;
    });
  }

  onDeleteUser(index: number) {
    const userId: string = this.userList[index]._id;
    if (confirm('Are you sure want to delete this user?')) {
      this.apiService.deleteUserById(userId).subscribe((res: any) => {
        alert('User Deleted Successfully...');
        this.userList.splice(index, 1);
        this.router.navigateByUrl('/app-dashboard');
      });
    }
  }

  onUpdateUser(index: number) {
    const userId: string = this.userList[index]._id;
    this.router.navigate(['/app-update-user', userId]);
  }
}
