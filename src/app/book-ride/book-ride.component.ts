import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display = true;

  toggle()
  {
    this.display = !this.display;
  }

  array = [
    {"id": 0, offerId: "Vanrose Junction", name: "", car: "", seatsLeft: 3, pickUp: "", destination: "Office"},
    {"id": 0, offerId: "PTP", name: "", car: "", seatsLeft: 2, pickUp: "", destination: "Office"},
    {"id": 0, offerId: "Office", name: "", car: "", seatsLeft: 7, pickUp: "", destination: "East-Fort"},
    {"id": 0, offerId: "Office", name: "", car: "", seatsLeft: 5, pickUp: "", destination: "Central Mail"}
  ];

}
