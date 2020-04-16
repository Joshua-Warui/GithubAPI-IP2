import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'ebdf9915042a7bb898cc';
  private clientsecret = 'b2e037c4c10dea84498aa1dad3ae4bdc232fab82';
 
  constructor(private http:Http) { 
    console.log("service is ready!");
    this.username = 'Joshua-Warui';
    
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret" + this.clientsecret)
     .pipe(map(res => res.json()));
   }
}
