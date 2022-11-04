import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }
  ride_id!: number;
  uname = "";
  curUser = this.restService.read();
  arr!: any[];
  
  @Input()rides!: any[];

 

  @Input() set ride(ride_id: number) {
    this.arr = [];
    for (var i = 0; i < this.rides.length; i++) {
      if (this.rides[i].id === ride_id) {
        this.arr.push(this.rides[i]);
        this.ride_id = ride_id;
        this.uname = this.rides[i].username;
      }
    }
  }
  
  cancel_disp = false;
  @Output() bookEvent = new EventEmitter();

  book()
  {
    this.cancel_disp = !this.cancel_disp;
    this.bookEvent.emit();
    if(this.cancel_disp)
    {
        this.restService.decrement(this.ride_id);
    }
    else
    {
        this.restService.increment(this.ride_id);
    }
  }

  goBack() {
    this.cancel_disp = !this.cancel_disp;
    this.bookEvent.emit();
  }


}
