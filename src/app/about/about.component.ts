import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { link } from 'fs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  about;
  first_name = '';
  last_name = '';
  email = '';
  mobile = '';
  objective = '';
  address = '';
  oca = '';
  github = '';
  linkedin = '';

  constructor(private _profileService: ProfileService) {
    this.getAbout();
   }

  getAbout() {
    this._profileService.getProfileData().subscribe(res => {
      this.about = res['profile'].about;
      this.first_name = this.about.first_name;
      this.last_name = this.about.last_name;
      this.email = this.about.email;
      this.mobile = this.about.mobile;
      this.objective = this.about.objective;
      this.address = this.about.address;
      this.oca = this.about.oca;
      this.github = this.about.github;
      this.linkedin = this.about.linkedin;
    },
   err => console.log('about', err));
  }

}
