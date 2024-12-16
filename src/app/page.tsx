import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Featured from "./components/Featured";
import Gear from "./components/Gear-up";
import Miss from "./components/Miss";
import Essential from "./components/Essential";

export default function Home() {
  return (
    <div>
      <Hero />
      <Hero1 />
      <Featured />
      <Gear />
      <Miss />
      <Essential />
    </div>
  );
}
