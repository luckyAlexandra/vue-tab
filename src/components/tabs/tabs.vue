<script>
import tabContainer from './tab-container.vue'
export default {
  name: 'Tabs',
  prop: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      panes:[]
    }
  },
  components: {
    tabContainer
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  },
  render () {
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <tab-container panes={this.panes}></tab-container>
      </div>
    )
  }
}
</script>
<style lang="stylus" scoped>
.tabs-header
  display inline-block
  list-style none
  margin 0
  padding 0
</style>