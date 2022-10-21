import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ride_id!: number;
  
  arr!: any[];
  
  @Input()rides!: any[];

 

  @Input() set ride(ride_id: number) {
    this.arr = [];
    for (var i = 0; i < this.rides.length; i++) {
      if (this.rides[i].id === ride_id) {
        this.arr.push(this.rides[i]);
      }
    }
  }
  
  cancel_disp = false;
  @Output() bookEvent = new EventEmitter();

  book()
  {
    this.cancel_disp = !this.cancel_disp;
    this.bookEvent.emit();
  }



}
