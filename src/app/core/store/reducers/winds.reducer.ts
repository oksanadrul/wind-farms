import {WindsActionTypes, WindsActions} from '../actions';
import {HttpErrorResponse} from '@angular/common/http';
import {Data} from '../../shared/data';
import {WindFarms} from '../../shared/winds';


export interface State {
  entities: WindFarms[];
  filteredEntities: any;
  loadedList: boolean;
  loadedFilteredList: boolean;
  loading: boolean;
  error: HttpErrorResponse['message'] | null;
}

export const initialState: State = {
  entities: null,
  filteredEntities: null,
  loadedList: false,
  loadedFilteredList: false,
  loading: false,
  error: null,
};

export function reducer(state: State = initialState, action: WindsActions): State {
  switch (action.type) {
    case WindsActionTypes.LOAD_WINDS_FARMS:  {
      return {
        ...state,
        loading: true,
      };
    }

    case WindsActionTypes.LOAD_WINDS_FARMS_SUCCESS:  {
      return {
        ...state,
        entities: action.payload,
        loadedList: true,
        loading: false,
      };
    }

    case WindsActionTypes.LOAD_WINDS_FARMS_ERROR:  {
      return {
        ...state,
        loading: true,
        error: action.payload
      };
    }

    case WindsActionTypes.FILTER_WIND_FARMS: {
      return {
        ...state,
        loading: true,
      };
    }

    case WindsActionTypes.FILTER_WINDS_FARMS_SUCCESS:  {
      return {
        ...state,
        filteredEntities: action.payload,
        loadedFilteredList: true,
        loading: false,
      };
    }

    default:
      return { ...state };
  }
}

export const getWindEntities = (state: State) => state.entities;
export const getFilteredEntities = (state: State) => state.filteredEntities;
export const getWindLoading = (state: State) => state.loading;
export const getWindListLoaded = (state: State) => state.loadedList;
export const getWindFilteredListLoaded = (state: State) => state.loadedFilteredList;
export const getWindErrors = (state: State) => state.error;

