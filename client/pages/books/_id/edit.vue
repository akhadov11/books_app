<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-12 text-center my-3">
        <h2 class="mb-3 display-4 text-uppercase">{{ book.name }}</h2>
      </div>
      <div class="col-md-6 mb-4">
        <img
          v-if="!preview"
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="book.picture"
          alt
        >
        <img
          v-else
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="preview"
          alt
        >
      </div>
      <div class="col-md-4">
        <form @submit.prevent="submitBook">
          <div class="form-group">
            <label for="name">Book name</label>
            <input id="name" type="text" class="form-control" v-model="book.name">
          </div>
          <div class="form-group">
            <label for="author">Author</label>
            <input id="author" type="text" class="form-control" v-model="book.author_name">
          </div>
          <div class="form-group">
            <label for>Book cover</label>
            <input type="file" @change="onFileChange">
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for>
                  Price
                  <small>(US dollars)</small>
                </label>
                <input v-model="book.price" type="number" class="form-control">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="date">
                  Published on:
                </label>
                <input id="date" v-model="book.pub_date" type="date" class="form-control">
              </div>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for>Short description</label>
            <textarea v-model="book.description" class="form-control" rows="8"></textarea>
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    head() {
      return {
        title: "Edit Book"
      }
    },
    async asyncData({$axios, params}) {
      try {
        let book = await $axios.$get(`/books/${params.id}`);
        return {book};
      } catch (e) {
        return {book: []};
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
        },
        preview: ""
      };
    },
    methods: {
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return;
        }
        this.book.picture = files[0];
        this.createImage(files[0]);
      },
      createImage(file) {
        let reader = new FileReader;
        let vm = this;
        reader.onload = e => {
          vm.preview = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      async submitBook() {
        let editedBook = this.book;
        if (String(editedBook.picture).indexOf("http://") !== -1) {
          delete editedBook["picture"]
        }
        const config = {
          headers: {"content-type": "multipart/form-data "}
        };
        let formData = new FormData();
        for (let data in editedBook) {
          formData.append(data, editedBook[data]);
        }
        try {
          let response = await this.$axios.$patch(`/books/${editedBook.id}/`, formData, config);
          this.$router.push("/books/");
        } catch (e) {
          console.log(e);
        }
      }
    }

  }
</script>

<style scoped>

</style>
