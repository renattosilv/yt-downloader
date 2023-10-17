import ytdl from "ytdl-core";
import { database } from "../database";
import downloadFromYT from "../utils/downloadFromYT";

export default async function downloadVideosController({ query }: { query: string }){

    try {
        const infoQuery = await ytdl.getInfo(query)

        const { videoDetails } = infoQuery
 
        database.addVideo({ ...videoDetails, url_download: `/downloads/${videoDetails.videoId}-video.mp4`})

        downloadFromYT({ query, id: videoDetails.videoId })
 
        return { ...videoDetails, url_download: `/downloads/${videoDetails.videoId}-video.mp4`}
    } catch {
        console.log("Error")
    }
}