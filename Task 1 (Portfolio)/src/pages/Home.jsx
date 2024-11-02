import Animation from "../components/Animation";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Animation />
      <div id="home" className="h-screen w-full border-b border-b-gray-700">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default Home;
