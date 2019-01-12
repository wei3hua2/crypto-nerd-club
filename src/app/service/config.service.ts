import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private NOMIC_API_KEY = '';
  private GITHUB_API_KEY = '';

  constructor() {
  }

  getNomicAPIKey() {
    return this.NOMIC_API_KEY;
  }
  getGithubAPIKey() {
    return this.GITHUB_API_KEY;
  }
}
