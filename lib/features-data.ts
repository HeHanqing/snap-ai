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
      "“A dazzling and colorful sunset with lush pink and purple hues interwoven with golden afterglow, serene lake reflections capturing the gradient blend of the sky canvas, warm and enchanting sunset rays, presenting a tranquil natural beauty and dreamlike clouds, capturing the peace and charm of the twilight hour.”",
    afterImage: "/images/generate.png",
  },
  {
    title: "Generate Image",
    description:
      "Just type in the text and generate unlimited creative images. The more detailed the description, the more accurate the generated image.",
    detail:
      "“A dazzling and colorful sunset with lush pink and purple hues interwoven with golden afterglow, serene lake reflections capturing the gradient blend of the sky canvas, warm and enchanting sunset rays, presenting a tranquil natural beauty and dreamlike clouds, capturing the peace and charm of the twilight hour.”",
    beforeImage: "/images/before-generate-face.jpg",
    afterImage: "/images/after-generate-face.png",
  },
  {
    title: "Background Remove",
    description:
      "Just type in the text and generate unlimited creative images. The more detailed the description, the more accurate the generated image.",
    detail:
      "“A dazzling and colorful sunset with lush pink and purple hues interwoven with golden afterglow, serene lake reflections capturing the gradient blend of the sky canvas, warm and enchanting sunset rays, presenting a tranquil natural beauty and dreamlike clouds, capturing the peace and charm of the twilight hour.”",
    beforeImage: "/images/before-bg-remove.png",
    afterImage: "/images/after-bg-remove.png",
  },
  {
    title: "Image colorization",
    description:
      "Just type in the text and generate unlimited creative images. The more detailed the description, the more accurate the generated image.",
    detail:
      "“A dazzling and colorful sunset with lush pink and purple hues interwoven with golden afterglow, serene lake reflections capturing the gradient blend of the sky canvas, warm and enchanting sunset rays, presenting a tranquil natural beauty and dreamlike clouds, capturing the peace and charm of the twilight hour.”",
    beforeImage: "/images/before-colorization.jpg",
    afterImage: "/images/after-colorization.png",
  },
  {
    title: "Image enhance",
    description:
      "Just type in the text and generate unlimited creative images. The more detailed the description, the more accurate the generated image.",
    detail:
      "“A dazzling and colorful sunset with lush pink and purple hues interwoven with golden afterglow, serene lake reflections capturing the gradient blend of the sky canvas, warm and enchanting sunset rays, presenting a tranquil natural beauty and dreamlike clouds, capturing the peace and charm of the twilight hour.”",
    beforeImage: "/images/before-enhance.png",
    afterImage: "/images/after-enhance.png",
  },
  {
    title: "Image debluring",
    description:
      "Just type in the text and generate unlimited creative images. The more detailed the description, the more accurate the generated image.",
    detail:
      "“A dazzling and colorful sunset with lush pink and purple hues interwoven with golden afterglow, serene lake reflections capturing the gradient blend of the sky canvas, warm and enchanting sunset rays, presenting a tranquil natural beauty and dreamlike clouds, capturing the peace and charm of the twilight hour.”",
    beforeImage: "/images/before-deblur.png",
    afterImage: "/images/after-deblur.png",
  },
];
