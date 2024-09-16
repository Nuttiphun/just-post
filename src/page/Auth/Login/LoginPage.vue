<template>
  <div class="home-container">
    <div class="content">
      <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <div class="wrapper">
          <div class="greetings">
            <h1 class="green">Welcome to JUSTPOST</h1>
          </div>
        </div>
      </header>

      <div class="wrapper">
        <right-box>
          <LoginComponent />
        </right-box>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginComponent from './LoginComponent.vue'

export default defineComponent({ name: 'LoginPage', components: { LoginComponent } })
</script>

<style scoped>
@media (min-width: 1024px) {
  .home-container {
    display: flex;
    place-items: center;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  right-box {
    display: flex;
    place-items: center;
    padding-left: calc(var(--section-gap) / 2);
  }

  right-box .wrapper {
    display: flex;
    place-items: flex-end;
    flex-wrap: wrap;
  }
}
</style>
