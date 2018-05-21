import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.component.html',
  styleUrls: ['./tabs1.component.css']
})
export class Tabs1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.setHeight();
  }

  // setHeight() {
  //     const $tabPane = $('.tab-pane'),
  //         tabsHeight = $('.nav-tabs').height();
  //         $tabPane.css({
  //           height: tabsHeight
  //         });
  // }
}
