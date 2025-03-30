import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    all: []
  }),
  getters: {
    latest: (products) => products.all[0]
  },
  actions: {
    add() {
      this.all.push()
    }
  }
})
