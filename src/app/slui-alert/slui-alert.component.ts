import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'slui-alert',
  templateUrl: './slui-alert.component.html',
  styleUrls: ['./slui-alert.component.scss']
})
export class SluiAlertComponent implements OnInit {

  @Input() color: string = 'default';
  @Input() dismissable: boolean = false;
  isDismissed: boolean = false;
  @Output() dismissed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get classes() {
    return `slui-alert slui-alert-${this.color}`
  }

  dismiss() {
    this.isDismissed = true;
    setTimeout(() => this.dismissed.emit(null));
  }

}
