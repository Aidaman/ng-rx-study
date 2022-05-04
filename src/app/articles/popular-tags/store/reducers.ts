import {IPopularTagsState} from "../types/popular-tags-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "./actions/get-populra-tags.action";

const initialState: IPopularTagsState = {
  data: null,
  isLoading: false,
  error: null,
}

const popularTagsReducers = createReducer(
  initialState,
  on(getPopularTagsAction, (state): IPopularTagsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(getPopularTagsSuccessAction, (state, action): IPopularTagsState => ({
      ...state,
      data: action.popularTags,
      isLoading: false,
    })
  ),
  on(getPopularTagsFailureAction, (state): IPopularTagsState => ({
      ...state,
      isLoading: false,
    })
  ),
)

export function reducers(state: IPopularTagsState, action: Action){
  return popularTagsReducers(state, action)
}
