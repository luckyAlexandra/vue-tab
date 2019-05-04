<template>
  <div id="app">
    <tabs :value="testValue" @change="change">
      <tab label="tab1" index="111">
        content1
      </tab>
      <tab index="222">
        <div slot="label">
          tab2
        </div>
        content2
      </tab>
    </tabs>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data () {
    return {
      testValue: '111'
    }
  },
  methods: {
    change (v) {
      this.testValue = v
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
