<script>
  import { data } from "./data";
  import piano from "./assets/piano.mp3";
  let inputText;
  let audioElement;
  let wishes = [];
  data.subscribe((data) => {
    wishes = data;
  });
  function playpause() {
    if (audioElement.paused) {
      audioElement.volume = 0.8;
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }
</script>

<article>
  <audio bind:this={audioElement} src={piano} />
  <button on:click={playpause}>&#x266B;</button>
  <h1>Birthday wishes</h1>
  <input bind:this={inputText} type="text" placeholder="write your wishes..." />
  {#each wishes as w}
    <div class="bubble">{w.wish}</div>
  {/each}
</article>
