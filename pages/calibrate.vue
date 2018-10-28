<template>
  <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 class="contenedorTitulo">
          <h1 class="text-xs-center">Calibrar motores</h1>
        </v-flex>
          <v-flex xs12 sm3 md3 offset-xs3>
            <v-btn fab dark large color="green" class="ctaInicio" @click="actionTest('start')" id="start">
              Start
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3 md3 offset-xs0 offset-lg1>
            <v-btn fab dark large color="red" class="ctaInicio" @click="actionTest('stop')" id="stop">
              Stop
            </v-btn>
          </v-flex>

      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 class="contenedorEstado">
          <h2 class="status">{{this.statusMotors}}</h2>
        </v-flex>
      </v-layout>

  </v-container>
</template>
<script>
import axios from '~/plugins/axios'
export default {
  data () {
    return {
      statusMotors: 'Espera'
    }
  },
  methods: {
    async actionTest (paramsStatus, error) {
      return axios.get(`/api/test${paramsStatus}`)
        .then((res) => {
          console.log(res.data)
          this.statusMotors = res.data
        })
        .catch((e) => {
          error({ statusCode: 404, message: 'status not found' })
        })
    }
  },
  head () {
    return {
      title: 'Calibrando motores'
    }
  }
}
</script>

<style scoped>
.ctaInicio{
  height: 188px;
  width: 188px;
  font-size: 30px;
}
.contenedorTitulo{
  margin: 2% 0;
  font-size: 25px;
}
.resultContainer {
  height: 350px;
}
.contenedorEstado{
  margin-top: 5%;
}

.contenedorEstado h2{
  text-align: center;
}
</style>
