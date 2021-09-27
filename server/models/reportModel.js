import mongoose from 'mongoose'

const string = {
  type: String,
}

const reportSchema = new mongoose.Schema({
  id: string,
  source: string,
  sourceIdentityId: string,
  reference: {
    referenceId: string,
    referenceType: string,
  },
  state: string,
  payload: {
    source: string,
    reportType: string,
    message: string,
    reportId: string,
    referenceResourceId: string,
    referenceResourceType: string,
  },
  created: {
    type: Date,
  },
})

// Third arg is to assign the Report model to the pre-existing `elements` collection.
const Report = mongoose.model('Report', reportSchema, 'elements')

export default Report
