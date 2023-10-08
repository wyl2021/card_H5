//rotate3DCard.vue
<style lang="scss">
    .card-3d{
        width: 100%;
        transition: all .2s;
        position: relative;
        perspective: 1500px;
        background-color: transparent;
        point: cursor;
        .card{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            transition: all 1s;
            backface-visibility: hidden;
            border-radius: 4px;
            &:hover{
            }
            &.card-z{
            }
            &.card-f-y{
                transform :rotateY(-180deg);
            }
            &.card-f-x{
                transform: rotateX(-180deg);
            }
        }
    }
</style>
<template>
  <div class="card-3d" @mouseover="eve_cardres_msover" @mouseout="eve_cardres_msout">
    <div class="card card-z" @click.stop="eve_cardres_click" ref="cardz">
      <slot name="cz"></slot>
    </div>
    <div :class="['card',direction=='row'?'card-f-y':'card-f-x']" @click.stop="eve_cardres_click" ref="cardf">
      <slot name="cf"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    trigger: { //触发方式 hover click custom
      type: String,
      default: 'click' //默认点击触发
    },
    value: { //正反面
      type: Boolean,
      default: true
    },
    direction: { //方向 row col
      type: String,
      default: 'row'
    }
  },
  data() {
    return {
      surface: true,
      height:0
    }
  },
  watch: {
    value(bool) {//自定义触发方式
      if (this.trigger == 'custom') this.fn_reserve_action(bool)
    }
  },
  mounted(){
  },
  methods: {
    getCardHeight(){
      return  document.querySelector('.card').clientHeight
    },
    fn_reserve_action(bool) {
      var arr = this.direction == 'row' ? ['rotateY(180deg)', 'rotateY(0deg)'] : ['rotateX(-180deg)', 'rotateX(0deg)']
      this.$refs.cardz.style.transform = bool ? arr[0] : arr[1]
      this.$refs.cardf.style.transform = !bool ? arr[0] : arr[1]
    },
    eve_cardres_click() {
      if (this.trigger == 'click') {
        this.fn_reserve_action(this.surface)
        this.surface = !this.surface
        this.$emit('input',this.surface)
      }
    },
    eve_cardres_msover() {
      if (this.trigger == 'hover') this.fn_reserve_action(true)
    },
    eve_cardres_msout() {
      if (this.trigger == 'hover') this.fn_reserve_action(false)
    }
  }
}
</script>