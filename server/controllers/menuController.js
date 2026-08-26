import MenuItem from '../models/MenuItem.js'

async function getMenuItems(request, response) {
  const filter = { isAvailable: true }
  if (request.query.category) filter.category = request.query.category

  const items = await MenuItem.find(filter).sort({ sortOrder: 1, createdAt: 1 }).lean()
  response.json({ status: 'ok', count: items.length, data: items })
}

async function getMenuItem(request, response) {
  const item = await MenuItem.findOne({ _id: request.params.id, isAvailable: true }).lean()
  if (!item) return response.status(404).json({ status: 'error', message: 'Menu item not found.' })
  return response.json({ status: 'ok', data: item })
}

export { getMenuItem, getMenuItems }
