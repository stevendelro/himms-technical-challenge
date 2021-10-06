import mongoose from 'mongoose'

const reportSchema = new mongoose.Schema({
  id: String,
  source: String,
  sourceIdentityId: String,
  reference: {
    referenceId: String,
    referenceType: String,
  },
  state: String,
  payload: {
    source: String,
    reportType: String,
    message: String,
    reportId: String,
    referenceResourceId: String,
    referenceResourceType: String,
  },
  created: {
    type: Date,
  },
})

// Third argument is to assign this Report model to the pre-existing `elements` collection within the `reports` database.
const Report = mongoose.model('Report', reportSchema, 'elements')

export default Report
