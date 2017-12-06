import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Incoming, { schema } from './model'

const router = new Router()
const { article, date, operator, items } = schema.tree

/**
 * @api {post} /incomings Create incoming
 * @apiName CreateIncoming
 * @apiGroup Incoming
 * @apiParam article Incoming's article.
 * @apiParam date Incoming's date.
 * @apiParam operator Incoming's operator.
 * @apiParam items Incoming's items.
 * @apiSuccess {Object} incoming Incoming's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Incoming not found.
 */
router.post('/',
  body({ article, date, operator, items }),
  create)

/**
 * @api {get} /incomings Retrieve incomings
 * @apiName RetrieveIncomings
 * @apiGroup Incoming
 * @apiUse listParams
 * @apiSuccess {Object[]} incomings List of incomings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /incomings/:id Retrieve incoming
 * @apiName RetrieveIncoming
 * @apiGroup Incoming
 * @apiSuccess {Object} incoming Incoming's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Incoming not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /incomings/:id Update incoming
 * @apiName UpdateIncoming
 * @apiGroup Incoming
 * @apiParam article Incoming's article.
 * @apiParam date Incoming's date.
 * @apiParam operator Incoming's operator.
 * @apiParam items Incoming's items.
 * @apiSuccess {Object} incoming Incoming's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Incoming not found.
 */
router.put('/:id',
  body({ article, date, operator, items }),
  update)

/**
 * @api {delete} /incomings/:id Delete incoming
 * @apiName DeleteIncoming
 * @apiGroup Incoming
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Incoming not found.
 */
router.delete('/:id',
  destroy)

export default router
