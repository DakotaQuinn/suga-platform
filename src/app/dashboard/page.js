import Navbar from "../../../components/Navbar";

export default function Dashboard() {
  return (
    <main className="page-container">
      <Navbar />

      <section className="pageHeader">
        <div>
          <div className="badge">Dashboard</div>
          <h1>Investor demo dashboard.</h1>
          <p>This page is currently parked for the live demo.</p>
        </div>
      </section>
    </main>
  );
}