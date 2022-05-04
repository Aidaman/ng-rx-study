import {IAuthState} from "../../auth/types/authState.interface";
import {IFeedState} from "./feed-state.interface";
import {IPopularTagsState} from "../general-feed/popular-tags/types/popular-tags-state.interface";
import {IArticleState} from "../../articles/types/article-state.interface";

export interface IAppState {
  auth: IAuthState,
  feed: IFeedState,
  popularTags: IPopularTagsState,
  article: IArticleState,
}
