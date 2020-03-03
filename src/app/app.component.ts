import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  minutes:number=0;
  seconds:number=0;
  isTimeUp:boolean=false;
  increment(param){
   // console.log(param.target.className)
   // param.target.className === 'minute' ? this.minutes++: this.seconds++ 
    if(param.target.className === 'minute'){
      if(this.minutes < 60){
        this.minutes++
      }else {
        this.minutes = this.minutes
      }
    }else{
      if(this.seconds < 60){
        this.seconds++
      }else {
        this.seconds = this.seconds
      }
    }
  }
  decrement(param){
   // param.target.className === 'minute' ? this.minutes--: this.seconds-- 
    if(param.target.className === 'minute'){
      if(this.minutes > 0){
        this.minutes--
      }else {
        this.minutes = this.minutes
      }
    }else{
      if(this.seconds > 0){
        this.seconds--
      }else {
        this.seconds = this.seconds
      }
    }
  }

  startTimer(){
    var start = setInterval(()=> {
    if(this.seconds>0){
      this.seconds =  this.seconds-1
      this.isTimeUp = false
      }else{
        clearInterval(start)
        this.isTimeUp = true
      }
    },900)
  }
}
