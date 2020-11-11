import PropTypes from 'prop-types';

export const ProductPropType = PropTypes.shape({
  _id: PropTypes.number,
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
  water: PropTypes.string,
  light: PropTypes.string,
  temperature: PropTypes.string,
  description: PropTypes.string,
  difficulty: PropTypes.string,
  size: PropTypes.string,
});
