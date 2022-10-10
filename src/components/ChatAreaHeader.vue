<template>
  <!--  create chat area header-->
  <div class="chat-area__header">
    <div class="chat-area__header-left">
      <div class="chat-area__avatar">
        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="avatar">
      </div>
      <div class="chat-area__name">
        <div class="chat-area__name--fullname">John Doe</div>
        <div class="chat-area__name--status">Online</div>
      </div>
    </div>
    <div class="chat-area__header-right">
      <div class="chat-area__icon">
        <i class="fa fa-video-camera"></i>
      </div>
      <div class="chat-area__icon">
        <i class="fa fa-phone"></i>
      </div>
      <div class="chat-area__icon">
        <i class="fa fa-ellipsis-v"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatAreaHeader"
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
    position: fixed;
    width: -webkit-fill-available;
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

  .chat-area__name--fullname {
    font-size: 18px;
    font-weight: 700;
  }

  .chat-area__name--status {
    font-size: 12px;
    color: #999;
  }

  .chat-area__header-right {
    display: flex;
    align-items: center;
  }

  .chat-area__icon {
    margin-left: 20px;
    font-size: 18px;
    color: #999;
  }

  .chat-area__icon:hover {
    color: #666;
  }

  .chat-area__icon:first-child {
    margin-left: 0;
  }
</style>