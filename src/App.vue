<template>
  <v-app>
    <v-main>
      <v-btn @click.stop="getPosition()" id="frameless" style="-webkit-app-region: no-drag">
        Criar janela
      </v-btn>
      <br /><br />
    </v-main>
  </v-app>
</template>

<script>
import test from './utils/test'

export default {
  methods: {
    getPosition () {
      test()
    }
  }
}
</script>
