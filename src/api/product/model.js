import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
  article: {
    type: String
  },
  name: {
    type: String
  },
  image: {
    type: String
  },
  cost: {
    type: String
  },
  lift: {
    type: String
  },
  priority: {
    type: String
  },
  complex: {
    type: String
  },
  status: {
    type: String
  },
  prognosedNeed: {
    type: String
  },
  price: {
    type: String
  },
  needStatistics: {
    type: Array
  },
  popularityStatistics: {
    type: Array
  },
  ingridients: Object
}, {
  timestamps: true
})

productSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      article: this.article,
      name: this.name,
      image: this.image,
      cost: this.cost,
      lift: this.lift,
      priority: this.priority,
      complex: this.complex,
      status: this.status,
      prognosedNeed: this.prognosedNeed,
      price: this.price,
      needStatistics: this.needStatistics,
      popularityStatistics: this.popularityStatistics,
      ingridients: this.ingridients,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Product', productSchema)

export const schema = model.schema
export default model
