import { Component, OnInit, Input, EventEmitter,
  TemplateRef, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.sass']
})
export class CoinTableComponent implements OnInit {

  @Input()
  rows;

  @ViewChild('loginCell')
  loginCell: TemplateRef<any>;

  @ViewChild('dateCell')
  dateCell: TemplateRef<any>;

  @ViewChild('currencyCell')
  currencyCell: TemplateRef<any>;

  columns;

  @Output()
  cellClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

    this.columns = [
      {prop: 'name', name: '', cellTemplate: this.loginCell},
      {prop: 'marketCap', name: 'Market Cap', cellTemplate: this.currencyCell},
      {prop: 'price', name: 'Price ($)', cellTemplate: this.currencyCell},
      {prop: 'public_repos', name: 'No. of Repositories'},
      {prop: 'noOfOpenIssues', name: 'No. of open issues'},
      {prop: 'noOfContris', name: 'No. of contributors'},
      {prop: 'noOfCommits7d', name: 'No. of commits (7d)'},
      {prop: 'created_at', name: 'Created At', cellTemplate: this.dateCell}];
      // {prop: 'updated_at', name: 'Updated At', cellTemplate: this.dateCell}
      // {prop: 'close', name: 'Close', cellTemplate: this.currencyCell},
      // {prop: 'dayVolume', name: 'Volume (day)', cellTemplate: this.numberCell},
      // {prop: 'weekVolume', name: 'Volume (week)', cellTemplate: this.numberCell},
      // {prop: 'monthVolume', name: 'Volume (month)', cellTemplate: this.numberCell},
      // {name: 'Supply', cellTemplate: this.supplyCell}];
  }

}
