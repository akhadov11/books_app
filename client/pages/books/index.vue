<template>
  <main class="container mt-5">
    <div class="row">
      <div class="col-12 text-right mb-4">
        <div class="d-flex justify-content-between">
          <h3>Books</h3>
          <div class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="search_term"
                   aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" @click="searchBooks()">Search</button>
          </div>
          <div>
            <select v-model="order_term">
              <option disabled value="">Choose one ordering parameter</option>
              <option value="name">Name ascending</option>
              <option value="-name">Name descending</option>
              <option value="author_name">Author name ascending</option>
              <option value="-author_name">Author name descending</option>
              <option value="price">Price ascending</option>
              <option value="-price">Price descending</option>
            </select>
            <button class="button btn2" @click="orderBooks()">Filter</button>
          </div>
          <button class="button button1" :disabled="!prevBooks" @click="fetchBooksQueriesPreviousPage()">&lt;</button>
          <button class="button button2" :disabled="!nextBooks" @click="fetchBooksQueriesNextPage()">&gt;</button>
          <nuxt-link to="/books/add" class="btn btn-info">Add book</nuxt-link>
        </div>
      </div>
      <template v-for="book in allBooks">
        <div :key="book.id" class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <book-card :onDelete="deleteBook" :book="book"></book-card>
        </div>
      </template>
    </div>
  </main>
</template>

<script>
  import BookCard from "~/components/BookCard.vue";
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'


  export default {
    head() {
      return {
        title: "Books list"
      };
    },
    components: {
      BookCard
    },
    // async asyncData({$axios, params}) {
    //   try {
    //     let books_p = {
    //       count: "",
    //       next: "",
    //       previous: "",
    //       results: "",
    //     };
    //     books_p = await $axios.$get(`/books/`);
    //     let books = books_p["results"];
    //     return {books};
    //   } catch (e) {
    //     return {
    //       books: []
    //     };
    //   }
    // },
    data() {
      return {
        search_term: '',
        order_term: '',
      };
    },
    computed: mapGetters(['allBooks', 'prevBooks', 'nextBooks']),
    // watch: {
    //   async fetch({store}) {
    //     let {books} = await store.dispatch('bookQueries/fetchBookQueriesInitial', {});
    //     return books
    //   },
    async mounted() {
      this.$store.dispatch("fetchBooksQueriesInitial");
    },

    methods: {
      async deleteBook(book_id) {
        try {
          await this.$axios.$delete(`/books/${book_id}/`);
          let newBooks = await this.$axios.$get(`/books/`);
        } catch (e) {
          console.log(e);
        }
      }
      ,
      searchBooks() {
        this.$store.dispatch("searchBooks", {searchTerm: this.search_term})
      },
      orderBooks() {
        this.$store.dispatch("orderBooks", {orderTerm: this.order_term})
      },
      ...mapActions(['fetchBooksQueriesNextPage', 'fetchBooksQueriesPreviousPage']),
    }

  }
  ;
</script>

<style scoped>
  .button {
    padding: 5px 3px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px -15px;
    transition-duration: 0.7s;
    cursor: pointer;
    border-radius: 8px;
    width: 60px;
    background-color: white;
    color: #4CAF50;
    border: 2px solid #4CAF50;
  }

  .button:hover {
    background-color: #4CAF50;
    color: white;
  }

  .btn.btn-outline-success {
    transition-duration: 0.7s;
    border-radius: 8px;
  }

  .btn2 {
    margin: 5px;
  }

  select {
    border-radius: 5px;
    height: 39px;
  }

</style>
