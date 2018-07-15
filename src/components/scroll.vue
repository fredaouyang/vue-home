<template>
<div class="container">
  <div class="pulldown-tip" v-if="tipShow">
      <p>{{pulldownTip.text}}</p>
  </div>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
  <!-- <div class="pullup-tip" v-if="tipShow">
      <p>{{pulldownTip.text}}</p>
  </div> -->
</div>

</template>
<script>
  import BScroll from 'better-scroll'
 
  export default {
      data(){
          return{
               pulldownTip: {
                text: '',// 松开立即刷新
                rotate: ''    // icon-rotate
            },
            tipShow:{
              type:Boolean,
              default:false
          }
          }
          
      },
      props:{
          pulldown:{
              type:Boolean,
              default:false
          },
          pullup:{
              type:Boolean,
              default:true
          }
      },
      mounted() {
        // 保证在DOM渲染完毕后初始化better-scroll
        setTimeout(() => {
            this._initScroll();
        }, 20)
    },
    methods:{
         reset(){
             console.log("reset");
            this.tipShow = false;
        },
        _touchMove(pos){
            let scrollHeight = this.scroll.pos;
            console.log(scrollHeight);
        },
        _initScroll(){
            if (!this.$refs.wrapper) {
                return
            }
        //  better-scroll的初始化
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                scrollY: true,
                probeType: 3
            });
    
           
            if(false){
                 this.scroll.on("scroll",(pos)=>{
                let scrollHeight = pos.y;
                console.log("scroll",scrollHeight);
                     if(scrollHeight>50){
                        this.pulldownTip = {
                                    text: '松开立即刷新',
                                    rotate: 'icon-rotate'
                                }
                    }
                
            })
                this.scroll.on("touchEnd",(pos)=>{
                let scrollHeight = pos.y;
                console.log("touchend",scrollHeight);
                this.pulldownTip = {
                                    text: '刷新中',
                                    rotate: 'icon-rotate'
                        }
                this.$emit("pulldown");
                
            })
            }
           
            // 是否派发滚动到底部事件，用于上拉加载
            if (this.pullup) {
                this.scroll.on('scrollEnd', () => {
                    console.log('scrollEnd');
                    console.log(this.scroll.y,this.scroll.maxScrollY);
                    // 滚动到底部
                    if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                        this.$emit('scrollToEnd');
                    }
                });
            }
            // if(this.pulldown){
            //         this.scroll.on('touchEnd',(pos)=>{
            //             if(pos.y>0){
            //                 if(pos.y>10&&pos.y<=50){
            //                 console.log(pos.y);
            //                 this.$emit("pulldown",function(){
            //                     this.tipShow = false;
            //                 });
                            
            //                 this.pulldownTip = {
            //                     text: '刷新中',     // 松开立即刷新
            //                     rotate: ''    // icon-rotate
            //                 }
            //             }else if (pos.y > 50) {
                            
            //                 this.pulldownTip = {
            //                     text: '松开立即刷新',
            //                     rotate: 'icon-rotate'
            //                 }
            //                 this.$emit("pulldown",console.log("this.tipShow"));
            //             } else {
            //                 console.log(pos.y);
    
            //                 this.pulldownTip = {
            //                     text: '刷新中',     // 松开立即刷新
            //                     rotate: ''    // icon-rotate
            //                 }
            //             }
            //             }
                        
            //         })   
            // }
        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
            console.log("zzzzzz");
          this.scroll.on('touchEnd', () => {
            // 滚动到底部
             console.log("zzz");
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                console.log("zzzzzz");
            //   this.$emit('scrollToEnd')
            }
          })
        }
    }
  }
  }
</script>