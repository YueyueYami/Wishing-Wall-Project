<style lang="scss" scoped>
    .xybox {
        width: 60%;
        margin: 0 auto;
        height: 700px;
        padding: 20px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.507);

        .box {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.21);
            position: relative;

            .active {
                z-index: 99999;
            }

            .all {
                width: 100%;
                height: 20px;
                position: absolute;
                top: 0;
                cursor: pointer;
            }

            .ly {
                user-select: none;
                width: 300px;
                height: 240px;
                background-color: blueviolet;
                position: absolute;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 5px 5px 10px #000;

                .move {
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background-color: blueviolet;
                    cursor: move;
                    user-select: none;
                }

                .ly-content {
                    padding: 5px 10px;
                }

                .user {
                    width: 100%;
                    align-items: center;
                    height: 50px;
                    position: absolute;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 10px;
                    box-sizing: border-box;
                    bottom: 0;

                    img {
                        height: 30px;
                        width: 30px;
                    }
                }
            }
        }
    }
</style>
<template>
    <div>
        <div class="xybox">
            <div class="box">
                <div v-show="$store.state.ssflag==false" v-darg class="ly" @mousedown="addindex(i)" :class="{active:flag==i}" :style="{backgroundColor:item.cardcolor,top:`${item.top}px`,left:`${item.left}px`}" v-for="(item,i) in $store.state.lylist" :key="i">
                    <div class="move">
                        <h3>点我拖拽</h3>
                    </div>
                    <div class="ly-content">
                        {{item.content}}
                    </div>
                    <div class="user">
                        <img src="002-96982623_p0.png" alt="">
                        <p>{{item.username}}</p>
                    </div>
                </div>
                <div v-show="$store.state.ssflag==true" v-darg class="ly" @mousedown="addindex(i)" :class="{active:flag==i}" :style="{backgroundColor:item.cardcolor,top:`${item.top}px`,left:`${item.left}px`}" v-for="(item,i) in $store.state.sslist" :key="i">
                    <div class="all" @click="all">
                        < 展示全部</div> <div class="move">
                            <h3>点我拖拽</h3>
                    </div>
                    <div class="ly-content">
                        {{item.content}}
                    </div>
                    <div class="user">
                        <img src="002-96982623_p0.png" alt="">
                        <p>{{item.username}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                flag: 0
            }
        },
        methods: {
            addindex(i) {
                console.log(i);
                this.flag = i
            },
            all() {
                this.$store.commit('all')
            },
        },
        created() {

        },
        directives: {
            darg: {
                inserted(el, binding) {
                    let cont = document.querySelector('.box')
                    el.onmousedown = (e) => {
                        let disX = e.clientX - el.offsetLeft
                        let disY = e.clientY - el.offsetTop
                        document.body.onmousemove = (e) => {
                            let minX = e.clientX - disX
                            let maxX = cont.offsetWidth - el.offsetWidth
                            let minY = e.clientY - disY
                            let maxY = cont.offsetHeight - el.offsetHeight
                            if (minX < 0) {
                                el.style.left = 0 + 'px'
                            } else {
                                if (minX > maxX) {
                                    el.style.left = maxX + 'px'
                                } else {
                                    el.style.left = minX + 'px'
                                }
                            }
                            if (minY < 0) {
                                el.style.top = 0 + 'px'
                            } else {
                                if (minY > maxY) {
                                    el.style.top = maxY + 'px'
                                } else {
                                    el.style.top = minY + 'px'
                                }
                            }
                        }
                        document.body.onmouseup = () => {
                            document.body.onmousemove = null
                            document.body.onmouseup = null
                        }
                    }
                }
            }
        }
    }
</script>