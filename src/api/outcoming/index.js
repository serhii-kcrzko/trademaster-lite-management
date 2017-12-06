import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Outcoming, { schema } from './model'

const router = new Router()
const { article, date, operator, items } = schema.tree

/**
 * @api {post} /outcomings Create outcoming
 * @apiName CreateOutcoming
 * @apiGroup Outcoming
 * @apiParam article Outcoming's article.
 * @apiParam date Outcoming's date.
 * @apiParam operator Outcoming's operator.
 * @apiParam items Outcoming's items.
 * @apiSuccess {Object} outcoming Outcoming's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Outcoming not found.
 */
router.post('/',
  body({ article, date, operator, items }),
  create)

/**
 * @api {get} /outcomings Retrieve outcomings
 * @apiName RetrieveOutcomings
 * @apiGroup Outcoming
 * @apiUse listParams
 * @apiSuccess {Object[]} outcomings List of outcomings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /outcomings/:id Retrieve outcoming
 * @apiName RetrieveOutcoming
 * @apiGroup Outcoming
 * @apiSuccess {Object} outcoming Outcoming's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Outcoming not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /outcomings/:id Update outcoming
 * @apiName UpdateOutcoming
 * @apiGroup Outcoming
 * @apiParam article Outcoming's article.
 * @apiParam date Outcoming's date.
 * @apiParam operator Outcoming's operator.
 * @apiParam items Outcoming's items.
 * @apiSuccess {Object} outcoming Outcoming's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Outcoming not found.
 */
router.put('/:id',
  body({ article, date, operator, items }),
  update)

/**
 * @api {delete} /outcomings/:id Delete outcoming
 * @apiName DeleteOutcoming
 * @apiGroup Outcoming
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Outcoming not found.
 */
router.delete('/:id',
  destroy)

export default router
