import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, pluck, switchMap} from 'rxjs/operators';
import {RestApiService} from '../../services/rest-api.service';

import {FilterWindFarmsError, FilterWindFarmsSuccess, LoadWindFarmsError, LoadWindFarmsSuccess, WindsActionTypes} from '../actions';
import {of} from 'rxjs';

@Injectable()
export class WindListEffects {

  @Effect()
  getWindFarms$ = this.actions$.pipe(
    ofType(WindsActionTypes.LOAD_WINDS_FARMS),
    mergeMap(() => {
      return this.service.getWinds()
        .pipe(
          map(winds =>
            new LoadWindFarmsSuccess(winds)
          ),
          catchError(error => of(new LoadWindFarmsError(error)))
        );

    }),
  );

  @Effect()
  getFilteredWinds$ = this.actions$.pipe(
    ofType(WindsActionTypes.FILTER_WIND_FARMS),
    pluck('payload'),
    switchMap((query) => {
      return this.service.filterWindFarms(query)
        .pipe(
          map(windFarm =>
            new FilterWindFarmsSuccess(windFarm.result)
          ),
          catchError(error => of(new FilterWindFarmsError(error)))
        );
    }),
  );

  constructor(
    private actions$: Actions,
    private service: RestApiService,
  ) {
  }
}
