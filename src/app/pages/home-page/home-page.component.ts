import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { DataService } from "../../services/data.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [DataService]
 
})
export class HomePageComponent implements OnInit {
public form: FormGroup;
public agendas :any[];

  constructor(private fb:FormBuilder, private dataService: DataService) {
      this.form = this.fb.group({
        data:['']
      })
   }


  ngOnInit() {
       this.dataService.getAgendas().subscribe(result=>{
          console.log(result);
          this.agendas = result;
       },
       error=>{
          console.log(error);
       });
  }

  submit(){   
    this.dataService.getAgenda(this.form.value).subscribe(result=>{
          console.log(result);
           this.agendas = result;
       },
       error=>{
          console.log(error);
       });;
  }

}
