"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";


const ImageGallery = ({images}: {images: string[]}) => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => {
          if (index <= 4) {
            return null
          } else {
            return (
              <Dialog key={index}>
                <DialogTrigger>
                  <Image
                    src={image}
                    width={400}
                    height={300}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </DialogTrigger>
                <DialogContent className="">
                  <Image
                    src={image}
                    alt=""
                    width={1920}
                    height={1280}
                    className="object-cover w-full h-full"
                  />
                </DialogContent>
              </Dialog>
            );
          }
        })}
      </div>
    </section>
  );
};
export default ImageGallery;
