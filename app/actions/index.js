export const SET_SELECTED_CANDIDATE = 'SET_SELECTED_CANDIDATE'

export function setSelectedCandidate(candidate) {
  return {
    type: SET_SELECTED_CANDIDATE,
    candidate
  }
}
