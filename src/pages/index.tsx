import { Inter } from "@next/font/google";
import Inputs from "components/Inputs";
import Results from "components/Results";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Inputs />
      </div>
    </>
  );
}
