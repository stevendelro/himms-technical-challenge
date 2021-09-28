import express from 'express'
import * as reportsController from '../controllers/reportsController.js'

const router = express.Router()

router.get('/', reportsController.getReports, (req, res) => {
  res.status(200).json({ reports: res.locals.reports })
})

router.put('/:reportId/:status', reportsController.updateReport, (req, res) => {
  res.status(202).json({ updatedReport: res.locals.updatedReport})
})

router.post('/block/:reportId/:status', reportsController.updateReport, (req, res) => {
  res.status(202).json({ updatedReport: res.locals.updatedReport })
})

router.post('/reopen/:reportId/:status', reportsController.updateReport, (req, res) => {
  res.status(202).json({ updatedReport: res.locals.updatedReport })
})

export default router
