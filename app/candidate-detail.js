export default function candidateDetail($ngRedux) {
  return {
    template: ['<div class="candidate-detail" ng-if="candidate">',
      '<div class="name">Name: {{ candidate.name }}</div>',
      '<div class="title">Title: {{ candidate.title }}</div>',
      '<div class="salary">Salary: {{ candidate.salary }}</div>',
      '</div>'].join(''),
    restrict: 'E',
    link: (scope) => {
      // Connect your directive to Redux store
      let unsubscribe = $ngRedux.connect(connectStateToScope)(scope)

      // Cleanup
      scope.$on('$destroy', unsubscribe)

      // Connect state to your scope
      function connectStateToScope(state) {
        return {
          candidate: state.selectedCandidate
        }
      }
    }
  }
}

