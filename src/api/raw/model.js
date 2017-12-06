import mongoose, { Schema } from 'mongoose'

const rawSchema = new Schema({
  article: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  limit: {
    type: Number,
    required: true,
    default: 0
  },
  image: {
    type: String,
    required: false
  },
  status: {
    type: Number,
    default: 0
  },
  quantity: {
    type: Number,
    default: 0
  },
  prognosedNeed: {
    type: Number,
    default: 0
  },
  prognosedPrice: {
    type: Number,
    default: 0
  },
  actualPrice: {
    type: Number,
    default: 0
  },
  needStatistics: {
    type: [Number],
    default: []
  },
  priceStatistics: {
    type: [Number],
    default: []
  }
}, {
  timestamps: true
})

rawSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      article: this.article,
      name: this.name,
      limit: this.limit,
      image: this.image,
      status: this.status,
      quantity: this.quantity,
      prognosedNeed: this.prognosedNeed,
      prognosedPrice: this.prognosedPrice,
      actualPrice: this.actualPrice,
      needStatistics: this.needStatistics,
      priceStatistics: this.priceStatistics,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Raw', rawSchema)

export const schema = model.schema
export default model
