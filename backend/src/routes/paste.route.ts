import { Router } from "express"
import { createPaste, getPaste } from "@/controllers/paste.controller.js";

const router = Router();

router.post('/', createPaste)
router.get('/:id', getPaste);

export default router;