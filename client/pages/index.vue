<template>
  <header>
    <div class="text-box">
      <h1 class="title">
        Books
      </h1>
      <p class="subtitle">A little website with basic info about the books I love</p>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/books">
        View Books <span class="ml-2">-></span>
      </nuxt-link>
    </div>
  </header>
</template>

<script>

  export default {
    head() {
      return {
        title: "Home page"
      };
    },
  };
</script>

<style>
  header {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.3)
    ), url("../static/images/banner.jpg");
    background-position: center;
    background-size: cover;

  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 500;
    font-size: 100px;
    /*color: #213447;*/
    letter-spacing: 1px;
    color: #8ebcbf;
    text-shadow: 1px 1px 2px black;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #8dc1c4;
    word-spacing: 5px;
    padding-bottom: 15px;
    /*text-shadow: 2px 2px 3px rgba(255,255,255,0.4);*/
    text-shadow: 1px 1px 2px black;
  }

  .text-box p {
  font-size: 2rem;
  font-weight: lighter;
}
</style>
