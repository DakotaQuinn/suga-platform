import Navbar from "../../../components/Navbar";

export default function Onboarding() {
  return (
    <main className="page-container">
      <Navbar />

      <section className="authShell glass">
        <div>
          <div className="badge">Personalize</div>
          <h1>Build your For You feed.</h1>
          <p>Select your interests so Suga can match your discovery experience.</p>
        </div>

        <div className="interestGrid">
          <button>Luxury</button>
          <button>Fitness</button>
          <button>Cosplay</button>
          <button>Alt</button>
          <button>Glam</button>
          <button>Nearby</button>
        </div>
      </section>
    </main>
  );
}
