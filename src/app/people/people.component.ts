import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GhService } from '../service/gh.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.sass']
})
export class PeopleComponent implements OnInit {

  peopleId;
  people;

  constructor(
    private route: ActivatedRoute,
    private ghSvc: GhService) {
    this.peopleId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.people = from(this.ghSvc.users.getByUsername({username: this.peopleId}));
  }

}
