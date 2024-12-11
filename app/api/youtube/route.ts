import axios from "axios"

export async function GET() {
  const videoId = "arj7oStGLkU"

  try {
    const response = await axios.get(
      `https://yt-api.p.rapidapi.com/video/info?id=${videoId}`,
      {
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "yt-api.p.rapidapi.com",
        },
      }
    )

    const {
      id,
      title,
      lengthSeconds,
      channelTitle,
      thumbnail,
      viewCount,
      isPrivate,
      likeCount,
    } = response.data

    console.log(response.data)
    return new Response(
      JSON.stringify({
        id,
        title,
        lengthSeconds,
        channelTitle,
        thumbnail: thumbnail[0]?.url,
        viewCount,
        isPrivate,
        likeCount,
      }),
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
  }
}
