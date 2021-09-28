import * as actions from '../actions/actions'

const initialState = {
  reports: [],
  isLoading: false,
  error: {},
}

const spamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.UPDATE_REPORT:
      const withUpdatedReport = []
      state.reports.forEach(report => {
        if (report.id === payload.id) report.state = payload.state
        withUpdatedReport.push(report)
      })
      return {
        ...state,
        reports: withUpdatedReport,
      }
    case actions.FETCH_REPORTS:
      return {
        ...state,
        reports: [...payload.reports],
      }
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
    default:
      return state
  }
}

export default spamReducer
