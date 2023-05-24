import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }
  private logs: any[] = [];

  log(data: any) {
    this.logs.push(data);
    console.log(data); // Optional: Log the data to the console as well
  }

  getLogs(): any[] {
    return this.logs;
  }
}
