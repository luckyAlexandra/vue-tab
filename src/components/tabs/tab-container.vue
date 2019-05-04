<script>
export default {
  props: {
    panes: {
      type: Array,
      required: true
    }
  },
  render () {
    const contents = this.panes.map(pane => {
      return (pane.active || pane.disabledActive) ? pane.$slots.default : null
    })
    return (
      <div class="tab-content">
        {contents}
      </div>
    )
  }
}
</script>
