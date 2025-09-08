import { uniqueIdGenerator } from "@/lib/utils.js";
import type PasteService from "@/services/paste.service.js";
import { createPasteSchema } from "@/validators.ts/paste.validators.js";
import type { NextFunction, Request, Response } from "express";
import type { Logger } from "winston";

class PasteController {
    constructor(
        private readonly pasteService: PasteService,
        private readonly logger: Logger
    ) { }

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
            this.logger.info("Creating paste with id:", uniqueId)

            return res.json(result);
        }
        catch (error) {
            this.logger.error("Error Creating paste ", error)
            return next(error)
        }
    }

    async getPaste(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        try {
            const result = await this.pasteService.getPasteById(id!);
            this.logger.info("Getting paste:", id)
            return res.json(result);
        }
        catch (error) {
            this.logger.error("Error fetching paste", id, error)
            return next(error)
        }
    }

    async deletePaste(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        try {
            const result = await this.pasteService.deletePaste(id!);
            this.logger.info("Deleting paste:", id)
            return res.json(result);
        }
        catch (error) {
            this.logger.error("Error deleting paste", id, error)
            return next(error)
        }
    }
}

export default PasteController;