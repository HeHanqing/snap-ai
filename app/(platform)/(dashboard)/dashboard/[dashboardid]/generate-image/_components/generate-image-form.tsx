"use client";

import { generateImage } from "@/actions/generate-image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAction } from "@/hooks/use-action";
import { useState } from "react";
import { toast } from "sonner";
import FormInput from "../../../_components/form-input";
import TransformedImage from "@/app/(platform)/(dashboard)/_components/transformed-image";
import SubmitButton from "../../../_components/submit-button";
import { cn } from "@/lib/utils";
import { syne } from "@/fonts";
import { CreateImage } from "@/lib/send-post";
import { Prediction } from "replicate";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const GenerateImageForm = () => {
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [error, setError] = useState(null);

  const { execute, fieldErrors } = useAction(generateImage, {
    onSuccess: (data) => {
      setGeneratedImageUrl(data.generatedImageUrl);
      toast.success("Image generated successfully!");
    },
    onError: (error) => {
      console.log({ error });
      toast.error(error);
    },
  });

  const onSubmit = async (formdata: FormData) => {
    const name = formdata.get("name") as string;
    const prompt = formdata.get("prompt") as string;
    let generatedImageUrl;
    //Send POST request to /api/predictions
    const response = await fetch("/api/predictions", {
      method: "POST",
      body: JSON.stringify({
        prompt,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id, {
        cache: "no-store",
      });
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log(prediction);
      setPrediction(prediction);
    }

    if (prediction.status === "succeeded") {
      generatedImageUrl = prediction.output[0];
    }

    execute({ name, prompt, generatedImageUrl });
  };
  return (
    <ScrollArea>
      <form action={onSubmit} className="mt-6 grid gap-6 mr-4">
        <FormInput
          name="name"
          id="name"
          label="name"
          type="text"
          errors={fieldErrors}
          placeholder="image name"
        />
        <FormInput
          name="prompt"
          id="prompt"
          label="Prompt"
          type="text"
          errors={fieldErrors}
          placeholder="image prompt"
        />
        <div className="grid w-full grid-cols-2 items-center gap-8 ">
          <div className="flex gap-4 flex-col">
            <p className={cn("font-bold text-3xl", syne.className)}>
              Generated Image
            </p>
            <TransformedImage image={generatedImageUrl} />
          </div>
          <SubmitButton className={cn("col-span-2")} />
        </div>
      </form>
    </ScrollArea>
  );
};

export default GenerateImageForm;
