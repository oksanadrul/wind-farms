import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../core/store';
import {WindFarmResult} from '../../core/shared';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  // Set names of columns
  displayedColumns = ['month', 'budget', 'realized'];
  allWindFarms$: Observable<WindFarmResult[]>;

  constructor(private store: Store<fromStore.WindManagementState>) {
  }

  ngOnInit() {
    this.allWindFarms$ = this.store.pipe(select(fromStore.getFilteredEntitiesState));
  }

}
