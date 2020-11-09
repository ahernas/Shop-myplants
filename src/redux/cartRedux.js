/* selectors */
export const getCart = ({ cart }) => cart;

/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const changeCountActionName = createActionName('changeCount');

export const changeCount = ({ id, count }) => ({type: changeCountActionName, payload: { id, count }});


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case changeCountActionName: {
      const { id, count } = action.payload;
      const fixedCount = Math.max(1, count);
      const items = [...statePart.items];
      const index = items.findIndex(product => product.id === id);
      console.log(index);
      items[index] = {
        ...items[index],
        count: fixedCount,
      };
      return {
        ...statePart,
        items: items,
      };
    }
    default:
      return statePart;
  }
}
