import axios from "axios"
import { ApiResponse } from "@/app/lib/types/HeroSectionTypes"
const fetchFromApi = async (endPoint: string, videoId: string) => {
  const baseUrl = `https://yt-api.p.rapidapi.com/${endPoint}`
  const url =
    endPoint === "related"
      ? `${baseUrl}?id=${videoId}`
      : `${baseUrl}?id=${videoId}&extend=2`

  try {
    const response = await axios.get(url, {
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "yt-api.p.rapidapi.com",
      },
    })
    return endPoint === "related" ? response.data.data : response.data
  } catch (error) {
    console.error(`Error fetching from API: ${error}`)
    throw error
  }
}

export async function GET() {
  const videoId = "arj7oStGLkU"

  try {
    const relatedVideos = await fetchFromApi("related", videoId)

    if (!relatedVideos || relatedVideos.length === 0) {
      return new Response(
        JSON.stringify({ error: "No related videos found" }),
        { status: 404 }
      )
    }

    const randomVideoIds: string[] = []
    const maxVideos = Math.min(10, relatedVideos.length)

    while (randomVideoIds.length < maxVideos) {
      const randomIndex = Math.floor(Math.random() * relatedVideos.length)
      const videoId = relatedVideos[randomIndex].videoId

      if (!randomVideoIds.includes(videoId)) {
        randomVideoIds.push(videoId)
      }
    }

    const videoIdsString = randomVideoIds.join(",")
    const videosDetails: ApiResponse[] = await fetchFromApi(
      "video/info",
      videoIdsString
    )

    console.log("response data ", videosDetails)

    return new Response(JSON.stringify(videosDetails), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    })
  }
}
