<script setup lang="ts">
import { SakuraRain, VButton, TextSelectMenu } from 'ventus-ui'
</script>

<template>
  <main class="container">
    <SakuraRain>
      <div class="rain">123</div>
    </SakuraRain>
    <div>
      <v-button>123</v-button>
    </div>
    <TextSelectMenu>123</TextSelectMenu>
  </main>
</template>

<style scoped>
.container {
  padding: 20px;
  height: 100%;
}
.rain {
  width: 200px;
  height: 200px;
}
</style>
