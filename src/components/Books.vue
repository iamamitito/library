<template>
  <div class="books">
    <div class="books-read">
      <h2 class="title-unread">Unread Books</h2>
      <div class="books-container" v-bind:key="book.id" v-for="book in books">
        <template v-if="!book.book.read">
          <Book
            v-bind:book="book.book"
            v-on:del-book="$emit('del-book', book.id)"
            v-on:update-book="$emit('update-book', book)"
          />
        </template>
      </div>
    </div>
    <div class="books-read">
      <h2 class="title-read">Read Books</h2>
      <div class="books-container" v-bind:key="book.id" v-for="book in books">
        <template v-if="book.book.read">
          <Book
            v-bind:book="book.book"
            v-on:del-book="$emit('del-book', book.id)"
            v-on:update-book="$emit('update-book', book)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "./Book.vue";
export default {
  name: "Books",
  components: {
    Book,
  },
  props: ["books"],
};
</script>

<style scoped>
.books {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.books-container {
  width: 90%;
}
.books h2 {
  color: #fff;
  font-weight: 100;
  text-align: center;
  background-color: #202125;
  padding: 20px;
  width: 100%;
  margin-bottom: 10px;
}
.books .title-read {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.books .title-unread {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.books-read,
.books-unread {
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
}

@media (max-width: 1020px) {
  .books .title-read,
  .books .title-unread {
    border-radius: 10px;
  }
  .books-read,
  .books-unread {
    width: 100%;
  }
}
</style>
