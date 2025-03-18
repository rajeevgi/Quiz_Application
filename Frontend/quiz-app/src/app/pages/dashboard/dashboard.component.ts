import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  userList : any[] = [];
  
  constructor(private apiService : ApiService, private router : Router){}
  
  ngOnInit(): void {
    this.getAllUsers();
  }
  
  getAllUsers(){
    this.apiService.getAllUsers().subscribe(( res : any) => {
      this.userList = res;
    })
  }

  onDeleteUser(arg0: any) {
  }
  onUpdateUser(arg0: any) {
  }
} 
