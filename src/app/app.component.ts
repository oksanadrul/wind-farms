import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isSidebarOpen = true;
  urlParams: string;
  selectedIdFromUrl: number;
  // Set up all subscriptions
  subscriptions: Subscription[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.urlParams = window.location.href;
  }

  ngOnInit() {
    /* Subscriptions */
    this.subscriptions.push(
    // Set url params from filter
    this.route
      .queryParams
      .subscribe(() => {
        if (this.selectedIdFromUrl) {
          this.router.navigate([], {queryParams: {id: this.selectedIdFromUrl}});
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Set url params from filter
  getWindFarmIdRoute(event: number): void {
    this.selectedIdFromUrl = event;
    if (event) {
      this.router.navigate([], {queryParams: {id: event}});
    }
  }
}
