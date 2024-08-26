import Header from "@/components/header";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <>
        <Header />

        <div className="-z-50">
          <Particles />
        </div>

        <div className="relative">{children}</div>

        <Footer />
      </>
    </>
  );
}
