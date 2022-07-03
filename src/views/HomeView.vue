<style lang="scss" scoped>
    html,
    body {
        width: 100%;
    }

    .body {
        width: 60%;
        height: 300px;
        margin: 0 auto;

        #img {
            background: url('/public/-99211771_p0.jpg');
            background-position: center;
            height: 300px;
            width: 60%;
            background-size: cover;
            position: absolute;

            .left {
                width: 240px;
                height: 160px;
                background-color: blueviolet;
                position: absolute;
                bottom: 0px;
                background: url('/public/62日目,ゼロツー-99142922_p0.jpg');
                background-position: center;
                background-size: cover;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .xytit {
                    font-size: 18px;
                    color: rgb(19, 3, 250);

                    span {
                        color: orangered;
                    }
                }

                .tips {
                    font-size: 16px;
                    color: rgb(42, 2, 62);
                }
            }

            .chtit {
                cursor: default;
                position: absolute;
                right: 0;
                top: 140px;
                font-size: 22px;
                font-family: '华文彩云';
                color: #fff;
            }

            .right {
                position: absolute;
                width: 580px;
                font-size: 14px;
                right: 0px;
                bottom: 0px;
                color: #fff;
                display: flex;
                flex-direction: column;

                .xytitle {
                    margin: 8px auto;
                }

                .xytab {
                    ul {
                        display: flex;
                        height: 50px;
                        justify-content: center;
                        align-items: flex-end;

                        li {
                            cursor: pointer;
                            height: 40px;
                            line-height: 40px;
                            font-size: 20px;
                            margin-left: 5px;
                            padding: 0 20px;
                            background-color: rgba(222, 184, 135, 0.5);
                            text-align: center;
                            border-top-left-radius: 20px;
                            border-top-right-radius: 20px;
                        }

                        .active {
                            border-top: 5px solid rgb(255, 2, 95);
                            background-color: rgba(222, 184, 135);
                        }
                    }

                    .findmine {
                        width: 200px;
                        height: 80px;
                        background-color: #ccffff;
                        position: absolute;
                        bottom: -30px;
                        color: #000;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                        padding: 0 20px;
                        box-sizing: border-box;

                        p {
                            display: flex;

                            span {
                                width: 30%;
                            }

                            input {
                                width: 70%
                            }
                        }

                        button {
                            width: 80px;
                            height: 24px;
                            background-color: #b7e234;
                            outline: none;
                            border: none;
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="home">
        <div class="body">
            <div id="img">
                <div class="left">
                    <p class="xytit">表白墙已有&emsp;<span>99999</span>&emsp;条留言</p>
                    <p class="tips">本表白墙将永久保存您的祝福和愿望，赶紧来贴上祝福吧</p>
                </div>
                <div class="chtit">
                    <h1>遇见彩虹！收获美好！</h1>
                </div>
                <div class="right">
                    <div class="xytab">
                        <ul>
                            <li @click="toConfession" :class="{active:active==0}">我要表白</li>
                            <li @click="toindex" :class="{active:active==1}">表白墙首页</li>
                            <li @click="findmine" :class="{active:active==2}">对我表白</li>
                            <li @click="togxh" :class="{active:active==3}">个性化表白</li>
                        </ul>
                        <div class="findmine" v-show="showflag">
                            <p>
                                <span>署名：</span>
                                <input v-model="username" type="text" placeholder="输入用户署名">
                            </p>
                            <button @click="submit">提交</button>
                        </div>
                    </div>
                    <div class="xytitle">
                        <h1>暗恋的、喜欢的、我爱的，听我对你说</h1>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
        data() {
            return {
                active: 1,
                username: '',
                showflag: false
            }
        },
        methods: {
            toConfession() {
                this.active = 0
                this.$router.push('/write')
            },
            toindex() {
                this.active = 1
                this.$router.push('/xyb')
            },
            findmine() {
                this.showflag = true
                this.active = 2
            },
            submit() {
                this.showflag = false
                this.$store.commit('findmine', this.username)
            },
            togxh() {
                this.active = 3
                this.$router.push('/introduce')
            }
        },
    }
</script>