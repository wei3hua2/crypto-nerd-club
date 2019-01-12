import { Injectable } from '@angular/core';
import * as Octokit from '@octokit/rest';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class GhService {

  github;

  constructor(config: ConfigService) {
    this.github = new Octokit({
      headers: {
        Authorization: config.getGithubAPIKey()
      }
    });
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
