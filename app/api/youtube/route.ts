import axios from "axios"

export async function GET() {
  const videoId = "arj7oStGLkU"

  try {
    const response = await axios.get(
      `https://yt-api.p.rapidapi.com/related?id=${videoId}`,
      {
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "yt-api.p.rapidapi.com",
        },
      }
    )

    const videos = response.data.data
    if (!videos || videos.length === 0) {
      return new Response(
        JSON.stringify({ error: "No related videos found" }),
        { status: 404 }
      )
    }

    console.log(videos)
    const randomIndex = Math.floor(Math.random() * videos.length)
    const randomVideo = videos[randomIndex]

    return new Response(JSON.stringify(randomVideo), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    })
  }
}
