"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";

export default function ForYou() {
  const creators = [
    {
      name: "Ari Luxe",
      tag: "Verified • Trending",
      price: "$4.99/mo",
      match: "98% Match",
      bio: "Luxury lifestyle, private content, and premium fan experiences.",
    },
    {
      name: "Mila Rose",
      tag: "Top Match • Nearby",
      price: "$9.99/mo",
      match: "94% Match",
      bio: "Glam, fitness, daily drops, and personalized creator access.",
    },
    {
      name: "Nova Sky",
      tag: "Rising Creator",
      price: "$7.99/mo",
      match: "91% Match",
      bio: "Cosplay, gaming, lifestyle content, and exclusive chat perks.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [action, setAction] = useState("");

  const creator = creators[index];

  function nextCreator(type) {
    setAction(type);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % creators.length);
      setAction("");
    }, 250);
  }

  return (
    <main className="page-container">
      <Navbar />

      <section className="pageHeader">
        <div>
          <div className="badge">For You</div>
          <h1>Swipe through creators matched to your taste.</h1>
          <p>Discover premium creators through a clean swipe-style experience.</p>
        </div>

        <div className="searchPill">⌕ Search creators...</div>
      </section>

      <section className="swipeStage">
        <div className={`swipeCard glass ${action}`}>
          <div className="creatorImage swipeImage"></div>

          <div className="swipeContent">
            <div>
              <div className="badge">{creator.match}</div>
              <h2>{creator.name}</h2>
              <p>{creator.tag}</p>
              <span>{creator.bio}</span>
            </div>

            <div className="swipeBottom">
              <strong>{creator.price}</strong>
              <strong>Verified</strong>
            </div>
          </div>
        </div>

        <div className="swipeActions">
          <button className="skipBtn" onClick={() => nextCreator("skip")}>
            ✕
          </button>

          <button className="viewBtn" onClick={() => nextCreator("like")}>
            ♥
          </button>
        </div>
      </section>
    </main>
  );
}
