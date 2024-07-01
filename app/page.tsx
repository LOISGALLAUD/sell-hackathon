import Charts from "./components/Charts";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start w-full font-dm">
      <Hero />
      <Charts />
      {/* Features */}
      <Newsletter />
    </main>
  );
}
