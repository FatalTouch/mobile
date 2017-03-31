import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';

export default initialState => {

  const finalCreateStore = compose(
    applyMiddleware(
      thunk,
      createLogger()
    )
  )(createStore);

  return finalCreateStore(reducers, initialState);
};
