import mongoose, { Schema } from 'mongoose'

const incomingSchema = new Schema({
  article: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  operator: {
    type: String,
    default: 'Operator #1'
  },
  items: Object
}, {
  timestamps: true
})

incomingSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      article: this.article,
      date: this.date,
      operator: this.operator,
      items: this.items,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Incoming', incomingSchema)

export const schema = model.schema
export default model
