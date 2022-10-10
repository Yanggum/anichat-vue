<template>
  <div v-if="isCurrentUserItem(item)" class="chat-area__item chat-area__item--left">
    <div class="chat-area__avatar">
      <img :src="getSenderAvatar(item)" alt="avatar">
    </div>
    <div class="chat-area__text">
      {{ item.text }}
    </div>
  </div>
  <div v-else class="chat-area__item chat-area__item--right">
    <div class="chat-area__text">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatAreaBodyItem",
  props: {
    item: {
      type: Object,
      required: false
    },
  },

  methods: {
    isCurrentUserItem: function (item) {
      return item.senderId === this.$store.state.currentUser.id;
    },

    // itemClicked: function (item) {
    getSenderAvatar: function (item) {
      return this.$store.getters.getSenderAvatar(item);
    }
  }
}
</script>

<style scoped>
.chat-area {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.chat-area__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
}

.chat-area__header-left {
  display: flex;
  align-items: center;
}

.chat-area__avatar {
  margin-right: 10px;
}

.chat-area__avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.chat-area__name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.chat-area__item {
  display: flex;
  margin-bottom: 10px;
}

.chat-area__item--left {
  align-items: flex-start;
}

.chat-area__item--right {
  align-items: flex-end;
  display: block;
  text-align: right;
}

.chat-area__avatar {
  margin-right: 10px;
}

.chat-area__avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.chat-area__text {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #eee;
  max-width: 70%;
  word-break: break-word;
}

.chat-area__item--left .chat-area__text {
  background-color: #eee;
}

.chat-area__item--right .chat-area__text {
  background-color: #dcf8c6;
}

.chat-area__item--right .chat-area__avatar {
  margin-left: 10px;
  margin-right: 0;
}

.chat-area__item--right .chat-area__text {
  text-align: right;
}

.chat-area__item--right .chat-area__text::before {
  content: "";
  position: absolute;
  top: 0;
  left: -10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #dcf8c6;
}

</style>