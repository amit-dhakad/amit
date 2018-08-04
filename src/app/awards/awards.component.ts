import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  oca = "Oracle Certified Associate, Java SE 7 Programmer";
  android = "Got the certificate of merit in Android App Development event of Robothlon- 2015(IITGuwahati)";
  run_bhopal="Contributed as a volunteer in marathon “Run Bhopal Run 2015";


  constructor() { }

  ngOnInit() {
  }

}
