import { combineEpics } from 'redux-observable';
import { fetchTodosEpic } from './todos';

export default combineEpics(fetchTodosEpic);
