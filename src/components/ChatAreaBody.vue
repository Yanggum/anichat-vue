<template>
  <!-- Build ChatAreaBody use ChatAreaFooter and ChatAreaHeader-->
  <!-- Build Chat item Samples-->
  <el-scrollbar class="chat-area" height="700px">
    <div class="chat-area__body">
      <ChatAreaBodyItem v-for="item in items" :item="item" :key="item.id"/>
    </div>
  </el-scrollbar>
</template>

<script>
import ChatAreaBodyItem from "@/components/ChatAreaBodyItem";


export default {
  name: "ChatAreaBody",
  components: {
    ChatAreaBodyItem
  },
  props: {
  },
  methods: {
    isCurrentUserItem: function (item) {
      return item.senderId === this.$store.state.currentUser.id;
 //     return this.$store.getters.isCurrentUserItem(item);
      //return this.store.getter("isCurrentUserItem", item);
    },
    getSenderAvatar: function (item) {
      return this.$store.getters.getSenderAvatar(item);
    }
//      return this.$store.getters.getSenderAvatar(item);
  },
  data() {
    return {
      // Sample Json
      // { id: 5,
      //   text: "I'm fine too",
      //   time: "2021-03-07T12:00:00.000Z",
      //   senderId: 1,
      //   recipientId: 2}
      items: this.$store.state.messages
    }
  },
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.chat-area {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 60px;
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

.chat-area__body {
  flex: 1;
  padding: 10px 20px;
  overflow: auto;
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