import { z } from "zod";
import { CreateGenerateImage } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Prediction } from "@prisma/client";

export type InputType = z.infer<typeof CreateGenerateImage>;
export type ReturnType = ActionState<InputType, Prediction>;
