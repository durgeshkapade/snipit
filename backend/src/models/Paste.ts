import type { IPaste } from "@/types/index.js";
import mongoose, { Schema } from "mongoose";

const pastSchema = new Schema<IPaste>({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  content: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    default: () => Date.now() + 24 * 60 * 60 * 1000,
  },
});

const pasteModel = mongoose.model<IPaste>("paste", pastSchema);
export default pasteModel;
