"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Likes() {
  const [thought, setThought] = useState("");

  useEffect(() => {
    axios.get("/api/thought").then((res) => {
      setThought(res.data.thought);
    });
  }, []);

  return (
    <>
      <h1>Likes & Dislikes</h1>

      <h3 style={{ marginTop: "24px" }}>Likes</h3>
      <ul>
        <li>Rainy evenings</li>
        <li>Late night walks</li>
        <li>Minimal conversations</li>
      </ul>

      <h3 style={{ marginTop: "24px" }}>Dislikes</h3>
      <ul>
        <li>Unnecessary noise</li>
        <li>Forced interactions</li>
        <li>Overcrowded places</li>
      </ul>

      <p style={{ marginTop: "24px", color: "#a1a1aa" }}>
        Thought: {thought || "…"}
      </p>
    </>
  );
}
