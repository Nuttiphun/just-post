<script lang="ts">
import TextFieldComponent from '@/components/TextFieldComponent.vue'
import router from '@/router/router'
import api from '@/service/api'
import type { TApiError } from '@/types/api.type'
import type { TLoginRequest, TLoginRespond } from '@/types/auth.type'
import type { AxiosError } from 'axios'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginComponent',
  components: { TextFieldComponent },
  setup: () => {
    const username = ref('')
    const password = ref('')

    return { username, password }
  },
  methods: {
    async fetchLogin() {
      const payload: TLoginRequest = {
        identifier: this.username,
        password: this.password
      }

      try {
        const result = await api.post('/v1/auth/login', payload)
        const data = result.data as TLoginRespond

        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken)
        }

        router.push('/')

        console.log(data)
      } catch (er) {
        const error = er as AxiosError
        const data = error?.response?.data as TApiError
        alert(data.message)

        console.log(error.response)
      }
    }
  }
})
</script>

<template>
  <div>
    <div class="login-container">
      <h1>Login</h1>
      <div class="login-form">
        <TextFieldComponent label="Username" v-model:field="username" />
        <TextFieldComponent label="Password" type="password" v-model:field="password" />
      </div>
      <div>
        <router-link to="/register">Not have account?</router-link>
      </div>
      <button @click="fetchLogin">Login</button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  margin-bottom: 5px;
  margin: 0 auto; /* Center horizontally */
  flex-direction: column; /* Align children vertically */
  max-width: 400px;
}

.login-form {
  max-width: 300px;
  margin: 0 auto;
}
</style>
