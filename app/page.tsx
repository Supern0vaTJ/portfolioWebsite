import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { BackgroundGradient } from "@/components/ui/background-gradient";


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        
        <Hero />
        <Grid />
        <BackgroundGradient />
        <Projects/>
      </div>
    </main>
  );
}
