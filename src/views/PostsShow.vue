<template>
  <div class="show">
    <h1>{{ message }}</h1>
  <div>
      <p>{{ posts.title }}</p>
      <p>{{ posts.user_id }}</p>
      <p>{{ posts.body }}</p>
      <img v-bind:src="posts.image" />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "View Post",
      posts: [],
    };
  },
  created: function () {
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      axios.get("/posts/1").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>