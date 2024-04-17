export interface FeatureProps {
  title: string;
  description: string;
  prompt?: string;
  detail: string;
  beforeImage?: string;
  afterImage: string;
}

export const features = [
  {
    title: "Generate Image",
    description:
      "Just type in the text and generate unlimited creative images. The more detailed the description, the more accurate the generated image.",
    prompt: "Prompt",
    detail:
      "“A dazzling and colorful sunset with lush pink and purple hues interwoven with golden afterglow, serene lake reflections capturing the gradient blend of the sky canvas, warm and enchanting sunset rays.”",
    afterImage: "/images/generate.png",
  },
  {
    title: "AI-generated faces",
    description:
      "This is an innovative face photo restoration model focused on using artificial intelligence and deep learning algorithms to reconstruct and restore damaged, blurred or aged face photos. The model is designed to help users recover precious memories and bring photos from the past back to life.",
    detail:
      "Use powerful ai to restore old or blurry portrait photos and let AI recreate your precious memories with clarity!",
    beforeImage: "/images/before-generate-face.jpg",
    afterImage: "/images/after-generate-face.png",
  },
  {
    title: "Background Remove",
    description:
      "This model designed to provide users with one-click background removal and replacement services through artificial intelligence and deep learning technologies. The project enables users to easily separate subject objects from complex or unwanted backgrounds for use in a variety of design and creative projects.",
    detail: "",
    beforeImage: "/images/before-bg-remove.png",
    afterImage: "/images/after-bg-remove.png",
  },
  {
    title: "Image colorization",
    description:
      "This model that focuses on colorizing black and white photos by using artificial intelligence, deep learning, and image processing technologies to bring color back to faded memories. The project not only restores the visual effect of the photos, but also helps users explore and experience the true colors of a bygone era.",
    detail: "",
    beforeImage: "/images/before-colorization.jpg",
    afterImage: "/images/after-colorization.png",
  },
  {
    title: "Image enhance",
    description:
      "Thisis model that focuses on improving the quality of photos by combining the latest artificial intelligence algorithms and image enhancement technologies, aiming to bring users a photo experience with higher definition, richer colors and finer details. The program is suitable for a variety of scenarios, including restoring old photos, improving the quality of photos taken by cell phones, and post-processing professional photography.",
    detail: "",
    beforeImage: "/images/before-enhance.png",
    afterImage: "/images/after-enhance.png",
  },
  {
    title: "Image debluring",
    description:
      "This model focused on image deblurring that uses deep learning and image processing techniques to identify and correct blurring in photos. Whether the blurring is caused by shaky hands, improper camera settings or moving objects, Sharp Vision Clear can effectively restore the details and sharpness of the image, making the photo look more professional and vivid.",
    detail: "",
    beforeImage: "/images/before-deblur.png",
    afterImage: "/images/after-deblur.png",
  },
];
