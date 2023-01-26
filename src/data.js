


import { localStore } from './localStore.js'



const initialWishes = []

export const wishes = localStore('birthday-wishes', initialWishes)
