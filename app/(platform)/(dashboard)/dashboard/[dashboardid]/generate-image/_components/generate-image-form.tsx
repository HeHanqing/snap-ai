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
import { SendPostRequest } from "@/lib/send-post";

const GenerateImageForm = () => {
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");

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

    const generatedImageUrl = await SendPostRequest(prompt);
    console.log(generatedImageUrl);

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
