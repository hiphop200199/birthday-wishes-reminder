<script>
  const bgm = new Audio("./assets/piano-moment.mp3");
  function music() {
    bgm.play();
  }
</script>

<article>
  <button on:click={music}>&#x266B;</button>
  <h1>Birthday wishes</h1>
  <input type="text" placeholder="write your wishes..." />
  <button type="button">ok</button>
</article>
