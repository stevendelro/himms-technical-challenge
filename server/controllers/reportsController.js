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
      { _id: req.params.reportId }, // Itentifier to locate document to modify
      { state: req.params.status }, // The modifications to be made
      { new: true, omitUndefined: true } // Config
    )
    res.locals.updatedReport = updatedReport
    return next()
  } catch (error) {
    console.error('ERROR updateReport: ', error)
  }
}
