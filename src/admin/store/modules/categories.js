

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {

  },
  actions: {
    async addNewCategory(store, title) {
      
      try{
        const response = await this.$axios.post("/categories", { title });
      } catch (error) {
        throw new Error (
          error.response.data.error || error.response.data.message
        );
      }
      
    }
  }
      
};
      
      