import axios from 'axios';

/* selectors */
export const getAll = ({ productDetails }) => productDetails;
export const getById = ({ productDetails }, productId) => productDetails[productId];

/* ACTIONS */

// action name creator
const reducerName = 'productDetails';
const createActionName = name => `app/${reducerName}/${name}`;

const changeAddToCartCountActionName = createActionName('changeAddToCartCount');

export const changeAddToCartCount = ({ productId, count }) => ({type: changeAddToCartCountActionName, payload: { productId, count }});


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case changeAddToCartCountActionName: {
      const { productId, count } = action.payload;
      const fixedCount = Math.max(1, count);
      return {
        ...statePart,
        [productId]: {
          ...statePart[productId],
          addToCartCount: fixedCount,
        },
      };
    }
    default:
      return statePart;
  }
}
