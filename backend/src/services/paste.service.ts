import pasteModel from "@/models/Paste.js";
import type { PasteInterface } from "@/types/index.js";

class PasteService {
  async savePaste(pastedata: PasteInterface) {
    return await pasteModel.create(pastedata);
  }
  async getPasteById(id: string) {
    return await pasteModel.findOne({ id });
  }
  async deletePaste(id: string) {
    return await pasteModel.deleteOne({ id });
  }
  async updatePaste(id: string, content: string) {
    return await pasteModel.findOneAndUpdate(
      { id },
      { content },
      { new: true },
    );
  }
}

export default PasteService;
