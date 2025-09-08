import logger from "@/config/logger.js";
import { uniqueIdGenerator } from "@/lib/utils.js";
import type PasteService from "@/services/paste.service.js";
import { createPasteSchema } from "@/validators.ts/paste.validators.js";
import type { NextFunction, Request, Response } from "express";
import type { Logger } from "winston";

class PasteController {
    constructor(
        private readonly pasteService:PasteService,
    ){}

    async createPaste(req: Request, res: Response, next: NextFunction) {
        try {

            const newExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000)
            const validateBody = createPasteSchema.parse({ ...req.body, expiresAt: newExpiry });
            const uniqueId = uniqueIdGenerator();
            const pasteData = {
                id: uniqueId,
                content: validateBody.content,
                expiresAt: newExpiry
            }
            const result = await this.pasteService.savePaste(pasteData)
            return res.json(result);
        }
        catch (error) {
            return next(error)
        }
    }

    async getPaste(req: Request, res: Response,next:NextFunction) {
        try {
            const id = req.params.id;
            const result = await this.pasteService.getPasteById(id!);
            return res.json(result);
        }
        catch (error) {
            return next(error)
        }
    }
}

export default PasteController;