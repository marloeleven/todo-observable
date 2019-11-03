import TODOS from 'store/constants/todos';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODOS.FETCH:
      return {
        ...state,
        loading: true
      };

    case TODOS.SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        todos: action.payload || []
      };
    case TODOS.ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case TODOS.RETRY:
      return {
        ...state,
        loading: true,
        error: false
      };
    default:
      return state;
  }
};
