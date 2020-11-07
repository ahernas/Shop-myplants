/* selectors */
export const getAll = ({ products }) => products;
export const getById = ({ products }, productId) => products.find(p => p.id === parseInt(productId, 10));

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
