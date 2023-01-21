<script>
  import { wishes } from "./data";

  let inputWish = "";

  function addWish() {
    $wishes = [...$wishes, { wish: inputWish }];
    inputWish = "";
  }
</script>

<form on:submit|preventDefault={addWish}>
  <input
    type="text"
    placeholder="write your wishes..."
    bind:value={inputWish}
  />
</form>
{#each $wishes as w, index}
  <div class="bubble">{index + 1}.{w.wish}</div>
  <!--第2個參數是索引編號-->
{:else}
  <div class="bubble">Waiting for you..</div>
{/each}
