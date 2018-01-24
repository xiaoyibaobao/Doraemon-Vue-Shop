<template>
    <section class="section3">
        <ul class="section3-list">
            <li>
                <div class="section3-list-left">
                    <h4>Martinez</h4>
                    <div class="time">
                        <span class="time-num">{{dom.num1||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{dom.num2||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{dom.num3||'00'}}</span>
                    </div>
                    <p class="start"> start at 06:40</p>
                </div>
                <router-link :to="{name:'分类页'}" class="section3-list-right">
                    <img src="../../imgs/a (3).png" alt="">
                    <span>$1</span>
                </router-link>
            </li>
            <li>
                <div class="section3-list-left">
                    <h4>Martinez</h4>
                    <div class="time">
                        <span class="time-num">{{dom.num1||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{dom.num2||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{dom.num3||'00'}}</span>
                    </div>
                    <p class="start"> start at 06:40</p>
                </div>
                <router-link :to="{name:'分类页'}" class="section3-list-right">
                    <img src="../../imgs/a (3).png" alt="">
                    <span>$500</span>
                </router-link>
            </li>
            <li>
                <div class="section3-list-left">
                    <h4>Martinez</h4>
                    <div class="time">
                        <span class="time-num">{{dom.num1||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{dom.num2||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{dom.num3||'00'}}</span>
                    </div>
                    <p class="start"> start at 06:40</p>
                </div>
                <router-link :to="{name:'分类页'}" class="section3-list-right">
                    <img src="../../imgs/a (3).png" alt="">
                    <span>$1</span>
                </router-link>
            </li>
            <li>
                <div class="section3-list-left">
                    <h4>Martinez</h4>
                    <div class="time">
                        <span class="time-num">{{dom.num1||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{dom.num2||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{dom.num3||'00'}}</span>
                    </div>
                    <p class="start"> start at 06:40</p>
                </div>
                <router-link :to="{name:'分类页'}" class="section3-list-right">
                    <img src="../../imgs/a (3).png" alt="">
                    <span>$500</span>
                </router-link>
            </li>
        </ul>
         <router-link :to="{name:'分类页'}">
             <div class="banner">section3-banner</div>
        </router-link>
    </section>
</template>

<script>
export default {
    data() {
        return {
            section3: '',
            dom: [{
                num1: '01',
                num2: '02',
                num3: '03'
            }, {
                num1: '01',
                num2: '',
                num3: ''
            }, {
                num1: '01',
                num2: '',
                num3: ''
            }, {
                num1: '',
                num2: '02',
                num3: ''
            }]
        }
    }
   
}
</script>

<style lang="scss" scoped>
@import '../../assets/index/style.css';

.section3 {
    width: 100%;
    .section3-list {
        width: 100%;
        li {
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 0vw 5vw 0vw 12vw;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 100%;
            .section3-list-left {
                padding-top: 10vw;
                width: 50%;
                h4 {
                    line-height: 4.8vw;
                    margin-bottom: 3.2vw;
                    letter-spacing: 0.42vw;
                    font-size: 16px;
                }
                .time {
                    .time-num {
                        display: inline-block;
                        text-align: center;
                        padding: 1.6vw;
                        color: #fff;
                        border-radius: 0.5vw;
                        background-color: #444;
                        letter-spacing: 0.3vw;
                        font-size: 16px;
                    }
                    .time-col {
                        color: #333;
                        width: 2vw;
                        display: inline-block;
                        text-align: center;
                        font-weight: 700;
                        font-size: 20px;
                    }
                }
                .start {
                    padding-top: 4vw;
                    letter-spacing: 0.3vw;
                    font-size: 16px;
                }
            }
            .section3-list-right {
                width: 40%;
                display: block;
                padding-top: 10vw;
                position: relative;
                img {
                    display: block;
                    width: 100%;
                    background-color: gold;
                }
                span {
                    padding: .3vw 1.2vw;
                    border-radius: 1vw;
                    text-align: center;
                    position: absolute;
                    bottom: .4vw;
                    right: .2vw;
                    color: #fff;
                    background-color: red;
                }
            }
        }
    }
}
.banner {
    display: block;
    width: 100%;
    height: 12vh;
    margin-top: 5vh;
    background-color: gold;
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
}
</style>
