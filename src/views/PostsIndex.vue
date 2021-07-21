<template>
  <div class="home">
    <h1>{{ message }}</h1>
  <div v-for="post in posts" v-bind:key="post.id">
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
      message: "All Posts!",
      posts: [],
    };
  },
  created: function () {
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      axios.get("/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>