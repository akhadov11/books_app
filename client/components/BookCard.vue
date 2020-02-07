<template>
  <div class="card book-card">
    <img :src="book.picture" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ book.name }}</h5>
      <p class="card-text">
        <strong>Author: </strong>{{ book.author_name }}
      </p>
      <div class="action-buttons">
        <nuxt-link :to="`/books/${book.id}/`" class="button button1">View</nuxt-link>
        <nuxt-link :to="`/books/${book.id}/edit/`" class="button button2">Edit</nuxt-link>
        <button @click="onDelete(book.id)" class="button button3">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["book", "onDelete"]
  };
</script>

<style scoped>
  .book-card {
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, .6);
  }

  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 5px 3px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 5px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 10px;
    width: 60px;
  }

  .button1 {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
  }

  .button1:hover {
    background-color: #4CAF50;
    color: white;
  }

  .button2 {
    background-color: white;
    color: black;
    border: 2px solid #008CBA;
  }

  .button2:hover {
    background-color: #008CBA;
    color: white;
  }

  .button3 {
    background-color: white;
    color: black;
    border: 2px solid #f44336;
  }

  .button3:hover {
    background-color: #f44336;
    color: white;
  }

.action-buttons {
  display: flex;
  justify-content: center;
}

</style>
