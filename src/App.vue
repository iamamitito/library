<template>
  <div id="app">
    <Backdrop v-if="open" v-bind:closeModal="closeModal" />
    <Header v-bind:openModal="openModal" />
    <AddBook v-bind:closeModal="closeModal" v-if="open" v-on:add-book="addBook" />
    <Books v-bind:books="books" v-on:del-book="deleteBook" v-on:update-book="updateBook" />
  </div>
</template>

<script>
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import Header from "./components/Layout/Header";
import Backdrop from "./components/Backdrop";
import firebase from "firebase/app";
import { db } from "./firebase";

export default {
  name: "App",
  components: {
    Books,
    Header,
    AddBook,
    Backdrop,
  },
  data() {
    return {
      books: [],
      open: false,
    };
  },
  methods: {
    openModal() {
      this.open = true;
    },
    closeModal() {
      this.open = false;
    },
    addBook(newBook) {
      db.collection("books").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        title: newBook.title,
        author: newBook.author,
        read: newBook.read,
      });
    },
    deleteBook(id) {
      db.collection("books")
        .doc(id)
        .delete()
        .then(() => {
          return true;
        })
        .catch((error) => {
          console.error("Error removing book: ", error);
        });
    },
    updateBook(object) {
      db.collection("books")
        .doc(object.id)
        .update({
          read: !object.book.read,
        })
        .then(() => {
          return true;
        })
        .catch((error) => {
          console.error("Error updating book: ", error);
        });
    },
  },
  created() {
    db.collection("books")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (snapshot) =>
          (this.books = snapshot.docs.map((doc) => ({
            id: doc.id,
            book: doc.data(),
          })))
      );
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-color: #17181c;
}
.app {
  position: relative;
}
</style>
