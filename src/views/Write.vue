<style lang="scss" scoped>
    .xybox {
        width: 60%;
        margin: 0 auto;
        height: 700px;
        padding: 20px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.507);

        .box {
            border: 2px solid #dcc5f5;
            background-color: rgba(255, 255, 255, 0.55);
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
        }

        .title {
            height: 30px;
            line-height: 30px;
            margin: 0 auto;
            margin-bottom: 20px;
            width: 80%;
            text-align: center;
            color: #5a308c;
            background-color: #dcc5f5;
            font-size: 18px;
            font-weight: 700;
            border-top-right-radius: 50px;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
        }

        .dzbox {
            width: 100%;
            height: calc(100% - 40px);
            display: flex;

            .left {
                width: 55%;
                height: 100%;

                .color {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 20px auto;

                    p {
                        width: 30%;
                    }

                    ul {
                        width: 70%;
                        display: flex;

                        li {
                            border: 1px solid #000;
                            margin-left: 10px;
                            width: 30px;
                            height: 30px;
                            cursor: pointer;
                        }

                        :nth-child(1) {
                            background-color: #e8def9;
                        }

                        :nth-child(2) {
                            background-color: #f9dff9;
                        }

                        :nth-child(3) {
                            background-color: #e5fae0;
                        }

                        :nth-child(4) {
                            background-color: #f5f9df;
                        }

                        :nth-child(5) {
                            background-color: #f9c5c6;
                        }

                        :nth-child(6) {
                            background-color: #dbe6f8;
                        }

                        :nth-child(7) {
                            background-color: #fce4db;
                        }

                        :nth-child(8) {
                            background-color: #ede0fa;
                        }
                    }
                }

                .sticker {
                    display: flex;

                    p {
                        width: 30%;
                    }

                    ul {
                        width: 70%;
                        display: flex;
                        flex-wrap: wrap;

                        li {
                            float: left;
                            margin: 5px 10px;

                            img {
                                width: 40px;
                                height: 40px;
                            }
                        }
                    }
                }

                .txt {
                    margin-top: 10px;

                    textarea {
                        width: 100%;
                        height: 60px;
                    }
                }

                .username {
                    display: flex;
                    height: 30px;
                    line-height: 30px;
                    margin: 10px auto;

                    input {
                        width: 260px;
                    }
                }

                .code {
                    display: flex;
                    height: 30px;
                    line-height: 30px;
                    margin: 10px auto;

                    button {
                        width: 80px;
                    }
                }

                .btn {
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    margin: 10px auto;
                    text-align: center;

                    button {
                        height: 30px;
                        width: 160px;
                        color: #fff;
                        background-color: #8dbd3f;
                        border-top-right-radius: 50px;
                        border-bottom-right-radius: 50px;
                        border-top-left-radius: 50px;
                        border-bottom-left-radius: 50px;
                        border: none;
                    }
                }
            }

            .right {
                width: 45%;
                padding: 20px;

                p {
                    margin: 0 auto;
                    text-align: center;
                }

                .style {
                    width: 80%;
                    height: 200px;
                    margin: 0 auto;
                    background-color: #e8def9;
                    padding: 15px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .time {
                        width: 100%;
                        height: 30px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 14px;
                    }

                    .content {
                        font-size: 14px;

                        p {
                            word-wrap: break-word;
                        }
                    }

                    .useinfo {
                        width: 100%;
                        height: 30px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 14px;

                        img {
                            width: 30px;
                            height: 30px;
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="xybox">
        <div class="box">
            <div class="title">
                我要贴表白纸条
            </div>
            <div class="dzbox">
                <div class="left">
                    <!-- 选择颜色 -->
                    <div class="color">
                        <p>请选择纸条颜色：</p>
                        <ul>
                            <li @click="getcolor('#e8def9')"></li>
                            <li @click="getcolor('#f9dff9')"></li>
                            <li @click="getcolor('#e5fae0')"></li>
                            <li @click="getcolor('#f5f9df')"></li>
                            <li @click="getcolor('#f9c5c6')"></li>
                            <li @click="getcolor('#dbe6f8')"></li>
                            <li @click="getcolor('#fce4db')"></li>
                            <li @click="getcolor('#ede0fa')"></li>
                        </ul>
                    </div>
                    <!-- 选择贴纸 -->
                    <div class="sticker">
                        <p>请选择贴纸图案：</p>
                        <ul>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                            <li>
                                <img src="002-96982623_p0.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <!-- 留言文本 -->
                    <div class="txt">
                        输入你的表白纸条内容(还能输入{{wordnum}}个字)
                        <textarea v-model="content" maxlength="120"></textarea>
                    </div>
                    <!-- 留言者署名 -->
                    <div class="username">
                        <p>您的署名：</p>
                        <input type="text" v-model="username">
                    </div>
                    <!-- 验证码 -->
                    <div class="code">
                        <p>验证码：</p>
                        <input type="text" v-model="qcode">
                        <button @click="getcode">{{code}}</button>
                    </div>
                    <div class="btn">
                        <button @click="Submit">好了，我要贴上去</button>
                    </div>
                </div>
                <div class="right">
                    <p>纸条效果预览：</p>
                    <div class="style" :style="{backgroundColor:cardcolor}">
                        <p class="time">
                            <span>第{{$store.state.lylist.length}}条</span>
                            <span>{{new Date().toLocaleString()}}</span>
                        </p>
                        <div class="content">
                            <p>{{content}}</p>
                        </div>
                        <p class="useinfo">
                            <img src="002-96982623_p0.png" alt="">
                            <span>{{username}}</span>
                        </p>
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
                cardcolor: '',
                content: '',
                username: '',
                code: '',
                qcode: ''
            }
        },
        computed: {
            wordnum() {
                let num = 120
                return num - this.content.length
            }
        },
        methods: {
            getcolor(str) {
                this.cardcolor = str
            },
            getcode() {
                let ycode = Math.random().toString(16)
                let code = ycode.slice(2, 6)
                this.code = code
            },
            Submit() {
                if (this.qcode == '') {
                    alert("请输入验证码")
                    return
                }
                if (this.qcode != this.code) {
                    alert('验证码错误')
                    return
                }
                //随机小于400的数字
                let left = Math.floor(Math.random() * 500)
                let top = Math.floor(Math.random() * 400)
                let obj = {
                    content: this.content,
                    cardcolor: this.cardcolor,
                    username: this.username,
                    left: left,
                    top: top
                }
                this.$store.commit('addlist', obj)
                this.content = ''
                this.cardcolor = ''
                this.username = ''
            }
        },
        created() {
            let ycode = Math.random().toString(16)
            let code = ycode.slice(2, 6)
            this.code = code
        }
    }
</script>