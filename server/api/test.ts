export default defineCachedEventHandler(async () => {
  const { twitchId } = useRuntimeConfig().public

  try {
    return twitchId
  }
  catch (error) {
    console.error(error)
  }
}, {
  maxAge: 60 * 60 * 24, // 24 hours
})
