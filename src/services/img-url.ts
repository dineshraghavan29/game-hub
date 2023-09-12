import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string): string => {
  if (!url) return noImage;
  const urlList = url.split("media/");
  return urlList[0] + "media/crop/600/400/" + urlList[1];
};

export default getCroppedImageUrl;
