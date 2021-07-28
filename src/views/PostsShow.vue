<template>
  <div class="posts-show">
    <h1>{{ message }}</h1>
    <div>
      <p>{{ post.title }}</p>
      <p>{{ post.user_id }}</p>
      <p>{{ post.body }}</p>
      <img v-bind:src="post.image" />
      <router-link v-bind:to="`/posts/${post.id}/edit`">Edit</router-link>
      <p><button>Delete Post</button></p>
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
      post: {},
    };
  },
  created: function () {
    this.postsShow();
  },
  methods: {
    postsShow: function () {
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
  },
};
</script>