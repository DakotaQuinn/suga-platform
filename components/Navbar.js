import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav glass">
      <Link href="/" className="brand">Suga</Link>

      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/for-you">For You</Link>
        <Link href="/messages">Messages</Link>
        <Link href="/creator">Profile</Link>
      </div>

      <Link href="/for-you" className="navButton">Explore</Link>
    </nav>
  );
}
