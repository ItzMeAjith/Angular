import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  onSubmit(aa:any)
  {
    console.log(aa);
  }
  some(f:any)
  {
    console.log(f);
  }
}
