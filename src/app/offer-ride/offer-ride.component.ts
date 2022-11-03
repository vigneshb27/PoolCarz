import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Rides} from './ride';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  offerRideForm!: FormGroup;

  submitted = false;
  ride = new Rides();
  constructor(private formBuilder: FormBuilder, private restService: RestService) { }

  ngOnInit() 
  {
    this.offerRideForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: [, Validators.required],
      start: ['', Validators.required],
      destination: ['', Validators.required],
      car: ['', Validators.required],
      seats: [, [Validators.required, this.validateSeats]],
    });
  }

   validateSeats(c: FormControl) : any{
      let mini = 1;
      let maxi = 7;
      return c.value >= 1 && c.value <= 7? null :{
        seatsInvalid: {
          message: "Seats should be greater than 0 and less than 8"
        }
      };

  }

  onSubmit()
  {
    this.offerRideForm.markAllAsTouched();
    if(!this.offerRideForm.errors)
    {
      this.submitted = true;
    }
    //console.log(this.ride.destination);
    var n_ride = {
      name: this.ride.name,
      id: this.ride.id,
      start: this.ride.start,
      destination: this.ride.destination,
      car: this.ride.car,
      seats: this.ride.seats,
      username: this.restService.read()
    }

    this.restService.newRide(n_ride);
    
  }

  goBack() {
    window.history.back();
  }

}
