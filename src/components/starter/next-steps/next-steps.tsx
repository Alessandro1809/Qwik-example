import { component$, $, useOnWindow, useSignal } from "@builder.io/qwik";
import styles from "./next-steps.module.css";

export default component$(() => {
  const gettingStartedStep = useSignal(0);

  useOnWindow(
    "keydown",
    $((e) => {
      if ((e as KeyboardEvent).key === "Alt") {
        gettingStartedStep.value = 1;
      }
    }),
  );

  return (
    <div class="container container-purple container-center">
      <h2>
        Que hicimos?
        <br />
        <span class="highlight">obviamente un...contador</span>
      </h2>
      <div class={styles.gettingstarted}>
        <div
          class={styles.intro}
          
        />
        (No había mucho tiempo sorry perritos uwu)
        
      </div>
      <iframe src="https://giphy.com/embed/tHIRLHtNwxpjIFqPdV" width="200" height="200" style="" frameBorder="0" class="giphy-embed" ></iframe>
    </div>
  );
});
