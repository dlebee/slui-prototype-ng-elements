import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'slui-button',
  templateUrl: './slui-button.component.html',
  styleUrls: ['./slui-button.component.scss']
})
export class SluiButtonComponent implements OnInit {

  constructor() { }

  @Input() color: string = 'default';
  @Input() size: string;

  ngOnInit() {
  }

  get buttonClasses() {
    return `slui-button slui-button-${this.color} ${(this.size ? 'slui-button-size-' + this.size : '')}`;
  }
}
