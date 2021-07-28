<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/sample">Sample</router-link>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/posts">All Posts</router-link>
      |
      <router-link to="/posts/new">New Post</router-link>
    </div>
    <router-view />
    <p>Is Logged In? {{ isLoggedIn() }}</p>
    <p>User ID? {{ getUserId() }}</p>
  </div>
</template>

<style></style>
<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>