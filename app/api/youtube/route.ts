import axios from 'axios';

export async function GET() {
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get('id');
    const geo = searchParams.get('geo') || 'US';
    const lang = searchParams.get('lang') || 'en';
    const options = searchParams.get('options') || '1';

    if (!videoId) {
        return new Response(JSON.stringify({ error: 'Video ID is required' }), { status: 400 });
    }

    try {
        const response = await axios.get(`https://yt-api.p.rapidapi.com/video/info`, {
            params: {
                id: videoId,
                geo: geo,
                lang: lang,
                options: options,
            },
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                'x-rapidapi-host': 'yt-api.p.rapidapi.com',
            },
        });

        // Check if response data is valid
        if (!response.data || !response.data.id) {
            throw new Error('Invalid response from API');
        }
        const { id, title, lengthSeconds, channelTitle, thumbnail, viewCount, isPrivate, likeCount } = response.data;

        const filteredData = {
            id,
            title,
            lengthSeconds,
            channelTitle,
            thumbnail: thumbnail[0]?.url,
            viewCount,
            isPrivate,
            likeCount,
        };

        return new Response(JSON.stringify(filteredData), { status: 200 });
    } catch (error) {
        console.error('Error fetching video data:', error.message);
        return new Response(JSON.stringify({ error: error.message || 'Failed to fetch video data' }), { status: 500 });
    }
}