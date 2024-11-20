import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";

const Home = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }

  return <Navbar />;
};

export default Home;
