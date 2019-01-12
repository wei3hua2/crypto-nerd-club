import { Component, OnInit, Input, Output, EventEmitter,
  ViewChild, TemplateRef } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'repos-table',
  templateUrl: './repos-table.component.html',
  styleUrls: ['./repos-table.component.sass']
})
export class ReposTableComponent implements OnInit {

  _rows;
  @Input('rows')
  set rows(r) {
    this._rows = r;
  }
  get rows() {
    return this._rows;
  }

  @Output()
  cellClick: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('repoCell')
  repoCell: TemplateRef<any>;

  @ViewChild('summaryStarCell')
  summaryStarCell: TemplateRef<any>;

  @ViewChild('headerTemplate')
  headerT: TemplateRef<any>;

  columns;

  constructor() {}

  ngOnInit() {

    this.columns = [
      // {'prop': 'name', 'name': 'Name'},
      // {'prop': 'description', 'name': 'Description'},
      // {'prop': 'language', 'name': 'Language'},
      {'prop': 'stargazers_count', 'name': 'Projects', cellTemplate: this.repoCell,
      headerTemplate: this.headerT, summaryFunc: () => null }
      // {'prop': 'forks', 'name': 'Forks'},
      // {'prop': 'open_issues_count', 'name': 'Open Issue'}
      ];
  }

  getStars() {
    return _.map(this.rows, function (row) {
      return {'name': row.name, 'value': row.stargazers_count};
    });
  }
}
