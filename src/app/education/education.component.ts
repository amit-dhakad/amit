import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  university= "Rajiv Gandhi Proudyogiki Vishwavidyalaya";
  college = "Sagar Institute of Research & Technology Bhopal";
  course = "Bachelor of Engineering";
  branch= "Computer Science and Engineering";
  college_duration = "July 2013 - May 2017";
  per_college="CGPA: 7.6";

  school_12_name = "Model Higher Secondary School, TT Nagar, Bhopal";
  school_12_duration = "July 2012 - March 2013";
  per_12 = "Percentage: 76.4%";
  course_12 = "Physics, chemstry and Mathmatics";

  school_10_name = "govt. high school";
  school_10_duration = "July 2010 - March 2011";
  per_10 = "Percentage: 77.5%";
  course_10 = "general study";



  constructor() { }

  ngOnInit() {
  }

}
