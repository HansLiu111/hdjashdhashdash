"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center h-[12rem] sm:h-[20rem] max-w-full px-4 sm:px-8 md:px-12">
      <TextRevealCard
        text="CTO Comeback $BLOCK"
        revealText="CTO Comeback $BLOCK"
      ></TextRevealCard>
    </div>
  );
}
