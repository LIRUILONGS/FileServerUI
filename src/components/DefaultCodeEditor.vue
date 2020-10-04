<template>
  <div class="default-code-editor">
    <codemirror :value="value" @input="handleInput" :options="options"></codemirror>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/vue/vue.js'
export default {
  name: 'DefaultCodeEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: { codemirror },
  data () {
    return {
      options: {
        tabSize: 2,
        mode: 'text/x-vue',
        lineNumbers: true,
        line: true
      }
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang="less">
.default-code-editor {
  height: 100%;
  width: 100%;
  /deep/ .vue-codemirror {
    height: 100%;
    width: 100%;
    .CodeMirror{
      height: 100%;
      width: 100%;
    }
  }
}
</style>
