"use client";

import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out!");
    router.push("/login"); 
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center">

    
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>

      <h1 className="text-4xl font-bold text-blue-600">
        Firebase is configured! 🔥
      </h1>
    </main>
  );
}
