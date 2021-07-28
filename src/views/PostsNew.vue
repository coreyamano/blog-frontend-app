<template>
  <div class="new">
    <form v-on:submit.prevent="submit()">
      <h1>Create New Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newPostParams.title" />
      </div>
      <div class="mb-3">
      <label for="validationTextarea" class="form-label">Body:</label>
        <textarea
          class="form-control is-invalid"
          id="validationTextarea"
          placeholder="Post Body"
          required
        ></textarea>
        <div class="invalid-feedback">
        Please enter a message in the textarea.
        </div>
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="newPostParams.body" />
        <small>
          {{ 100 - newPostParams.body.length }} characters remaining</small
        >
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="newPostParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Make a New Post",
      newPostParams: {
        body: "",
      },
      errors: [],
    };
  },

  methods: {
    submit: function () {
      axios
        .post("/posts/new", this.newPostParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>