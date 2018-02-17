import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menu:any[] = [
    {
      Image:"assets/tournament-btn.png",
      title:"Tournament",
      url:"/"
    },
    {
      Image:"assets/invites-btn.png",
      title:"Invites",
      url:"/"
    },
    {
      Image:"assets/stats-btn.png",
      title:"Statistics",
      url:"/"
    },
    {
      Image:"assets/auction-btn.png",
      title:"Auction",
      url:"/"
    }
  ]

}
