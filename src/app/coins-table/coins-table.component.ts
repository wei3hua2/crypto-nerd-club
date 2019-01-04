import { EventEmitter, Component, OnInit, Input, Output,
  TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'coins-table',
  templateUrl: './coins-table.component.html',
  styleUrls: ['./coins-table.component.sass']
})
export class CoinsTableComponent implements OnInit {

  @Input()
  rows;

  @ViewChild('pieSummaryCell')
  pieSummaryCell: TemplateRef<any>;

  @ViewChild('numberCell')
  numberCell: TemplateRef<any>;

  @ViewChild('currencyCell')
  currencyCell: TemplateRef<any>;

  @ViewChild('supplyCell')
  supplyCell: TemplateRef<any>;

  @Output()
  cellClick = new EventEmitter;


  columns;

  constructor() { }

  ngOnInit() {
    this.columns = [
      {prop: 'currency', name: 'Symbol', summaryFunc: (cells) => 'Total : ' + cells.length},
      {prop: 'close', name: 'Close', cellTemplate: this.currencyCell},
      {prop: 'dayVolume', name: 'Volume (day)', cellTemplate: this.numberCell},
      {prop: 'weekVolume', name: 'Volume (week)', cellTemplate: this.numberCell},
      {prop: 'monthVolume', name: 'Volume (month)', cellTemplate: this.numberCell},
      {name: 'Supply', cellTemplate: this.supplyCell}];
  }

  clickRow($event) {
    this.cellClick.emit($event);
  }

}
