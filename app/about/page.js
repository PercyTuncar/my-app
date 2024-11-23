"use client";
import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title({ color: "yellow" })}>About</h1>

      <Image
        isBlurred
        width={300}
        alt="NextUI hero Image"
        src="https://nextui.org/images/hero-card-complete.jpeg"
      />
      <Button color="primary">Button</Button>
    </div>
  );
}
