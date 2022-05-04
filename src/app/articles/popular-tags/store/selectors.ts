import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IPopularTagsState} from "../types/popular-tags-state.interface";
import {IAppState} from "../../../shared/types/app-state.interface";

export const popularTagsFeatureSelector = createFeatureSelector<IAppState, IPopularTagsState>('popularTags')

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.data,
)
export const popularTagsIsLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.isLoading,
)
export const popularTagsErrorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.error,
)
