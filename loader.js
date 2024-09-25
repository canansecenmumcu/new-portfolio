"use client";

export default function loader({ src, width, quality }) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  if (src.startsWith("images.pexels.com")) return src;
  /* return `https://nextjsportfolio.com/${params.join(",")}${src}`; */
  return `https://github.com/canansecenmumcu/new-portfolio.git/${params.join(",")}${src}`;
}
