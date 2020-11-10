/* selectors */
export const getCart = ({ cart }) => cart;

/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const changeCountActionName = createActionName('changeCount');
const addToCartActionName = createActionName('addToCart');
const removeProductFromCartActionName = createActionName('removeProduct');

export const changeCount = ({ id, count }) => ({type: changeCountActionName, payload: { id, count }});
export const addToCart = ({ id, count }) => ({type: addToCartActionName, payload: { id, count }});
export const removeProductFromCart = ({ id }) => ({type: removeProductFromCartActionName, payload: {id}});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case changeCountActionName: {
      const { id, count } = action.payload;
      const fixedCount = Math.max(1, count);
      const items = [...statePart.items];
      const index = items.findIndex(product => product.id === id);

      items[index] = {
        ...items[index],
        count: fixedCount,
      };
      return {
        ...statePart,
        items: items,
      };
    }
    case addToCartActionName: {
      const { id, count } = action.payload;
      return {
        ...statePart,
        items: [
          ...statePart.items,
          { id: id, count: count },
        ],
      };
    }
    case removeProductFromCartActionName: {
      const { id } = action.payload;
      const items = [...statePart.items];
      const index = items.findIndex(product => product.id === id);
      items.splice(index, 1);
      return {
        ...statePart,
        items,
      };
    }
    default:
      return statePart;
  }
}
