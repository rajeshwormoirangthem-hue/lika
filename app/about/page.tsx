"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [mood, setMood] = useState("");

  useEffect(() => {
    axios.get("/api/mood").then((res) => {
      setMood(res.data.mood);
    });
  }, []);

  return (
    <>
      <h1>About X</h1>
      <p style={{ marginTop: "16px" }}>
        X prefers calm over chaos.
      </p>
      <p style={{ marginTop: "12px", color: "#a1a1aa" }}>
        Current mood: {mood || "…"}
      </p>
    </>
  );
}
