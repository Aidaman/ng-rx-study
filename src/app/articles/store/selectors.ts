import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAppState} from "../../shared/types/app-state.interface";
import {IArticleState} from "../types/article-state.interface";

export const articleFeatureSelector = createFeatureSelector<IAppState, IArticleState>('feed');

export const isLoadingSelector = createSelector(articleFeatureSelector,
  (feedState: IArticleState) => feedState.isLoading);

export const errorSelector = createSelector(articleFeatureSelector,
  (feedState: IArticleState) => feedState.error);

export const articleSelector = createSelector(articleFeatureSelector,
  (feedState: IArticleState) => feedState.data);
