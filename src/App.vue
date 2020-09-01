<template>
  <div id="app">
    <Header />
    <AddBook v-on:add-book="addBook" />
    <Books v-bind:books="books" v-on:del-book="deleteBook" v-on:update-book="updateBook" />
  </div>
</template>

<script>
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import Header from "./components/Layout/Header";
import firebase from "firebase";
import { db } from "./firebase";

export default {
  name: "App",
  components: {
    Books,
    Header,
    AddBook,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
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
          console.log("Book successfully deleted!");
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
          console.log("Book successfully updated!");
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
</style>
