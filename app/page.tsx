import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 min-h-[5000px]">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
