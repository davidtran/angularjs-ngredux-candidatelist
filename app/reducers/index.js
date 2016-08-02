import { SET_SELECTED_CANDIDATE } from '../actions'

export default function reducer(state = {
  selectedCandidate: null,
  candidates: [
    {
      name: 'David Tran',
      title: 'Frontend developer',
      salary: 70000
    },
    {
      name: 'Mike Nguyen',
      title: 'Backend developer',
      salary: 60000
    },
    {
      name: 'Sascha Gros',
      title: 'Full-stack developer',
      salary: 80000
    }
  ]
}, action) {
  switch (action.type) {
    case SET_SELECTED_CANDIDATE:
      return Object.assign({}, state, {
        selectedCandidate: action.candidate
      })
    default:
      return state
  }

}
