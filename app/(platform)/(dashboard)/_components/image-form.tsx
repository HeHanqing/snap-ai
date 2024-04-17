"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

interface ImageFormProps {
  image: never[];
  setImage: (image: never[]) => void;
}

const ImageForm = ({ image, setImage }: ImageFormProps) => {
  const maxNumber = 1;

  console.log(image);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImage(imageList as never[]);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={image}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              onClick={() => onImageUpdate(0)}
              {...dragProps}
              type="button"
            >
              <div className="border-2 border-dotted rounded-3xl w-96 h-80 flex items-center justify-center text-neutral-500 relative overflow-hidden">
                {imageList[0] ? (
                  <Image
                    src={imageList[0].dataURL as string}
                    alt="image"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col gap-2 items-center">
                    <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center">
                      <Plus size={24} className="text-neutral-900" />
                    </div>
                    <p
                      className={
                        isDragging ? "text-red-500" : "text-neutral-500"
                      }
                    >
                      Click here to upload image
                    </p>
                  </div>
                )}
              </div>
            </button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageForm;
