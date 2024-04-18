"use server";

import { auth } from "@clerk/nextjs";
import Replicate from "replicate";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { MODEL } from "@prisma/client";
import { CreateGenerateImage } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";
import { revalidatePath } from "next/cache";
const replicate = new Replicate();

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  const { name, prompt, generatedImageUrl } = data;

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  let prediction;

  try {
    prediction = await db.prediction.create({
      data: {
        userId,
        name,
        generatedImageUrl,
        prompt,
        model: MODEL.ENHANCE_IMAGE,
      },
    });
    // return { imageurl: output.image_url };
  } catch (error) {
    console.log(error);
    return { error: "Failed to generate image" };
  }

  revalidatePath(`/dashboard/${userId}/generate-image`);
  return { data: prediction };
};

export const generateImage = createSafeAction(CreateGenerateImage, handler);
