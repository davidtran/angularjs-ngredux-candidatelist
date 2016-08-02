import {setSelectedCandidate} from './actions'

export default function candidateList($ngRedux) {
  return {
    template: [
      '<ul>',
      '<li ng-repeat="candidate in candidates" ng-click="setSelectedCandidate(candidate)">{{ candidate.name }}</li>',
      '</ul>'
    ].join(''),
    restrict: 'E',
    link: (scope) => {
      // Connect to Redux store
      let unsubscribe = $ngRedux.connect(mapStateToScope, mapDispatchToScope)(scope)

      // Unsubscribe to changes when your directive is destroyed
      scope.$on('$destroy', unsubscribe)

      // We only get the candidate
      function mapStateToScope(state) {
        return {
          candidates: state.candidates
        }
      }

      function mapDispatchToScope(dispatch) {
        return {
          setSelectedCandidate: (candidate) => dispatch(setSelectedCandidate(candidate))
        }
      }
    }
  }
}
