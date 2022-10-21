import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilter'
})
export class RideFilterPipe implements PipeTransform {

  transform(rides: any[], args: string): any {
    
    if(args == "fromOffice")
    {
      return rides.filter(ride => ride.offerId == "Office");
    }

    else if(args == "toOffice")
    {
      return rides.filter(ride => ride.destination == "Office");
    }

    else if(args == "others")
    {
      return rides.filter(ride => ride.offerId != "Office" && ride.destination != "Office");
    }

    else if(args == "all")
    {
      return rides;
    }
     
  }

}
