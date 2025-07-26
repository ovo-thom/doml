"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientOnlyAOS() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);
  return null;
}
