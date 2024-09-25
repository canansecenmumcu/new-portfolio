"use client";

export default function cloudinaryLoader({ src, width, quality }) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  if (src.startsWith("images.pexels.com")) return src;
  /* return `new-portfolio-cnn.vercel.app/${params.join(",")}${src}`; */
}
