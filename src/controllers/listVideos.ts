import { database } from "../database";

export default function listVideos(){
    return database.videos
}