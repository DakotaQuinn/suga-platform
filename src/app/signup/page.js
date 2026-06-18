"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabase";
export default function SignupPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState(""); const [role, setRole] = useState("fan");
const [message, setMessage] = useState("");
async function handleSignup(e) { e.preventDefault();
const { error } = await supabase.auth.signUp({ email,
password,
options: {
data: { role: role,
}, },
});
if (error) { setMessage(error.message);
} else {
setMessage("Account created. Check your email to confirm."); }
}
return (
<main className="min-h-screen flex items-center justify-center p-6">
<form onSubmit={handleSignup} className="w-full max-w-sm border rounded-2xl p-6 shadow-lg">
<h1 className="text-3xl font-bold mb-2">Create your Suga account</h1> <p className="text-gray-600 mb-6">Join as a fan or creator.</p>
<input
className="w-full border rounded-lg p-3 mb-3" type="email"
placeholder="Email"
onChange={(e) => setEmail(e.target.value)}
/>
<input
className="w-full border rounded-lg p-3 mb-3" type="password"
placeholder="Password"
onChange={(e) => setPassword(e.target.value)}
/>
<select
className="w-full border rounded-lg p-3 mb-4"
onChange={(e) => setRole(e.target.value)} >
<option value="fan">Fan</option>
<option value="creator">Creator</option> </select>
<button className="w-full rounded-lg p-3 text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
Create Account </button>
{message && <p className="mt-4 text-sm">{message}</p>} </form>
</main> );
}
