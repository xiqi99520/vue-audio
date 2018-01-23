<template>
  <div class="player">
    <h6>{{ musics[musicIndex].author }}</h6>
    <h5>{{ musics[musicIndex].title }}</h5>
    <div class="time-line">

    </div>
    <div class="btn-group">
        <div v-for="item in btn" :class="[item.classname,{'active':item.isClick}]" @click="item.func">
          <a :href="item.href" :style="{backgroundImage: 'url(' + item.imgurl + ')'}"></a>
        </div>
    </div>
    <audio id="player" ref="audio" @play="onPlay" @pause="onPause" :src="musics[musicIndex].url"></audio>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        musicIndex: 0,
        btn: [
          {href: 'javascript:void(0)',classname: 'prev',imgurl: require('@/assets/prev.png'),func: this.prev,isClick: false},
          {href: 'javascript:void(0)',classname: 'play',imgurl: require('@/assets/play.png'),func: this.playOrPause,isClick: false},
          {href: 'javascript:void(0)',classname: 'next',imgurl: require('@/assets/next.png'),func: this.next,isClick: false}
        ],
        audio: {
            playing: false
        },
        musics: [
          { url : '/static/1.mp3',author: '新乐尘符', title: '123我爱你'},
          { url : '/static/2.mp3',author: 'FKJ', title: 'Drops'}
        ]
      }
    },
    methods: {
        playOrPause(){
          return this.audio.playing ? this.pause() : this.play()
        },
        prev(){
          this.musicIndex--
          if(this.musicIndex < 0){
            this.musicIndex = this.musics.length-1
          }
          if(this.audio.playing){
            setTimeout(function(){
              document.querySelector('#player').play()
            },20)
          }
        },
        play(){
          this.$refs.audio.play()
        },
        pause(){
          this.$refs.audio.pause()
        },
        onPlay(){
          this.audio.playing = true
        },
        onPause(){
          this.audio.playing = false
        },
        next(){
          this.musicIndex++
          if(this.musicIndex > this.musics.length-1){
            this.musicIndex = 0
          }
          if(this.audio.playing){
            setTimeout(function(){
              document.querySelector('#player').play()
            },20)
          }
        }
    },
    computed: {

    },
    mutations: {
      
    },
    actions: {
      
    }
  }
</script>

<style scoped>
  .player{
    width: 70%;
    height: 180px;
    margin: auto;
    position: relative;
    background-color: #f6f6f6;
    border: 1px solid #a8a7a7;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
  }
  .player h6{
    padding-top: 1.7rem;
    text-align: center;
    font-size: 12px;
    color: #9b9899;
  }
  .player h5{
    margin-top: 0.4rem;
    text-align: center;
    font-size: 13px;
  }
  .btn-group{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    clear: both;
    overflow: hidden
  }
  .btn-group .prev{
    width: 29%;
    height: 2.6rem;
    line-height: 2.6rem;
    border-top: 1px solid #d7d5d5;
    text-align: center;
    float: left;
  }
  .btn-group .play{
    width: 39%;
    height: 2.6rem;
    line-height: 2.6rem;
    border-top: 1px solid #d7d5d5;
    border-left: 1px solid #d7d5d5;
    border-right: 1px solid #d7d5d5;
    text-align: center;
    float: left;
  }
  .btn-group .next{
    width: 29%;
    height: 2.6rem;
    line-height: 2.6rem;
    border-top: 1px solid #d7d5d5;
    text-align: center;
    float: left;
  }
  .btn-group a{
    display: inline-block;
    width: 0.8rem;
    height: 0.65rem;
    background-repeat: no-repeat;
    background-size: 0.8rem 0.65rem;
  }
  .btn-group .active{
    background-color: #e0dede;
    border: 1px solid #c3c1c1;
  }
</style>
