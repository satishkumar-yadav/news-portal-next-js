export const getShareLinks = (title: string, url: string) => ({
  twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${url}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
});
 