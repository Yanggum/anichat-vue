import { createStore } from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default createStore({

  // create Chat store state
  state: {
    inputText: '',

    // create Chat store state properties
    messages: [
        // Chat Message samples
      // {
      //   id: 1,
      //   text: "Hi, I'm John",
      //   time: "2021-03-07T12:00:00.000Z",
      //   senderId: 1,
      //   recipientId: 2
      // },
      // {
      //   id: 2,
      //   text: "Hi, John, I'm Jane",
      //   time: "2021-03-07T12:00:00.000Z",
      //   senderId: 2,
      //   recipientId: 1
      // },
      // {
      //   id: 3,
      //   text: "How are you?",
      //   time: "2021-03-07T12:00:00.000Z",
      //   senderId: 1,
      //   recipientId: 2
      // },
      // {
      //   id: 4,
      //   text: "I'm fine, thanks. And you?",
      //   time: "2021-03-07T12:00:00.000Z",
      //   senderId: 2,
      //   recipientId: 1
      // },
      // {
      //   id: 5,
      //   text: "I'm fine too",
      //   time: "2021-03-07T12:00:00.000Z",
      //   senderId: 1,
      //   recipientId: 2
      // }
    ],
    pastMyMessages: [],
    pastGeneratedMessages: [],
    users: [
      {
        id: 1,
        name: "Elena",
        avatar: "http://localhost:8080/elena.png"
      },
      {
        id: 2,
        name: "Jane",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      }
    ],
    currentUser: {
        id: 1,
        name: "John",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
    }
  },

  // create Chat store getters
  getters: {
    // create Chat store getters properties
    messages: state => state.messages,
    users: state => state.users,
    isCurrentUser: id => state => state.currentUser.id === id,
    isCurrentUserItem: item => item.senderId === item.recipientId,
    getSenderAvatar: state => item => state.users.find(user => user.id === item.senderId).avatar,
  },

  // create Chat store mutations
  mutations: {
    // create Chat store mutations properties
    addMessage: (state, message) => {
      state.messages.push(message)
      state.pastMyMessages.push(message.text)
    },
    addGeneratedMessage: (state, message) => {
      state.messages.push(message)
      state.pastGeneratedMessages.push(message.text)
    }
  },

  // create Chat store actions
  actions: {
    // create Chat store actions properties
    addMessage: async function (context, message) {
      context.commit('addMessage', message)
//      await this._actions.responseMessage(context, message)
      let request = {
        contents: "",
        targetLanguageCode: 'en-US',
        parent: 'projects/strongai/locations/462791585560',
        mimeType: 'text/plain',
      };

      request.contents = message.text;
      let qs = require('qs');
      let data = {
        'text': message.text
      };
      let config = {
        method: 'POST',
        url: '/googletranslatetoeng',
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          'text': message.text
        }
      };

      // 영문 번역
      console.log(message);
      let preResult  = await axios.request(config);

      const options = {
        method: 'POST',
        url: 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        },
        data: {
          "inputs": {
            "past_user_inputs": context.state.pastMyMessages,
            "generated_responses": context.state.pastGeneratedMessages,
            "text": preResult.data[0].translations[0].translatedText
          }
        }
      };

      let response = await axios.request(options);
      console.log(response)
      config = {
        method: 'POST',
        url: '/googletranslatetokor',
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          'text': message.text
        }
      }

      config.data.text = response.data.generated_text;
      let postResult = await axios.request(config);
      postResult = postResult.data[0].translations[0].translatedText;

      context.commit('addGeneratedMessage',
        {
          id: context.state.messages.length + 1,
          text: postResult,
          time: new Date(),
          senderId: 1,
          recipientId: 2
        });
    },

    fetchMessages: (context) => {
        axios.get('/messages')
        .then(response => {
            context.commit('addMessage', response.data)
        })
    }
  }
});