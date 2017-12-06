import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Raw, { schema } from './model'

const router = new Router()
const { article, name, limit, image, status, quantity, prognosedNeed, prognosedPrice, actualPrice, needStatistics, priceStatistics } = schema.tree

/**
 * @api {post} /raws Create raw
 * @apiName CreateRaw
 * @apiGroup Raw
 * @apiParam article Raw's article.
 * @apiParam name Raw's name.
 * @apiParam limit Raw's limit.
 * @apiParam image Raw's image.
 * @apiParam status Raw's status.
 * @apiParam quantity Raw's quantity.
 * @apiParam prognosedNeed Raw's prognosedNeed.
 * @apiParam prognosedPrice Raw's prognosedPrice.
 * @apiParam actualPrice Raw's actualPrice.
 * @apiParam needStatistics Raw's needStatistics.
 * @apiParam priceStatistics Raw's priceStatistics.
 * @apiSuccess {Object} raw Raw's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Raw not found.
 */
router.post('/',
  body({ article, name, limit, image, status, quantity, prognosedNeed, prognosedPrice, actualPrice, needStatistics, priceStatistics }),
  create)

/**
 * @api {get} /raws Retrieve raws
 * @apiName RetrieveRaws
 * @apiGroup Raw
 * @apiUse listParams
 * @apiSuccess {Object[]} raws List of raws.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /raws/:id Retrieve raw
 * @apiName RetrieveRaw
 * @apiGroup Raw
 * @apiSuccess {Object} raw Raw's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Raw not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /raws/:id Update raw
 * @apiName UpdateRaw
 * @apiGroup Raw
 * @apiParam article Raw's article.
 * @apiParam name Raw's name.
 * @apiParam limit Raw's limit.
 * @apiParam image Raw's image.
 * @apiParam status Raw's status.
 * @apiParam quantity Raw's quantity.
 * @apiParam prognosedNeed Raw's prognosedNeed.
 * @apiParam prognosedPrice Raw's prognosedPrice.
 * @apiParam actualPrice Raw's actualPrice.
 * @apiParam needStatistics Raw's needStatistics.
 * @apiParam priceStatistics Raw's priceStatistics.
 * @apiSuccess {Object} raw Raw's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Raw not found.
 */
router.put('/:id',
  body({ article, name, limit, image, status, quantity, prognosedNeed, prognosedPrice, actualPrice, needStatistics, priceStatistics }),
  update)

/**
 * @api {delete} /raws/:id Delete raw
 * @apiName DeleteRaw
 * @apiGroup Raw
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Raw not found.
 */
router.delete('/:id',
  destroy)

export default router
