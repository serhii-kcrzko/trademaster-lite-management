import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Outcoming } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Outcoming.create(body)
    .then((outcoming) => outcoming.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Outcoming.find(query, select, cursor)
    .then((outcomings) => outcomings.map((outcoming) => outcoming.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Outcoming.findById(params.id)
    .then(notFound(res))
    .then((outcoming) => outcoming ? outcoming.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Outcoming.findById(params.id)
    .then(notFound(res))
    .then((outcoming) => outcoming ? _.merge(outcoming, body).save() : null)
    .then((outcoming) => outcoming ? outcoming.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Outcoming.findById(params.id)
    .then(notFound(res))
    .then((outcoming) => outcoming ? outcoming.remove() : null)
    .then(success(res, 204))
    .catch(next)
