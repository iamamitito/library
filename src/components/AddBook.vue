<template>
  <div>
    <form @submit="addBook">
      <input type="text" v-model="title" name="title" placeholder="Title..." />
      <input type="text" v-model="author" name="author" placeholder="Author..." />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddBook",
  data() {
    return {
      title: "",
      author: "",
    };
  },
  methods: {
    addBook(e) {
      e.preventDefault();
      if (this.title && this.author) {
        const newBook = {
          title: this.title,
          author: this.author,
          read: false,
        };
        this.$emit("add-book", newBook);
        this.title = "";
        this.author = "";
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
  background-color: #01b075;
}
@media (min-width: 600px) {
  form {
    width: 40%;
    margin: auto;
  }
}
</style>
