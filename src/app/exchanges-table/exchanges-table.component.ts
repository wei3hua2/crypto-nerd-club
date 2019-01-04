import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'exchanges-table',
  templateUrl: './exchanges-table.component.html',
  styleUrls: ['./exchanges-table.component.sass']
})
export class ExchangesTableComponent implements OnInit {


  @Input()
  rows;

  @Output()
  cellClick = new EventEmitter;

  columns;

  constructor() { }

  ngOnInit() {
    this.columns = [
      {prop: 'exchange', name: 'Exchange'}];
  }

  onCellClick($event) {
    this.cellClick.emit($event);
  }

}
