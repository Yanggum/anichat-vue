<template>
  <!--  Create a chat area footer -->
  <footer class="chatbox__footer">
    <div class="chatbox__footer__input">
      <input type="text" v-model="inputText" placeholder="Type a message...">
    </div>
    <div class="chatbox__footer__button">
      <el-button class="chatbox__footer__button" v-on:click="handleSendClick" type="primary">Send</el-button>
    </div>
  </footer>
</template>

<script>

export default {
  name: "chat-area-footer",

  data() {
    return {
      inputText: this.$store.state.inputText,
    }
  },

  // Add Event Listeners and Methods
  methods: {
    // Add a method to handle the click event
    handleSendClick: function () {
      console.log("Send button clicked");
      // Get the input element
      //const input = document.querySelector(".chatbox__footer__input input");
      // Get the value of the input element
      const value = this.inputText;
      // If the value is not empty
      if (value) {
        // Emit the send event
        this.$store.dispatch("addMessage", {
          id: this.$store.state.messages.length + 1,
          text: value,
          time: new Date(),
          senderId: 2,
          recipientId: 1
        });

        this.inputText = "";
      }
    }
  }
}
</script>

<style scoped>
  .chatbox__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 20px;
    border-top: 1px solid #eee;
    position: fixed;
    bottom: 0;
    width: -webkit-fill-available;
  }

  .chatbox__footer__input {
    width: 100%;
  }

  .chatbox__footer__input input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }

  .chatbox__footer__button {
    margin-left: 10px;
  }

  el-button {

    height: 100%;
    background-color: #2a8df2;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }

</style>