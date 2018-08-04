import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent  {

 interest = '';
  constructor(private _profileService: ProfileService) {
    this.getInterest();
   }

  getInterest() {
    this._profileService.getProfileData().subscribe(res => {
      this.interest = res['profile'].interest;
    },
   err => console.log('interest', err));
  }

}
