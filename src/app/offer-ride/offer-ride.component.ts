import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  offerRideForm!: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() 
  {
    this.offerRideForm = this.formBuilder.group({
      name: ['', Validators.required],
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
  }

  goBack() {
    window.history.back();
  }

}
