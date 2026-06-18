import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <main className="page-container">
      <Navbar />

      <section className="hero">
        <div className="heroText">
          <div className="badge">Private beta demo</div>

          <h1>Discover creators differently.</h1>

          <p>
            Suga is a premium creator discovery platform built around attraction,
            connection, and personalized fan experiences.
          </p>

          <div className="heroActions">
            <Link href="/for-you" className="primaryBtn">Enter Demo</Link>
            <Link href="/creator" className="secondaryBtn">View Profile</Link>
          </div>
        </div>

        <div className="heroCard glass">
          <div className="creatorImage"></div>
          <h3>Featured Creator</h3>
          <p>Verified • Trending nearby</p>

          <div className="stats">
            <span>24.8K fans</span>
            <span>$4.99/mo</span>
          </div>
        </div>
      </section>
    </main>
  );
}
