import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Incoming } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Incoming.create(body)
    .then((incoming) => incoming.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Incoming.find(query, select, cursor)
    .then((incomings) => incomings.map((incoming) => incoming.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Incoming.findById(params.id)
    .then(notFound(res))
    .then((incoming) => incoming ? incoming.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Incoming.findById(params.id)
    .then(notFound(res))
    .then((incoming) => incoming ? _.merge(incoming, body).save() : null)
    .then((incoming) => incoming ? incoming.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Incoming.findById(params.id)
    .then(notFound(res))
    .then((incoming) => incoming ? incoming.remove() : null)
    .then(success(res, 204))
    .catch(next)
