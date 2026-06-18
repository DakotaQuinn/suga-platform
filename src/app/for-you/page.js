import Navbar from "../../../components/Navbar";

export default function ForYou() {
  const creators = [
    { name: "Ari Luxe", tag: "Verified • Trending", price: "$4.99/mo" },
    { name: "Mila Rose", tag: "Top Match • Nearby", price: "$9.99/mo" },
    { name: "Nova Sky", tag: "Rising Creator", price: "$7.99/mo" },
  ];

  return (
    <main className="page-container">
      <Navbar />

      <section className="pageHeader">
        <div>
          <div className="badge">For You</div>
          <h1>Creators matched to your taste.</h1>
          <p>Search, discover, and connect through a premium swipe-style experience.</p>
        </div>

        <div className="searchPill">⌕ Search creators...</div>
      </section>

      <section className="creatorGrid">
        {creators.map((creator) => (
          <div className="creatorTile glass" key={creator.name}>
            <div className="creatorImage"></div>
            <h3>{creator.name}</h3>
            <p>{creator.tag}</p>

            <div className="stats">
              <span>{creator.price}</span>
              <span>♡ View</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
