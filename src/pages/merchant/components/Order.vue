<template>
  <div class="order">
    <div class="menu" ref='menuwrapper'>
      <ul class="items">
        <li class="item" 
          :class="{'current': currentIndex==index}"
          v-for='(item,index) of goods'
          :key='index'
          @click="selectMenu(index)"
        ><span class="text">{{item.name}}</span></li>
      </ul>
    </div>
    <div class="foods-wrapper" ref='foodswrapper'>
        <ul>
          <li 
            class="food-list" 
            v-for='(item,index) of goods'
            ref='foodList'
          >
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li class="food-item" v-for='(list,i) of item.foods'>
                <div class="icon">
                  <img :src="list.image" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{list.name}}</h2>
                  <p class="desc">{{list.description}}</p>
                  <div class="extra">
                    <span>月售{{list.sellCount}}</span>
                    <span>好评率{{list.rating}}</span>
                  </div>
                  <div class="price">
                    <span>￥{{list.price}}</span>
                    <span>{{list.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
    </div>
  </div> 
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'MerchantOrder',
  props: {
    goods: Array
  },
  data () {
    return {
      listHeight: [],
      scrollY: 0,
      changValue: null
    }
  },
  watch: {
    goods () {
      return this.goods;
    }
  },
  computed: {
    currentIndex() {
      for(let i=0; i<this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 =this.listHeight[i+1];
        if(!height2 || this.scrollY >= height1 && this.scrollY <height2) {
          return i;
        }
      }
      return 0;
    }
  },
  mounted() {
    this._initScroll();
    setTimeout(() => {
      this.changValue = 1;
      this.$nextTick(() => {
        this.calculateHeight();
      });
    },0);
      
    this.multiScroll();
  },
  methods: {
    _initScroll() {
    // this.menuscroll = new BScroll(this.$refs.menuwrapper);
    this.foodsScroll = new BScroll(this.$refs.foodswrapper, {
      probeType: 3  //结合BScroll的接口使用，3实时派发scroll事件，探针的作用
    });
    },
    calculateHeight() {
        let foodList = this.$refs.foodList;
        let height = 0;
        this.listHeight.push(height);
        for(let i = 0; i <foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
    },
    multiScroll() {
      this.foodsScroll.on("scroll", (pos) => {
        if(pos.y >= 0) {
          this.scrollY = 0;
        }else {
          this.scrollY = Math.abs(Math.floor(pos.y));
        }
      })
    },
    selectMenu(index) {
      let foodList = this.$refs.foodswrapper.getElementsByClassName('food-list');
      console.log(foodList);
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el,300);
    }
  }
}
</script>
<style lang='stylus' scoped>
.order
  display flex
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  .menu
    flex 0 0 80px
    width 80px
    background #f8f8f8
    .item
      padding 4.6667vw 2vw
      &.current
        background red
        font-weight bold
  .foods-wrapper
    flex 1
    .title
      padding-left .28rem
      height .52rem
      line-height .52rem
      border-left 2px solid #d9dde1
      font-size .24rem
      // color rgb(147,153,159)
      background #f3f5f7
    .food-item
      display flex
      padding .18rem
      // border-bottom 1px solid red
      // border-1px(bgba(7,17,27, 0.1))
      // &:last-child
      //    border-none()
            // margin-bottom: 0
      .icon
        width 2.1rem
        height 2.1rem
        overflow hidden
        img 
          width 100%
      .content
        flex 1
        position relative
        padding-left .1rem
        .name
          font-size .3rem
          font-weight bold
          padding-top .04rem
          padding-bottom .1rem
        .desc, .extra
          line-height .4rem
          font-size .2rem
          color #999
        .price
          position absolute
          bottom .1rem
          font-size .3rem
          color #ff5339
</style>


