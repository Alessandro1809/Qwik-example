import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
 
  return (
    <footer>
      <div class="container">
        
          <span class={styles.anchor}>Hecho con ♡ pa ustedes :D</span>
          
          <div class={styles.gyph}>
              <iframe  src="https://giphy.com/embed/Rlwz4m0aHgXH13jyrE" width="300" height="300" frameBorder="0" class="giphy-embed" ></iframe>
          </div>
      </div>
      
    </footer>
  );
});
