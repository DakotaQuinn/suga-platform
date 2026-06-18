import Navbar from "../../../components/Navbar";

export default function Login() {
  return (
    <main className="page-container">
      <Navbar />

      <section className="authShell glass">
        <div>
          <div className="badge">Welcome back</div>
          <h1>Login to Suga.</h1>
          <p>Access your personalized creator discovery experience.</p>
        </div>

        <div className="authCard">
          <input placeholder="Email address" />
          <input placeholder="Password" type="password" />
          <button className="primaryBtn">Login</button>
        </div>
      </section>
    </main>
  );
}