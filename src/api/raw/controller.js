import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Raw } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Raw.create(body)
    .then((raw) => raw.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Raw.find(query, select, cursor)
    .then((raws) => raws.map((raw) => raw.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Raw.findById(params.id)
    .then(notFound(res))
    .then((raw) => raw ? raw.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Raw.findById(params.id)
    .then(notFound(res))
    .then((raw) => raw ? _.merge(raw, body).save() : null)
    .then((raw) => raw ? raw.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Raw.findById(params.id)
    .then(notFound(res))
    .then((raw) => raw ? raw.remove() : null)
    .then(success(res, 204))
    .catch(next)
