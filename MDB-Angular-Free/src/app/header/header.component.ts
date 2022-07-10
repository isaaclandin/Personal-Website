import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showAbout: boolean = true;
  showProjects: boolean = false;
  showContact: boolean = false;

  showTab(tab: String){
    if (tab == "projects"){
      this.showAbout = false;
      this.showProjects = true;
      this.showContact = false;
    }
    if (tab == "contact"){
      this.showAbout = false;
      this.showProjects = false;
      this.showContact = true;
    }
    else {
      this.showAbout = true;
      this.showProjects = false;
      this.showContact = false;
    }

  }


  constructor() { }

  ngOnInit(): void {
  }

}
