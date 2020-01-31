import React from 'react'
import ReactDOM from 'react-dom'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import counterReducer from './counterReducer'
import Field from './field'

const reducers = combineReducers({
  counter: counterReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field />
  </Provider>
,document.getElementById('app'))
