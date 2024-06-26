import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "../components/starter/counter/counter";
import Hero from "../components/starter/hero/hero";
import Starter from "../components/starter/next-steps/next-steps";

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          Si solo cuenta, <span class="highlight">pero está bonito :D</span>
          <br />
        </h3>
        <Counter />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ejemplo App con  Qwik",
  meta: [
    {
      name: "description",
      content: "facilito",
    },
  ],
};
