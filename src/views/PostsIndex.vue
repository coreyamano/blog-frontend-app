<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Search: <input v-model="searchTerm" /></p>
    <div
      v-for="post in filterBy(posts, searchTerm, 'title')"
      v-bind:key="post.id"
    >
      <p>{{ post.id }}</p>
      <p>{{ post.title }}</p>
      <p>{{ post.user_id }}</p>
      <p>{{ post.body }}</p>
      <router-link v-bind:to="`/posts/${post.id}`">
        <img v-bind:src="posts.image" />
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "All Posts!",
      posts: [],
      searchTerm: "",
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>