require('../styles/app.css')

import angular from 'angular'
import reducer from './reducers'
import ngRedux from 'ng-redux'
import createLogger from 'redux-logger'
import candidateDetail from './candidate-detail'
import candidateList from './candidate-list'

angular
  .module('app', [ngRedux])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(reducer, [createLogger()])
  })
  .controller('appCtrl', () => {})
  .directive('candidateDetail', candidateDetail)
  .directive('candidateList', candidateList)
