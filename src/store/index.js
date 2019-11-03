import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from 'store/reducers';
import rootEpic from 'store/epics';

export default (() => {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
})();
