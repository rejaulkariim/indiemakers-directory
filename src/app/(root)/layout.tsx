import Navbar from "@/components/shared/Navbar";

const RootLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayoutPage;
