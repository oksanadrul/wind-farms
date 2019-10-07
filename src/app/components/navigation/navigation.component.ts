import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class AppNavigationComponent {
  @Input() expanded: boolean;

  sideNavItems = [
    {
      name: 'chart',
      icon: 'graphic_eq',
      route: 'chart',
    },
    {
      name: 'table',
      icon: 'grid_on',
      route: 'table',
    },
  ];

  constructor(public router: Router) {
  }

  isLinkActive(url): boolean {
    return this.router.url.includes(url.name);
  }
}
