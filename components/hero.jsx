"use client";


import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from 'framer-motion';

const HeroSection = () => {
  const imageRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  // Split the text into indv words
  const titleWords = ["Your", "Career", "Assistant", "for", "Professional", "Success"];
   

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    // Start animation when component mounts
    setAnimationStarted(true);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={animationStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3, // Each word appears 0.3 seconds after the previous
                  ease: "easeOut"
                }}
                className="inline-block mr-4"
              >
                {word}
                {index === 3 && <br />} {/* Line break after "for" */}
              </motion.span>
            ))}
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Skyrocket your career with personalized guidance, interview preparation and
            AI-powered resources, all at the cost of NOTHING.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/mrbeast">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-8 md:mt-12 bounce-animation initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/resume.png"}
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
