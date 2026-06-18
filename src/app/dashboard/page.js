"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import BottomNav from "../../../components/BottomNav";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }

    getUser();
  }, []);

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Welcome to Suga</h1>
        <p className="text-gray-600 mb-8">
          Your account is active and you're logged in.
        </p>

        <div className="border rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Account</h2>

          <p>
            <strong>Email:</strong> {user?.email || "Loading..."}
          </p>

          <p className="mt-2">
            <strong>Role:</strong> {user?.user_metadata?.role || "Loading..."}
          </p>
        </div>
      </div>
     <BottomNav />
    </main>
  );
}
