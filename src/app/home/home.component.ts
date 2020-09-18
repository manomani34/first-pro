import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  age: number = 36;
  name: string = "mohammad";
  allowClick = false ;
  btnClick = "Button is not clicked!";
  lastname = "";
  buttonClicked = false;
  tests = ["test1" , "test2"];

  constructor() { 
    setTimeout(() =>{
      this.allowClick =true;
    }, 5000)
  }

  onButtonClick(){
  this.buttonClicked = true;
  this.btnClick = "Button now is clicked!";
  this.tests.push("test");
  }

  getname(){
    return this.name;
  }
  ngOnInit(): void {
  }

  onInputChange(event : Event){
  this.lastname =  (<HTMLInputElement> event.target).value;
  }

}
