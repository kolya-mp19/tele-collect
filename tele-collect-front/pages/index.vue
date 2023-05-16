<template>
  <AuthPage />
</template>

<script lang="ts">
import Vue from 'vue'
import AuthPage from "../components/auth/AuthPage.vue"

export default Vue.extend({
  name: 'IndexPage',
  components: {
    AuthPage
   }
})
</script>
