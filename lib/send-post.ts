const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const SendPostRequest = async (prompt: string) => {
  const { signal } = new AbortController();
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
  let prediction = await response.json();
  if (response.status !== 201) {
    return {
      error: prediction.detail,
    };
  }

  while (prediction.status !== "succeeded" && prediction.status !== "failed") {
    await sleep(1000);
    const response = await fetch("/api/predictions/" + prediction.id, {
      cache: "no-store",
      signal,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
    });
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
