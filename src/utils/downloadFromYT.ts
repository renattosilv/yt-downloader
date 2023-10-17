import ytdl from 'ytdl-core'
import path from 'node:path'
import fs from 'node:fs'

interface IDownload {
    query: string;
    id: string
}

export default function downloadFromYT({ query, id }: IDownload){
    const video = ytdl(query)

    const outputName =  id.concat("-video.mp4")
    const outputPath = path.resolve(__dirname, '..', '..', 'temp', outputName);

    video.on('info', info => {
        console.log('title:', info.videoDetails.title);
        console.log('rating:', info.player_response.videoDetails.averageRating);
        console.log('uploaded by:', info.videoDetails.author.name);
    });

    video.on('progress', (chunkLength, downloaded, total) => {
        const percent = downloaded / total;
        console.log('downloading', `${(percent * 100).toFixed(1)}%`);
    });

    video.on('end', () => {
        console.log('saved to', outputName);
    });

    video.pipe(fs.createWriteStream(outputPath));
}