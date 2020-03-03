import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent implements OnInit {
  @Input() secTime:number;
  @Output() timer = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log(this.secTime)
  }
}
