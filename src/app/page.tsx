import Image from "next/image";
import styles from "./page.module.css";
import { Tags } from "./components/tags";
import { AddTag } from "./components/add-tag";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Carregando tags...</p>}>
        <Tags />
      </Suspense>
      <AddTag />
    </div>
  );
}
