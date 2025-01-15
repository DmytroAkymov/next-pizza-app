import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  imageUrl: string;
  size: number;
}

export const ProductImage: React.FC<Props> = ({
  imageUrl,
  size,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-1 relative w-full",
        className
      )}
    >
      <img
        src={imageUrl}
        alt="logo"
        className={cn(
          "relative left-3 top-3 transition-all z-10 duration-300",
          {
            "w-[300px] h-[300px]": size === 20,
            "w-[400px] h-[400px]": size === 30,
            "w-[500px] h-[500px]": size === 40,
          }
        )}
      />
      <div className="absolute border-dashed border-2 rounded-full border-gray-200 w-[490px] h-[490px]" />
      <div className="absolute border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />
    </div>
  );
};
