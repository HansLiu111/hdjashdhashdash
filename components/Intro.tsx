"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `We are working on rewinding your movie.`;

export default function Intro() {
  return (
    <div className="text-center text-lg text-balance sm:w-3/4 ">
      <TextGenerateEffect words={words} />
    </div>
  );
}
