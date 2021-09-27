import Report from '../models/reportModel.js'

export const getReports = async (req, res, next) => {
  try {
    const reports = await Report.find({})
    res.locals.reports = reports
    return next()
  } catch (error) {
    console.error('ERROR in reportsController.getReports: ', error.message)
    return next(error)
  }
}

export const resolveReport = async (req, res, next) => {
  try {
    const updatedReport = await Report.findByIdAndUpdate(
      { _id: req.params.reportId },
      { state: 'RESOLVED' },
      { new: true, omitUndefined: true }
    )
    res.locals.updatedReport = updatedReport
    return next()
  } catch (error) {
    console.error('ERROR resolveReport: ', error)
  }
}

export const blockReport = async (req, res, next) => {
  try {
    const blockedReport = await Report.findByIdAndUpdate(
      { _id: req.params.reportId },
      { state: 'BLOCKED' },
      { new: true, omitUndefined: true }
    )
    res.locals.blockedReport = blockedReport
    return next()
  } catch (error) {
    console.error('ERROR blockReport: ', error)
  }
}

export const reopenReport = async (req, res, next) => {
  try {
    const reopenedReport = await Report.findByIdAndUpdate(
      { _id: req.params.reportId },
      { state: 'OPEN' },
      { new: true, omitUndefined: true }
    )
    console.log(`reopenedReport`, reopenedReport)
    res.locals.reopenedReport = reopenedReport
    return next()
  } catch (error) {
    console.error('ERROR reopenReport: ', error)
  }
}
