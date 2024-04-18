import { cookies } from "next/headers";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const CreateImage = async (prompt: string) => {
  const _cookies = cookies();
  const { signal } = new AbortController();
  const response = await fetch("/api/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      width: 200,
      height: 200,
      prompt,
      refine: "expert_ensemble_refiner",
      apply_watermark: false,
      num_inference_steps: 25,
    }),
  });
  let prediction = await response.json();
  if (response.status !== 201) {
    return {
      error: prediction.detail,
    };
  }

  while (prediction.status !== "succeeded" && prediction.status !== "failed") {
    await sleep(1000);
    const timestamp = Date.now() + 1000 * parseInt(prediction.created_at);
    const response = await fetch(
      "/api/predictions/" + prediction.id + "?_=" + new Date().getTime(),
      {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-store",
        },
        signal,
      }
    );
    prediction = await response.json();
    console.log(prediction);
    if (response.status !== 200) {
      console.log(prediction.detail);
      return { error: prediction.detail };
    }
  }

  if (prediction.status === "succeeded") {
    return prediction.output[0];
  }
};
