import { ElementRef, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Login } from './login/login';



@Injectable({
    providedIn: 'root'
})
export class RestService {
    constructor(private http: HttpClient) {}

    // Makes a get request to the backend to fetch users data
    getUsers(): Observable<Login[]> {
        return this.http.get<Login[]>('http://localhost:4000/api/user/users').pipe(
            catchError(this.handleError));
    }

    getRides(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:4000/api/rides/ridedetails');
    }

    newRide(ride: any)
    {
        ride = JSON.parse(JSON.stringify(ride))
        console.log(ride);
      //  http.post('myapiendpoint.com', params, options).subscribe();
        return this.http.post('http://localhost:4000/api/rides/addride', ride).subscribe();
    }

    increment(c_id: any)
    {
        console.log(c_id);
        return this.http.post(`http://localhost:4000/api/rides/cancelride/${c_id}`, {}).subscribe();
    }

    decrement(c_id: any)
    {
        console.log(c_id);
        return this.http.post(`http://localhost:4000/api/rides/bookride/${c_id}`, {}).subscribe();
    }

    // Invoked if an error is thrown in the get request
    private handleError(err: HttpErrorResponse) {
        console.error(err);
        return throwError(()=>err.error() || 'Server error');
    }

    uname: string = "hi";

    read(): any{
        return this.uname;
      }
    
      write(val: any){
        this.uname = val;
        console.log(this.uname);
      }

}



