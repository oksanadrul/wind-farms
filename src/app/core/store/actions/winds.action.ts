import { Action } from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {Data} from '../../shared/data';
import {WindFarmResult} from '../../shared';
import {WindFarms} from '../../shared/winds';

export enum WindsActionTypes {
  LOAD_WINDS_FARMS = '[Wind Management] Load Wind Farms',
  LOAD_WINDS_FARMS_SUCCESS = '[Wind Management] Load Wind Farms Success',
  LOAD_WINDS_FARMS_ERROR = '[Wind Management] Load Wind Farms Error',
  FILTER_WIND_FARMS = '[Wind Farm Management] Filter Farm Wind',
  FILTER_WINDS_FARMS_SUCCESS = '[Wind Farm Management] Filter Farm Wind Success',
  FILTER_WIND_FARMS_ERROR = '[Wind Farm Management] Filter Farm Wind Success'
}

export class LoadWindFarms implements Action {
  readonly type = WindsActionTypes.LOAD_WINDS_FARMS;

  constructor(public payload: any) {}
}

export class LoadWindFarmsSuccess implements Action {
  readonly type = WindsActionTypes.LOAD_WINDS_FARMS_SUCCESS;

  constructor(public payload: WindFarms[]) {}
}


export class LoadWindFarmsError implements Action {
  readonly type = WindsActionTypes.LOAD_WINDS_FARMS_ERROR;

  constructor(public payload: HttpErrorResponse['message']) {}
}

export class FilterWindFarms implements Action {
  readonly type = WindsActionTypes.FILTER_WIND_FARMS;

  constructor(public payload: number) {

  }
}

export class FilterWindFarmsSuccess implements Action {
  readonly type = WindsActionTypes.FILTER_WINDS_FARMS_SUCCESS;

  constructor(public payload: WindFarms['result']) {
  }
}

export class FilterWindFarmsError implements Action {
  readonly type = WindsActionTypes.FILTER_WIND_FARMS_ERROR;

  constructor(public payload: HttpErrorResponse['message']) {}
}


export type WindsActions = LoadWindFarms
  | LoadWindFarmsSuccess
  | LoadWindFarmsError
  | FilterWindFarms
  | FilterWindFarmsSuccess
  | FilterWindFarmsError;
