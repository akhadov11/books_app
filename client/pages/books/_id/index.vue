<template>
  <main class="container my-3">
    <div class="row">
      <div class="col-12 text-center my-4">
        <h2 class="mb-3 display-5 text-uppercase">{{ book.name }}</h2>
      </div>
      <div class="col-md-6 mb-4">
        <img
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="book.picture"
          alt
        >
      </div>
      <div class="col-md-6">
        <div class="book-details">
          <h4>Author</h4>
          <p>{{ book.author_name }}</p>
          <h4>Price</h4>
          <p>{{ book.price }}</p>
          <h4>Published on</h4>
          <p>{{ book.pub_date }}</p>
          <h4>Description</h4>
          <textarea class="form-control" rows="10" v-html="book.description" disabled></textarea>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    head() {
      return {
        title: "View Book"
      };
    },
    async asyncData({$axios, params}) {
      try {
        let book = await $axios.$get(`/books/${params.id}`);
        return { book };
      } catch (e) {
        return { book: [] };
      }
    },
    data() {
      return {
        book: {
          name: "",
          picture: "",
          pub_date: "",
          author_name: "",
          price: null,
          description: "",
        }
      };
    }
  };
</script>

<style scoped>

</style>
