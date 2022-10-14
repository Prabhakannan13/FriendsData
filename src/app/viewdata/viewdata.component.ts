import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   status:boolean=false
fetchData=()=>{
  this.myapi.viewData().subscribe(
    (data)=>{
      this.viewData=data
      this.status=true
    }
  )
}
  viewData:any=[]

  ngOnInit(): void {
  }

}
