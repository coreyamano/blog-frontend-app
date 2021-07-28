<template>
  <div class="posts-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="editPostParams.title" />
      </div>
      <div>
        <label>User Id:</label>
        <input type="text" v-model="editPostParams.user_id" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="editPostParams.body" />
      </div>
      <div>
        <label>Image Url:</label>
        <input type="text" v-model="editPostParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Edit Post",
      editPostParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .patch(`/posts/${this.$route.params.id}`, this.editPostParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts/" + this.$route.params.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getRecipe: function () {
      console.log("getting post")
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.editPostParams = response.data;
      });
    },
  },
  created: function () {
    console.log("in created...");
    this.getPost();
  },
};
</script>