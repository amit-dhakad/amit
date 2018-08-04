import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

tittle = 'Skills';
subTittle1 = 'Programming Languages & Tools';
subTittle2 = 'TECHNICAL SUMMARY';
skills = [];
  constructor(private _profileService: ProfileService) {
   this.getSkill();
  }

 getSkill() {
   this._profileService.getProfileData().subscribe(res => {
     this.skills = res['profile'].skills;
   },
  err => console.log('skills', err));
 }

}
