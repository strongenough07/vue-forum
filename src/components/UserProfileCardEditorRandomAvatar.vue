<template>
  <div class="text-center" style="margin-bottom:15px;">
    <button class="btn-green btn-small" @click.prevent="getRandomImage">
      Random Avatar
    </button>
    <br />
    <small style="opacity: .5"
      >Powerd by <a href="https://pixabay.com">Pixabay</a></small
    >
  </div>
</template>

<script>
import { arrayRandom } from "@/helpers";
export default {
  methods: {
    async getRandomImage() {
      const searchTerms = [
        "cats",
        "dogs",
        "abstract",
        "cars",
        "mountains",
        "beach",
        "landscape",
        "object",
        "food",
        "flowers",
        "architecture",
        "yellow",
        "green",
        "blue",
        "orange",
        "black",
        "white",
        "brown",
        "red",
        "patterns",
        "animal",
        "code",
        "space"
      ];
      const randomWord = arrayRandom(searchTerms);
      const res = await fetch(
        `https://pixabay.com/api/?key=26237034-3cac81ca7011aa24d5c165961&q=${randomWord}`
      );
      const data = await res.json();
      const randomImage = arrayRandom(data.hits);
      this.$emit("hit", randomImage.webformatURL);
    }
  }
};
</script>

<style></style>
