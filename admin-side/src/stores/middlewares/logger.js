export const logger = (store) => (next) => (action) => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('dispatched', store.getState())
  return result
}
