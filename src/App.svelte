<script>
  import piano from "./assets/piano.mp3";
  import List from "./List.svelte";
  let audioElement;
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
  <List />
</article>
