import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // Login User Api
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, data, {
      withCredentials: true,
    });
  }

  // Register User Api
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, data, {
      withCredentials: true,
    });
  }

  // Admin Apis
  getAllUsers(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(`${this.apiUrl}/user/getAllUsers`, {headers,
      withCredentials: true,
    });
  }
}
