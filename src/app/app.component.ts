import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countdown;
  minutes:number=0;
  seconds:number=0;
  isTimeUp:boolean=false;
  increment(param){
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
    const totalSec = this.minutes*60+this.seconds
    this.timer(totalSec)
    this.isTimeUp=false
  }
  timer(second){
    const now = Date.now()
    const then = now + second * 1000
    clearInterval(this.countdown)
    this.countdown = setInterval(()=>{
      const secondsLeft = Math.round((then-Date.now())/1000)
      if(secondsLeft<0){
        clearInterval(this.countdown);
        this.isTimeUp=true
        return
      }
      this.display(secondsLeft)
    },1000)
  }
  display(second){
    const minute = Math.floor(second/60)
    const remainderSeconds = second % 60
    this.minutes=minute;
    this.seconds=remainderSeconds;
  }
}