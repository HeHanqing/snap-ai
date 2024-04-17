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

  const { name, prompt } = data;

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const input = {
    width: 1024,
    height: 1024,
    prompt,
    refine: "expert_ensemble_refiner",
    apply_watermark: false,
    num_inference_steps: 25,
  };

  let prediction;

  try {
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      { input }
    );
    let generatedImageUrl = Object.values(output)[0] as string;

    console.log(output);

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
