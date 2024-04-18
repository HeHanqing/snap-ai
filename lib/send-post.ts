"use client";

import { useState } from "react";
import { Prediction } from "replicate";

export const fetchCache = "force-no-store";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const SendPostRequest = async (prompt: string) => {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const response = await fetch("/api/predictions", {
    method: "POST",
    body: JSON.stringify({
      width: 200,
      height: 200,
      prompt,
      refine: "expert_ensemble_refiner",
      apply_watermark: false,
      num_inference_steps: 25,
    }),
  });
  let output = await response.json();
  if (response.status !== 201) {
    return {
      error: output.detail,
    };
  }
  setPrediction(prediction);

  while (output.status !== "succeeded" && output.status !== "failed") {
    await sleep(1000);
    const response = await fetch("/api/predictions/" + output.id, {
      cache: "no-store",
    });
    output = await response.json();
    console.log(prediction);
    if (response.status !== 200) {
      console.log(output.detail);
      return { error: output.detail };
    }
    console.log(prediction);
    setPrediction(prediction);
  }

  if (output.status === "succeeded") {
    return output.output[0];
  }
};
