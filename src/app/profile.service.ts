import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  _url = 'assets/data/profile.json';
  constructor( private http: HttpClient) { }

  getProfileData() {
  return this.http.get(this._url);
  }
}
