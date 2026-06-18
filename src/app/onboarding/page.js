"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function OnboardingPage() {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");

  async function handleSave(e) {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({
      data: {
        username,
        display_name: displayName,
        bio,
        onboarding_complete: true,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Profile saved successfully.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSave} className="w-full max-w-md border rounded-2xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Set up your Suga profile</h1>
        <p className="text-gray-600 mb-6">This is how people will know you on Suga.</p>

        <input
          className="w-full border rounded-lg p-3 mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3 mb-3"
          placeholder="Display name"
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <textarea
          className="w-full border rounded-lg p-3 mb-4"
          placeholder="Short bio"
          rows="4"
          onChange={(e) => setBio(e.target.value)}
        />

        <button className="w-full rounded-lg p-3 text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Save Profile
        </button>

        {message && <p className="mt-4 text-sm">{message}</p>}
      </form>
    </main>
  );
}
