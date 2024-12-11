import axios from "axios"

export async function GET() {
  const videoId = "arj7oStGLkU"
  const geo = "US"
  const lang = "en"
  const options = "1"

  if (!videoId) {
    return new Response(JSON.stringify({ error: "Video ID is required" }), {
      status: 400,
    })
  }

  try {
    const response = await axios.get(
      `https://yt-api.p.rapidapi.com/video/info`,
      {
        params: {
          id: videoId,
          geo: geo,
          lang: lang,
          options: options,
        },
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "yt-api.p.rapidapi.com",
        },
      }
    )

    if (!response.data || !response.data.id) {
      throw new Error("Invalid response from API")
    }
    const {
      id,
      title,
      lengthSeconds,
      channelTitle,
      thumbnail,
      viewCount,
      isPrivate,
      thumbsCount,
    } = response.data
    console.log("video data", response.data)

    const filteredData = {
      id,
      title,
      lengthSeconds,
      channelTitle,
      thumbnail: thumbnail[0]?.url,
      viewCount,
      isPrivate,
      thumbsCount,
    }

    return new Response(JSON.stringify(filteredData), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: "Failed to fetch video data" }),
      { status: 500 }
    )
  }
}
