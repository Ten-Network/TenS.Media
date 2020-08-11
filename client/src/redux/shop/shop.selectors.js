import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    fasting: 1,
    sweets: 2,
    pooja: 3, 
    vegetables: 4,
    fruits: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]) 
    )
);