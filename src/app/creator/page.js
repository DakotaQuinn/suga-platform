import Navbar from "../../../components/Navbar";

export default function CreatorProfile() {
  return (
    <main className="page-container">
      <Navbar />

      <section className="profileShell glass">
        <div className="profileBanner"></div>

        <div className="profileInfo">
          <div className="avatarGlow"></div>

          <div>
            <div className="badge">Verified Creator</div>
            <h1>Ari Luxe</h1>
            <p>Premium creator • trending in your For You feed</p>
          </div>

          <button className="primaryBtn">$4.99/mo Subscribe</button>
        </div>

        <div className="profileStats">
          <div><strong>24.8K</strong><span>Fans</span></div>
          <div><strong>1.2M</strong><span>Likes</span></div>
          <div><strong>98%</strong><span>Match</span></div>
        </div>
      </section>
    </main>
  );
}
