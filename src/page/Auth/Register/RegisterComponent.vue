<template>
  <div>
    <div class="register-container">
      <h1>Register</h1>
      <div class="register-form">
        <TextFieldComponent label="Email" v-model:field="email" />
        <TextFieldComponent label="Username" v-model:field="username" />
        <TextFieldComponent label="Password" type="password" v-model:field="password" />
        <TextFieldComponent
          label="Comfirm Password"
          type="password"
          v-model:field="confirmPassword"
        />
      </div>
      <button class="register-button" @click="fetchRegister">Register</button>
    </div>
  </div>
</template>

<script lang="ts">
import TextFieldComponent from '@/components/TextFieldComponent.vue'
import router from '@/router/router'
import api from '@/service/api'
import type { TApiError } from '@/types/api.type'
import type { TRegisterRequest, TRegisterRespond } from '@/types/auth.type'
import type { AxiosError } from 'axios'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RegisterComponent',
  components: { TextFieldComponent },
  setup: () => {
    const email = ref('')
    const username = ref('')
    const password = ref('')
    const confirmPassword = ''

    return { email, username, password, confirmPassword }
  },
  methods: {
    async fetchRegister() {
      const payload: TRegisterRequest = {
        email: this.email,
        username: this.username,
        password: this.password
      }

      try {
        const result = await api.post('/v1/auth/register', payload)
        const data = result.data as TRegisterRespond

        router.push('/login')

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

<style scoped>
.register-container {
  margin-bottom: 5px;
  margin: 0 auto; /* Center horizontally */
  flex-direction: column; /* Align children vertically */
  max-width: 400px;
}

.register-form {
  max-width: 300px;
  margin: 0 auto;
}

.register-button {
  margin-top: 15px;
}
</style>
