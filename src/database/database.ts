interface IDatabase {
    videos: any[]
    music: any[]
}

export class Database {
    database: IDatabase

    constructor (){
        this.database = { videos: [], music: [] }
    }

    
    public get videos(): any[] {
        return this.database.videos
    }

    public addVideo(video: any){
        this.database.videos.push(video)
    }
    
}


