import pasteModel from "@/models/Paste.js"
import type { PasteInterface } from "@/types/index.js";

export const savePaste = async (pastedata: PasteInterface) => {
    return await pasteModel.create(pastedata);
}

export const getPasteById = async (id: string) => {
    return await pasteModel.findOne({ id });
}