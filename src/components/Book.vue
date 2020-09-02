<template>
  <div class="book" v-bind:class="{ 'is-read': book.read }">
    <h3 class="book-title">{{ book.title }}</h3>
    <p class="book-author">{{ book.author }}</p>
    <input
      type="checkbox"
      id="read"
      v-on:change="$emit('update-book', book)"
      v-bind:checked="book.read"
    />
    <button class="delete-btn" @click="$emit('del-book', book.id)" title="Delete this book">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: ["book"],
  methods: {
    markRead() {
      this.book.read = !this.book.read;
    },
  },
};
</script>

<style scoped>
.book {
  padding: 20px;
  background-color: #202125;
  color: #ffff;
  border-radius: 10px;
  width: 450px;
  position: relative;
  margin: 10px auto;
}
.book-title {
  font-size: 25px;
  font-weight: 100;
  max-width: 99%;
}
.book-author {
  color: #707175;
}
.book input[type="checkbox"] {
  position: relative;
  border: 1px solid #f34b3e;
  border-radius: 4px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  margin-top: 20px;
  box-shadow: 0px -0.01px 3px 1px #f34b3e;
}
.book input[type="checkbox"]::before {
  position: absolute;
  content: "";
  display: block;
  top: 2px;
  left: 7px;
  width: 8px;
  height: 14px;
  border-style: solid;
  border-color: #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
}

.book input[type="checkbox"]:checked {
  color: #fff;
  border-color: #01b075;
  background: #01b075;
  box-shadow: 0px -0.01px 5px 1px #01b0769f;
}
.book input[type="checkbox"]:checked::before {
  opacity: 1;
}
.book .delete-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  border: 0;
  color: #51535a;
  cursor: pointer;
  font-size: 16px;
}

@media (max-width: 1020px) {
  .book {
    width: 100%;
  }
  .book-title {
    font-size: 20px;
  }
  .book-author {
    font-size: 15px;
  }
}
</style>
