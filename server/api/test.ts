export default defineCachedEventHandler(async () => {
  try {
    return 'asdf'
  }
  catch (error) {
    console.error(error)
  }
}, {
  maxAge: 60 * 60 * 24, // 24 hours
})
