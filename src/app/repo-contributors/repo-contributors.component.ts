import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'repo-contributors',
  templateUrl: './repo-contributors.component.html',
  styleUrls: ['./repo-contributors.component.sass']
})
export class RepoContributorsComponent implements OnInit {

  @Input()
  contributors;

  @Output()
  clickContri = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
