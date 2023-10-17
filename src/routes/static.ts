import path from "node:path"
import express, { Router } from "express";

const routerStatic =  Router()

const staticPath = path.resolve(__dirname, '..', '..', 'temp',)
routerStatic.use('/', express.static(staticPath))

export { routerStatic }