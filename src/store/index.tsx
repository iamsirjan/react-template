import { configureStore } from '@reduxjs/toolkit'
import  createSagaMiddleWare  from 'redux-saga'
import { rootSaga } from './root-saga';
import rootReducer from './root-redux'
const SagaMiddleware = createSagaMiddleWare();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware);
  },
})

SagaMiddleware.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch