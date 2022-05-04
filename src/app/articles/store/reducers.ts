import {Action, createReducer, on} from "@ngrx/store";
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "./actions/get-article.action";
import {routerNavigatedAction} from "@ngrx/router-store";
import {IArticleState} from "../types/article-state.interface";

const initialState: IArticleState = {
  data: null,
  error: null,
  isLoading: false
}

const articleReducer = createReducer(
  initialState,
  on(getArticleAction, (state: IArticleState): IArticleState => ({
    ...state,
    isLoading: true,
    })
  ),
  on(getArticleSuccessAction, (state: IArticleState, action): IArticleState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(getArticleFailureAction, (state: IArticleState): IArticleState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigatedAction, (): IArticleState => initialState)
)

export function reducers(state: IArticleState, action: Action) {
  return articleReducer(state, action);
}
