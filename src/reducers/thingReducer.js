
export const thingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_THING_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.thing)
      ];
    case 'FETCH_THINGS_SUCCESS':
      return action.things;
    default:
      return state;
  }
}
