import { Router } from "express";
import type { Request, Response } from "express";
import downloadVideosController from "../controllers/downloadVideosController";
const routerDownload =  Router()

routerDownload.post("/videos", async (request: Request, response: Response) => {
    const { url, id } = request.body

    const query = url ?? id

    if(!query){
        return response.status(500).json({ message: "Non-injectable URL or ID!" })
    }
    
    const data = await downloadVideosController({query})

    return response.json(data)
})

routerDownload.get("/videos", async (request: Request, response: Response) => {
    
    return response.json({})
})

export { routerDownload }