import { app } from "../../firebaseConfig";

export default function Home() {
  console.log("Firebase App:", app);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Firebase is configured! 🔥
      </h1>
    </main>
  );
}
