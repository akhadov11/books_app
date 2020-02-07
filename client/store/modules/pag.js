export default {
  state: {
    books: [],
    booksPreviousPage: null,
    booksNextPage: null,
  },
  mutations: {
    setBooksQueries(state, data) {
      state.books = data.results;
      state.booksNextPage = data.next;
      state.booksPreviousPage = data.previous;
      window.scrollTo(0, 0);
    },
  },
  getters: {
    allBooks(state) {
      return state.books
    },
    prevBooks(state) {
      return state.booksPreviousPage;
    },
    nextBooks(state) {
      return state.booksNextPage;
    }
  },
  actions: {
    async fetchBooksQueriesInitial({commit}) {
      await this.$axios
        .get(`/books/`)
        .then(response => {
          commit('setBooksQueries', response.data)
        })
    },
    async fetchBooksQueriesNextPage({state, commit}) {
      await this.$axios.get(state.booksNextPage).then(response => {
        commit('setBooksQueries', response.data)
      })
    },
    async fetchBooksQueriesPreviousPage({state, commit}) {
      await this.$axios.get(state.booksPreviousPage).then(response => {
        commit('setBooksQueries', response.data)
      })
    },
    async searchBooks({commit}, {searchTerm}) {
      await this.$axios.get(`/books/`, {params: {search: searchTerm}}).then(response => {
        commit('setBooksQueries', response.data)
      })
    },
    async orderBooks({commit}, {orderTerm}) {
      await this.$axios.get('/books/', {params: {ordering: orderTerm}}).then(response => {
        commit('setBooksQueries', response.data)
      })
    },

  },

}
// setBooksQuery(state, {data}) {
//   const entity = state.booksQuery.find(e => e.id === data.id);
//   const entityIndex = state.booksQuery.indexOf(entity);
//   Vue.set(state.booksQuery, entityIndex, data)
// },

// appendBooksQueries(state, data) {
//   state.books.push(...data.results);
//   state.booksNextPage = data.next
// }


// async fetchBooksQueriesNextPage({state, commit}) {
//   await this.$axios.get(state.booksNextPage).then(response => {
//     commit('setBooksQueries', response.data)
//   })
// },
// async fetchBooksQueriesPreviousPage({state, commit}) {
//   await this.$axios.get(state.booksPreviousPage).then(response => {
//     commit('setBooksQueries', response.data)
//   })
// },
// async fetchBooksQueriesMore({state, commit}) {
//   await this.$axios.get(state.booksNextPage).then(response => {
//     commit('appendBooksQueries', response.data)
//   })
// },

// async searchBooksQueries({commit}, {websiteId, searchTerm}) {
//   await this.$axios
//     .get(`/api/websites/${websiteId}/google-queries/`, {
//       params: {search: searchTerm}
//     })
//     .then(response => {
//       commit('setBooksQueries', response.data)
//     })
// },
// async excludeBooksQuery({commit}, {websiteId, queryId}) {
//   await this.$axios
//     .post(`/api/websites/${websiteId}/google-queries/${queryId}/exclude/`, {})
//     .then(response => {
//       commit('setBooksQuery', {data: response.data})
//     })
// },
// async whitelistBooksQuery({commit}, {websiteId, queryId}) {
//   await this.$axios
//     .post(
//       `/api/websites/${websiteId}/google-queries/${queryId}/whitelist/`,
//       {}
//     )
//     .then(response => {
//       commit('setBooksQuery', {data: response.data})
//     })
// }
