export * from './winds.reducer';
import { createFeatureSelector } from '@ngrx/store';
import * as fromWindList from './winds.reducer';

export interface WindManagementState {
  list: fromWindList.State;
}

export const reducers = {
  list: fromWindList.reducer,
};

export const getWindList = createFeatureSelector<WindManagementState>('winds');
