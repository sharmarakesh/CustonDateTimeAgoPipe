import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class DriverComponent implements OnInit {

  @Input('driver') driver;
  @Input('driverList') driverList;
  @Input('currentState') currentState;
  @Input('i') i;
  private name = "driver-";

  ngOnInit() {
    this.name = this.name + this.i;
  }

}
