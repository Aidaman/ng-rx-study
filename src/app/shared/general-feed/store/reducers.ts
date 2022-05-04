import {IFeedState} from "../../types/feed-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "./actions/get-feed.action";
import {routerNavigatedAction} from "@ngrx/router-store";

const initialState: IFeedState = {
  data: null,
  error: null,
  isLoading: false
}

const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state: IFeedState): IFeedState => ({
    ...state,
    isLoading: true,
    })
  ),
  on(getFeedSuccessAction, (state: IFeedState, action: { feed: any; }): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(getFeedFailureAction, (state: IFeedState, action: any): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigatedAction, (): IFeedState => ({
    ...initialState,
    isLoading: true,
  }))
)

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action);
}
