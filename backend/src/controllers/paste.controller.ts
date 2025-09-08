import logger from "@/config/logger.js";
import { uniqueIdGenerator } from "@/lib/utils.js";
import { getPasteById, savePaste } from "@/services/pasteService.js";
import { createPasteSchema } from "@/validators.ts/paste.validators.js";
import type { Request, Response } from "express";

export const createPaste = async (req: Request, res: Response) => {
    try {
        logger.info(`Paste: ${req.body.content}` );

        const newExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000)
        const validateBody = createPasteSchema.parse({...req.body, expiresAt: newExpiry});
        const uniqueId = uniqueIdGenerator();
        const pasteData = {
            id: uniqueId,
            content: validateBody.content,
            expiresAt: newExpiry
        }
        return res.json(await savePaste(pasteData));
    }
    catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}

export const getPaste = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const paste = await getPasteById(id!);
        logger.info(paste)
        return res.json(paste);
    }
    catch (e) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
