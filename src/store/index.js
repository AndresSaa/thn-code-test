import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import moment from 'moment'
import rooms from './rooms'

const vuexPersist = new VuexPersist({
  key: 'thn',
  storage: localStorage
})

Vue.use(Vuex)

const dateFormat = 'YYYY-MM-DD'

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],

  state: {
    adults: 'Adults: 2',
    children: 'Children: 0',
    checkin: moment().format(dateFormat),
    checkout: moment().add(1, 'd').format(dateFormat),
    room: Object.assign({}, rooms[0]),
    rooms
  },

  getters: {
    checkin: ({ checkin }) => checkin,
    checkout: ({ checkout }) => checkout,
    people: ({ adults, children }) => `${adults} ${children}`,
    adults: ({ adults }) => adults,
    children: ({ children }) => children,
    room: ({ room }) => room,
    rooms: ({ rooms }) => rooms
  },

  mutations: {
    PERSIST () {},
    SET_ADULTS (state, adults) {
      Vue.set(state, 'adults', adults)
    },
    SET_CHILDREN (state, children) {
      Vue.set(state, 'children', children)
    },
    SET_CHECKIN (state, checkin) {
      Vue.set(state, 'checkin', checkin)
    },
    SET_CHECKOUT (state, checkout) {
      Vue.set(state, 'checkout', checkout)
    },
    SET_ROOM (state, room) {
      Vue.set(state, 'room', room)
    }
  },
  actions: {
  },
  modules: {
  }
})
