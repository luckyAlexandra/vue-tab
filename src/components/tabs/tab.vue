<script>
export default {
  name: 'Tab',
  props: {
    index: {
      requird: true,
      type: [String, Number]
    },
    label: {
      type: String,
      default: 'tab'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    active () {
      return this.$parent.$attrs.value === this.index && !this.disabled
    }
  },
  methods: {
    handleClick () {
      this.$parent.onChange(this.index)
    }
  },
  render () {
    const tab = this.$slots.label || <span>{this.label}</span>
    const classNames = {
      'tab': true,
      'checked': this.active
    }
    return (
      <li class={classNames} on-click={this.handleClick}>
        {tab}
      </li>
    )
  },
  mounted () {
    this.$parent.panes.push(this)
  }
}
</script>
<style lang="stylus" scoped>
$blue = #316ccb
$black = #353535
$gray95 = #959595
$border = #e5e5e5
  .tab
    list-style none
    outline none
    font-size 12px
    position relative
    display inline-block
    width 336px
    height 74px
    padding 16px 20px
    box-sizing border-box
    border 1px solid $border
    margin-right 16px
    cursor pointer
  &:hover
    border-color $blue
  &.checked
    border-color $blue
    background-color #ecf5ff
</style>