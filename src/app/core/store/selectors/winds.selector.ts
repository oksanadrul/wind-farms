import { createSelector } from '@ngrx/store';
import * as fromWindList from '../reducers/winds.reducer';
import * as fromFeature from '../reducers';

export const getWindListState = createSelector(
  fromFeature.getWindList/* main winds section state  */,
  (state: fromFeature.WindManagementState) => state.list,
);

export const getWindListEntitiesState = createSelector(
  getWindListState,
  fromWindList.getWindEntities,
);

export const getFilteredEntitiesState = createSelector(
  getWindListState,
  fromWindList.getFilteredEntities,
);

export const getWindLoadingState = createSelector(
  getWindListState,
  fromWindList.getWindLoading,
);

export const getWindLoadedState = createSelector(
  getWindListState,
  fromWindList.getWindListLoaded,
);

export const getWindFilteredLoadedState = createSelector(
  getWindListState,
  fromWindList.getWindFilteredListLoaded,
);

export const getWindErrorState = createSelector(
  getWindListState,
  fromWindList.getWindErrors,
);



