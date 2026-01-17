export default defineCachedEventHandler(async () => {
  const config = useRuntimeConfig().public

  try {
    return config
  }
  catch (error) {
    console.error(error)
  }
}, {
  maxAge: 60 * 60 * 24, // 24 hours
})
