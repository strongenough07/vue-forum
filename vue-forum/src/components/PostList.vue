<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="#">
          <img
            class="avatar-large"
            :src="userById(post.userId).avatar"
            alt=""
          />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>

      <div
        class="post-date text-faded"
        :title="hummanFriendlyDate(post.publishedAt)"
      >
        {{ diffForHumans(post.publishedAt) }}
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";
dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

export default {
  name: "PostList",
  data() {
    return {
      users: sourceData.users,
    };
  },
  props: {
    posts: {
      type: Array,

      required: true,
    },
  },
  methods: {
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
    diffForHumans(timestamp) {
      return dayjs.unix(timestamp).fromNow();
    },
    hummanFriendlyDate(timestamp) {
      return dayjs.unix(timestamp).format("LLLL");
    },
  },
};
</script>

<style>
</style>