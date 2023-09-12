const getCroppedImageUrl = (url: string): string => {
  if (!url) return "";
  const urlList = url.split("media/");
  return urlList[0] + "media/crop/600/400/" + urlList[1];
};

export default getCroppedImageUrl;
