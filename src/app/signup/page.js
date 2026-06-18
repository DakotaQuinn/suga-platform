import Navbar from "../../../components/Navbar";

export default function Signup() {
  return (
    <main className="page-container">
      <Navbar />

      <section className="authShell glass">
        <div>
          <div className="badge">Join private beta</div>
          <h1>Create your Suga account.</h1>
          <p>Start discovering premium creators built around your taste.</p>
        </div>

        <div className="authCard">
          <input placeholder="Full name" />
          <input placeholder="Email address" />
          <input placeholder="Password" type="password" />
          <button className="primaryBtn">Create Account</button>
        </div>
      </section>
    </main>
  );
}