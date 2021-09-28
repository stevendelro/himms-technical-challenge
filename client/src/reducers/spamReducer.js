import * as actions from '../actions/actions'

const initialState = {
  reports: [],
  isLoading: false,
  error: {},
}

const spamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_REPORTS_STARTED:
      return {
        ...state,
        isLoading: true,
      }
    case actions.FETCH_REPORTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case actions.FETCH_REPORTS_ERROR:
    case actions.UPDATE_REPORT_ERROR:
      return {
        ...state,
        error: { ...error },
      }
    case actions.FETCH_REPORTS:
      return {
        ...state,
        reports: [...payload.reports],
      }
    case actions.BLOCK_REPORT:
      const withBlockedUpdate = []
      // Payload contains the report that was changed in the DB
      // Iterate through the reports array to find the client-side report that matches the changed report
      // If a match is found, apply the changes to the client-side report
      // Push all reports into an empty array.
      // Set the newly constructed array as `reports` in the store.
      state.reports.forEach(report => {
        if (report.id === payload.blockedReport.id) {
          report.state = payload.blockedReport.state
        }
        withBlockedUpdate.push(report)
      })
      return {
        ...state,
        reports: withBlockedUpdate
      }
    case actions.RESOLVE_REPORT:
      const withResolvedUpdate = []
      // Same as notes above.
      state.reports.forEach(report => {
        if (report.id === payload.resolvedReport.id) {
          report.state = payload.resolvedReport.state
        }
        withResolvedUpdate.push(report)
      })
      return {
        ...state,
        reports: withResolvedUpdate
      }
    case actions.REOPEN_REPORT:
      const withReopenedUpdate = []
      // Same as notes above.
      state.reports.forEach(report => {
        if (report.id === payload.reopenedReport.id) {
          report.state = payload.reopenedReport.state
        }
        withReopenedUpdate.push(report)
      })
      return {
        ...state,
        reports: withReopenedUpdate
      }
    default:
      return state
  }
}

export default spamReducer
