import { Component } from '@angular/core';
import { LoggingServiceService } from '../Services/logging-service.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {
  constructor(private loggingService:  LoggingServiceService) {}
logs:any;
  getData() {
    this.logs = this.loggingService.getLogs();
    console.log(this.logs); // Access the logged data within your component
  }
}
