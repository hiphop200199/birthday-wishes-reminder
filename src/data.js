import { writable } from "svelte/store";
export const data=writable([{wish:"get a job"},{wish:"buy samsung zflip4"}]);

data.subscribe(()=>{localStorage.setItem("wish","get a job")});