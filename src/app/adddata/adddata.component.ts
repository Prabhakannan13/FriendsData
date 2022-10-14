import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
status:boolean=false
  readValues=()=>{
    let data={
    "name":this.name,
    "friendName":this.friendName,
    "friendNickName":this.friendNickName,
    "DescribeYourFriend":this.DescribeYourFriend
    }
    console.log(data)
    this.myapi.adddata(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Successfully added")
        this.name=""
        this.friendName=""
        this.friendNickName=""
        this.DescribeYourFriend=""
        this.status=true

      }   
    )
  }


  ngOnInit(): void {
  }

}
