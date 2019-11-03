import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mapTo, switchMap, catchError, delay } from 'rxjs/operators';

import TODOS from 'store/constants/todos';

const URL = 'http://nido-semifriends.codeanyapp.com/license';

export const fetchTodos = () => ({ type: TODOS.FETCH });

export const successTodos = () => ({ type: TODOS.SUCCESS });

export const errorTodos = error => ({
  type: TODOS.ERROR,
  payload: error.xhr.response
});

export const retryTodos = () => ({ type: TODOS.RETRY });

export const fetchTodosEpic = action$ =>
  action$.pipe(
    ofType(TODOS.FETCH),
    switchMap(() => ajax.getJSON(URL).pipe(mapTo(() => successTodos()))),
    catchError(error =>
      errorTodos(error).pipe(
        delay(2000),
        mapTo(retryTodos())
      )
    )
  );
