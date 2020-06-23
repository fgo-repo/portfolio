// import Cookie from 'cookie-universal-nuxt'

export const state = () => ({
  cookie: true,
  theme: "light"
})

export const mutations = {
  SET_COOKIE(state, cookie) {
    state.cookie = cookie
  },
  SET_THEME(state, theme) {
    state.theme = theme
  }
}

export const actions = {
  setCookie({ commit }, { app, cookie }) {
    if (cookie !== undefined) {
      commit('SET_COOKIE', cookie)

      const settings = {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      }
      process.browser ? this.$cookies.set('GDPR', cookie, settings) : app.$cookies.set('GDPR', cookie, settings)
    }
  },
  setTheme({ commit }, { app, theme }) {
    if (theme !== undefined) {
      commit('SET_THEME', theme)

      const settings = {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      }
      process.browser ? this.$cookies.set('THEME', theme, settings) : app.$cookies.set('THEME', theme, settings)
    }
  }
}