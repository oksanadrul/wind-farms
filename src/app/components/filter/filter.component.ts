import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../core/store';
import {take} from 'rxjs/operators';
import {WindFarms} from '../../core/shared/winds';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() setWindFarm = new EventEmitter<number>();
  options: WindFarms[] = [];
  getUrlParams: string;
  isUrlParams: string[];
  selectedId: any;
  // Set up all subscriptions
  subscriptions: Subscription[] = [];

  constructor(private store: Store<fromStore.WindManagementState>) {
    this.getUrlParams = window.location.href;
  }

  ngOnInit() {
    // Find is query in url params while first loading of page
    this.isUrlParams = this.getUrlParams.match(/id=(.*)/);
    // If there is query in url params load data
    if (this.isUrlParams) {
      this.store.dispatch(new fromStore.FilterWindFarms(+this.isUrlParams[1]));
      this.store.dispatch(new fromStore.LoadWindFarms({}));
    }

    /* Subscriptions */
    this.subscriptions.push(
      this.store.pipe(select(fromStore.getWindListEntitiesState)).subscribe(windFarmsList => {
        if (windFarmsList) {
          this.options = windFarmsList || null;
          // If there is query in url params load data by params
          if (this.isUrlParams) {
            const filteredFarms = windFarmsList.filter(wind => wind.id === +this.isUrlParams[1])[0];
            this.selectedId = filteredFarms.id;
            // this.selectedName =
            this.setWindFarm.emit(this.selectedId);
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Filter wind farms by id
  filterFarms(farmId: number): void {
    this.store.dispatch(new fromStore.FilterWindFarms(+farmId));
    this.setWindFarm.emit(farmId);
  }

  // Get data to option
  getData(event): void {
    if (event) {
      this.store.pipe(
        select(fromStore.getWindLoadedState),
        take(1)
      ).subscribe(hasLoaded => {
        // Memoization. If we call this api don't call it once again
        if (!hasLoaded) {
          setTimeout(() => {
            this.store.dispatch(new fromStore.LoadWindFarms({}));
          }, 2000);
        }
      });
    }
  }

}
