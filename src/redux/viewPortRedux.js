/* selectors */
export const getViewPort = ({ viewport }) => viewport;
/* action name creator */
const reducerName = 'viewport';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_VIEWPORT = createActionName('CHANGE_VIEWPORT');

/* action creators */
export const changeViewPort = payload => ({ payload, type: CHANGE_VIEWPORT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_VIEWPORT: {
      return {
        ...statePart,
        viewport: action.payload,
      };
    }
    default:
      return statePart;
  }
}
