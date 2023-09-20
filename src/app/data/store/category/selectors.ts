import { createSelector } from "@ngrx/store";
import { RootState } from "..";
import { CategoryState } from "./state";

const selectFeature = (state: RootState): CategoryState => state.categories;
export const selectCategories = createSelector(selectFeature, (state) => state.categories);
