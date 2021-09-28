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

export const updateReport = async (req, res, next) => {
  try {
    const updatedReport = await Report.findByIdAndUpdate(
      { _id: req.params.reportId },
      { state: req.params.status },
      { new: true, omitUndefined: true }
    )
    res.locals.updatedReport = updatedReport
    return next()
  } catch (error) {
    console.error('ERROR updateReport: ', error)
  }
}
