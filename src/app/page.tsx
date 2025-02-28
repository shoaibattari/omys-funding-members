import Banner from "./components/ui/Banner1";
import OperationalNumber from "./components/ui/OperationalNumber";
import Towns from "./components/ui/Towns";

export default function Home() {
  return (
    <main>
      <div className="md:hidden">
      <OperationalNumber/>
      </div>
      <Banner />
      <Towns />
    </main>
  );
}
