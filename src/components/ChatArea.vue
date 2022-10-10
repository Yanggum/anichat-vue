<template>
  <!--  create a chat area-->
  <ChatAreaHeader></ChatAreaHeader>
  <ChatAreaBody></ChatAreaBody>
  <ChatAreaFooter></ChatAreaFooter>
</template>

<script>
import ChatAreaFooter from '@/components/ChatAreaFooter';
import ChatAreaHeader from '@/components/ChatAreaHeader';
import ChatAreaBody from '@/components/ChatAreaBody';


export default {
  name: "ChatArea",
  components: {
    ChatAreaFooter,
    ChatAreaHeader,
    ChatAreaBody
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

.chat-area__name h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.chat-area__name p {
  font-size: 12px;
  font-weight: 300;
  margin: 0;
}

.chat-area__header-right {
  display: flex;
  align-items: center;
}

.chat-area__actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.chat-area__action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;
}

.chat-area__action-button-icon {
  width: 20px;
  height: 20px;
}

.chat-area__content {
  flex: 1;
  display: flex;
  padding: 20px;
}

.chat-area__list {
  flex: 1;
  overflow-y: auto;
  padding-right: 20px;
}

.chat-area__list-item {
  margin-bottom: 20px;
}

.chat-area__list-item-content {
  display: flex;
  flex-direction: column;
}

.chat-area__list-item-text {
  padding: 15px 20px;
  background-color: #eee;
  border-radius: 8px;
}

.chat-area__list-item-text:last-child {
  margin-bottom: 0;
}

.chat-area__list-item-text p {
  margin: 0;
}


</style>