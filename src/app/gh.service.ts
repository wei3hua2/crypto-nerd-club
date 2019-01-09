import { Injectable } from '@angular/core';
import * as Octokit from '@octokit/rest';

@Injectable({
  providedIn: 'root'
})
export class GhService {

  github;

  constructor() {
    this.github = new Octokit();
  }

  get orgs () {
    return this.github.orgs;
  }
  get repos () {
    return this.github.repos;
  }
  get users () {
    return this.github.users;
  }
}
