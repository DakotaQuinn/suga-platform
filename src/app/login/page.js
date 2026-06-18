"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Logged in successfully.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleLogin} className="w-full max-w-sm border rounded-2xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Login to Suga</h1>
        <p className="text-gray-600 mb-6">Welcome back.</p>

        <input
          className="w-full border rounded-lg p-3 mb-3"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3 mb-4"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full rounded-lg p-3 text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Login
        </button>

        {message && <p className="mt-4 text-sm">{message}</p>}
      </form>
    </main>
  );
}