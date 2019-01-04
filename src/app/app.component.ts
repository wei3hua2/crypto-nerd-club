import { Component } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'crypto-nerd-club';

  constructor(angulartics2GoogleTagManager: Angulartics2GoogleTagManager) {
    angulartics2GoogleTagManager.startTracking();
  }

}
