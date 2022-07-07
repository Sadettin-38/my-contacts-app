import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Members } from './phonebook.model';

@Injectable
({
  providedIn: 'root'
})

export class Service 
{
  constructor(private http: HttpClient) { }

  readonly baseURL = "https://localhost:5001/api/"

  getMembersList(): Observable<Members[]> 
  {
    return this.http.get<Members[]>(this.baseURL + "Members");
  }

  updateMember(member: Members): void
  {
    this.http.put<any>(this.baseURL + "Members", member)
    .subscribe();
  }
  deleteMember(id: number)
  {
    this.http.delete(this.baseURL + "Members/" + id)
    .subscribe();
  }
  getContactsList(id: number): Observable<any[]> 
  {
    return this.http.get<any>(this.baseURL + "Contacts/" + id);
  }
}