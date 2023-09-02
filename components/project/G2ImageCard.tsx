import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image"

interface G2ImageCardProps {
  srcL: StaticImageData; // Allow either a string or StaticImageData
  altL: string;
  descL: string;
  srcR: StaticImageData; // Allow either a string or StaticImageData
  altR: string;
  descR: string;
}


export default function G2ImageCard({
  srcL,
  altL,
  descL,
  srcR,
  altR,
  descR,
}: G2ImageCardProps) {
return(
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div className="py-5">
      <Image
        src={srcL}
        alt= {altL}
        quality="95"
        height="500"
        width="500"
        className="w-full h-auto rounded border object-cover shadow-xl my-5"
      />
      <p >{descL}</p>
    </div>
    <div className="py-5">
      <Image
        src={srcR}
        alt= {altR}
        quality="95"
        height="500"
        width="500"
        className="w-full h-auto rounded border object-cover shadow-xl my-5"
      />
      <p>{descR}</p>
    </div>
  </div>
)
}