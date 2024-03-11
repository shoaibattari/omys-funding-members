import Members from "@/app/components/Members";
import Banner from "./components/ui/Banner1";
import Banner2 from "./components/ui/Banner2";

export default function Home() {
  return (
    <main>
      <h1>
        <Members />
        <Banner2 />
      </h1>
    </main>
  );
}
