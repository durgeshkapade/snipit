import { dateConverter, uniqueIdGenerator } from "@/lib/utils.js";
import type PasteService from "@/services/paste.service.js";
import { createPasteSchema } from "@/validators/paste.validators.js";
import type { NextFunction, Request, Response } from "express";
import type { Logger } from "winston";

class PasteController {
  constructor(
    private readonly pasteService: PasteService,
    private readonly logger: Logger,
  ) {}

  async createPaste(req: Request, res: Response, next: NextFunction) {
    try {
      const createdAt = new Date(Date.now());
      const { content, expiresTime, idType, customId } = req.body;

      const expiresAt = expiresTime
        ? dateConverter(expiresTime)
        : dateConverter("1d");
      const validatedBody = createPasteSchema.parse({
        content,
        expiresAt,
        idType,
        customId,
      });

      let pasteId =
        validatedBody.customId ||
        (validatedBody.idType === "system" ? uniqueIdGenerator() : customId);

      const createAndSavePaste = async (id: string) => {
        const pasteData = {
          id,
          content: validatedBody.content,
          expiresAt: validatedBody.expiresAt,
          createdAt,
        };
        return await this.pasteService.savePaste(pasteData);
      };

      try {
        const result = await createAndSavePaste(pasteId);
        this.logger.info(`Created paste with id: ${pasteId}`);
        return res.json(result);
      } catch (error: any) {
        if (error?.errorResponse?.code === 11000) {
          if (validatedBody.customId) {
            return res.status(409).json({ error: "Custom ID already exists" });
          }
          pasteId =
            validatedBody.idType === "system" ? uniqueIdGenerator() : customId;
          const result = await createAndSavePaste(pasteId);
          this.logger.info(
            `Created paste with new id after conflict: ${pasteId}`,
          );
          return res.json(result);
        } else {
          throw new Error(error?.message || "Unknown error while saving paste");
        }
      }
    } catch (error) {
      this.logger.error("Error creating paste:", error);
      return next(error);
    }
  }

  async getPaste(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    try {
      const result = await this.pasteService.getPasteById(id!);
      this.logger.info("Getting paste:", id);
      return res.json(result);
    } catch (error) {
      this.logger.error("Error fetching paste", id, error);
      return next(error);
    }
  }

  async deletePaste(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    try {
      const result = await this.pasteService.deletePaste(id!);
      this.logger.info("Deleting paste:", id);
      return res.json(result);
    } catch (error) {
      this.logger.error("Error deleting paste", id, error);
      return next(error);
    }
  }

  async updatePaste(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const { content } = req.body;
    try {
      const result = await this.pasteService.updatePaste(id!, content);
      this.logger.info("Updating paste:", id);
      return res.json(result);
    } catch (error) {
      this.logger.error("Error updating paste", id, error);
      return next(error);
    }
  }
}

export default PasteController;
