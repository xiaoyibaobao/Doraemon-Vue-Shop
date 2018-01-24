<template>
    <section class="section4">
        <h2 class="section4-title">
            section4
            <i class="icon-right"></i>
        </h2>

        <ul class="section4-list">
            <li>
                <router-link :to="{ name: '详情页'}">
                    <img src="../../imgs/a (3).png" alt="">
                    <p>无敌帅气蓝胖子</p>
                </router-link>
                <h3>哆啦A梦</h3>
                <span>20</span>
            </li>
            <li>
                <router-link :to="{ name: '详情页'}">
                    <img src="../../imgs/a (3).png" alt="">
                    <p>无敌帅气蓝胖子</p>
                </router-link>
                <h3>哆啦A梦</h3>
                <span>20</span>
            </li>
            <li>
                <router-link :to="{ name: '详情页'}">
                    <img src="../../imgs/a (3).png" alt="">
                    <p>无敌帅气蓝胖子</p>
                </router-link>
                <h3>哆啦A梦</h3>
                <span>20</span>
            </li>
            <li>
                <router-link :to="{ name: '详情页'}">
                    <img src="../../imgs/a (3).png" alt="">
                    <p>无敌帅气蓝胖子</p>
                </router-link>
                <h3>哆啦A梦</h3>
                <span>20</span>
            </li>
        </ul>
          <router-link :to="{name:'分类页'}">
             <div class="banner">section3-banner</div>
        </router-link>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../assets/index/style.css';
.section4 {
    width: 100%;
    overflow: hidden;
    h2 {
        text-align: center;
        background-color: #ffffff;
        font-size: 18px;
        padding: 4vw 0;
        position: relative;
        i {
            position: absolute;
            right: 6vw;
            top: 32%;
            font-size: 18px;
            &::before {
                color: #9f9f9f;
            }
        }
    }
    .section4-list {
        width: 100%;
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        overflow: hidden;
        li {
            width: 50%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0 3vw;
            a {
                display: block;
                width: 100%;
                position: relative;
                img {
                    display: block;
                    width: 100%;
                }
                p {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background-color: yellowgreen;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    padding: 1.2vw 2vw;
                }
            }
            h3 {
                padding-top: 3vw;
                font-size: 16px;
            }
            span {
                display: inline-block;
                padding-bottom: 3vw;
                color: #b4282d;
            }
        }
    }
    .banner {
    display: block;
    width: 100%;
    height: 12vh;
    margin-top: 5vh;
    background-color: hotpink;
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
}
}
</style>

