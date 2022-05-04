import {PopularTagType} from "../../../shared/types/popular-tag.type";

export interface IPopularTagsState {
  data: PopularTagType[] | null,
  error: string | null,
  isLoading: boolean,
}
