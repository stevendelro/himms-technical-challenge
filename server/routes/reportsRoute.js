import express from 'express'
import * as reportsController from '../controllers/reportsController.js'

const router = express.Router()

router.get('/', reportsController.getReports, (req, res) => {
  res.status(200).json({ reports: res.locals.reports })
})

router.put('/:reportId', reportsController.resolveReport, (req, res) => {
  res.status(202).json({ resolvedReport: res.locals.updatedReport})
})

router.post('/block/:reportId', reportsController.blockReport, (req, res) => {
  res.status(202).json({ blockedReport: res.locals.blockedReport })
})

router.post('/reopen/:reportId', reportsController.reopenReport, (req, res) => {
  res.status(202).json({ reopenedReport: res.locals.reopenedReport })
})

export default router
