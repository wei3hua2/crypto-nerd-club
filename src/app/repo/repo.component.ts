import { Component, OnInit } from '@angular/core';
import { GhService } from '../service/gh.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { LoadRepoGH } from '../actions/coin.actions';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.sass']
})
export class RepoComponent implements OnInit {

  symbol: string;
  repoId: string;
  ownerId: string;

  repo: Observable<any>;
  commits: Observable<any>;
  contributors: Observable<any>;
  teams: Observable<any>;
  topics: Observable<any>;
  tags: Observable<any>;
  releases: Observable<any>;
  languages: Observable<any>;
  forks: Observable<any>;
  hooks: Observable<any>;
  deployments: Observable<any>;
  downloads: Observable<any>;
  branches: Observable<any>;

  folders = [
    {name: 'Folder A', updated: new Date()},
    {name: 'Folder B', updated: new Date()}
  ];

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute
  ) {
    this.symbol = this.route.snapshot.paramMap.get('symbol');
    this.repoId = this.route.snapshot.paramMap.get('id');
    this.ownerId = this.route.snapshot.paramMap.get('owner');
  }

  ngOnInit() {
    this.store.dispatch(new LoadRepoGH({owner: this.ownerId, repo: this.repoId}));

    this.repo = this.store.select<any>(state => state.coin.repoDetail);
    // this.repo = from(this.ghSvc.repos.get({owner: this.ownerId, repo: this.repoId}));
    // this.commits = from(this.ghSvc.repos.listCommits({owner: this.ownerId, repo: this.repoId}));
    // this.contributors = from(this.ghSvc.repos.listContributors({owner: this.ownerId, repo: this.repoId}));
    // this.releases = from(this.ghSvc.repos.listReleases({owner: this.ownerId, repo: this.repoId}));


    // this.topics = from(this.ghSvc.repos.listTopics({owner: this.ownerId, repo: this.repoId, headers: {
    //   accept: 'application/vnd.github.mercy-preview+json'
    // }}));
    // this.tags = from(this.ghSvc.repos.listTags({owner: this.ownerId, repo: this.repoId}));
    // this.languages = from(this.ghSvc.repos.listLanguages({owner: this.ownerId, repo: this.repoId}));
    // this.teams = from(this.ghSvc.repos.listTeams({owner: this.ownerId, repo: this.repoId}));
    // this.forks = from(this.ghSvc.repos.listForks({owner: this.ownerId, repo: this.repoId}));
    // this.hooks = from(this.ghSvc.repos.listHooks({owner: this.ownerId, repo: this.repoId}));
    // this.deployments = from(this.ghSvc.repos.listDeployments({owner: this.ownerId, repo: this.repoId}));
    // this.downloads = from(this.ghSvc.repos.listDownloads({owner: this.ownerId, repo: this.repoId}));
    // this.branches = from(this.ghSvc.repos.listBranches({owner: this.ownerId, repo: this.repoId}));
  }

}
