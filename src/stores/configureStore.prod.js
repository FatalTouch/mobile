import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default initialState => {

  const finalCreateStore = compose(
    applyMiddleware(
      thunk
    )
  )(createStore);

  return finalCreateStore(reducers, initialState);
};
