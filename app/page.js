import Globes from "./component/Globes";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("./component/Globes"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DynamicComponent/>
    </main>
  );
}
