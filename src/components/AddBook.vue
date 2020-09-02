<template>
  <div class="add-book">
    <h3>Add a New Book</h3>
    <form @submit="addBook">
      <input type="text" v-model="title" name="title" placeholder="Title..." />
      <input type="text" v-model="author" name="author" placeholder="Author..." />
      <small class="error" v-if="bookSent && (!title || !author)">Please enter both fields</small>
      <input type="submit" value="Add" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddBook",
  props: ["closeModal"],
  data() {
    return {
      title: "",
      author: "",
      bookSent: false,
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
        this.closeModal();
      } else {
        this.bookSent = true;
      }
    },
  },
};
</script>

<style scoped>
.add-book {
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 95%;
  height: 300px;
  background-color: #202125;
  border-radius: 10px;
  padding: 20px;
  z-index: 10;
}
.add-book h3 {
  text-align: center;
  color: #fff;
}
.add-book form {
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  margin: auto;
}
.add-book input {
  margin: 10px auto;
  border: 0;
}
.add-book input:focus {
  outline: none;
  border: 2px solid #01b075;
  box-shadow: 0px -0.01px 5px 1px #01b0769f;
}
.add-book input[type="text"] {
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  font-size: 15px;
}
.add-book input[type="submit"] {
  background-color: #01b075;
  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 100;
  box-shadow: 0px -0.01px 6px 1px #01b0769f;
  transition: transform 0.3s ease-in-out;
}
.add-book input[type="submit"]:hover {
  transform: scale(1.1);
}
.add-book .error {
  color: #f34a3e96;
  text-align: center;
}
</style>
