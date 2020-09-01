<template>
  <header class="header">
    <h1>
      <i class="fas fa-book"></i> Library
    </h1>
    <button>+</button>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: #202125;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header h1 {
  font-weight: 200;
}
.header a {
  color: #fff;
  padding-right: 5px;
}
.header button {
  width: 35px;
  height: 30px;
  margin-left: 8px;
  background-color: #01b075;
  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 25px;
  font-weight: 100;
  box-shadow: 0px -0.01px 6px 1px #01b0769f;
  transition: transform 0.3s ease-in-out;
}
.header button:focus {
  outline: none;
}
.header button:hover {
  transform: scale(1.2);
}
</style>
