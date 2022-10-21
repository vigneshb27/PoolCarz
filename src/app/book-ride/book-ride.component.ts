import { Component, OnInit, HostListener } from '@angular/core';

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

  particular_ride = 0;
  current: string = "all";

  toggle()
  {
    this.display = !this.display;
    this.current = "all";
    this.particular_ride = 0;
  }

  array = [
    {"id": 1, offerId: "", name: "AAA", car: "Audi", seatsLeft: 3, pickUp: "Vanrose Junction", destination: "Office"},
    {"id": 2, offerId: "", name: "BBB", car: "BMW", seatsLeft: 2, pickUp: "PTP", destination: "Office"},
    {"id": 3, offerId: "", name: "CCC", car: "Benz", seatsLeft: 7, pickUp: "Office", destination: "East-Fort"},
    {"id": 4, offerId: "", name: "DDD", car: "Volvo", seatsLeft: 5, pickUp: "Office", destination: "Central Mail"},
    {"id": 5, offerId: "", name: "EEE", car: "Tesla", seatsLeft: 5, pickUp: "School", destination: "Central Mail"}
  ];

  
  

  
  toOffice(){
    if(this.current == "toOffice")
    {
      this.current = "all";
    }
    else
    {
      this.current = "toOffice";
    }
    this.particular_ride = 0;
  }
  fromOffice(){
    if(this.current == "fromOffice")
    {
      this.current = "all";
    }
    else
    {
      this.current = "fromOffice";
    }
    this.particular_ride = 0;
  }
  others(){
    if(this.current == "others")
    {
      this.current = "all";
    }
    else
    {
      this.current = "others";
    }
    this.particular_ride = 0;
  }
  disp_all = true;
  booked()
  {
    this.display = !this.display;
    this.disp_all = !this.disp_all;
  }

}
