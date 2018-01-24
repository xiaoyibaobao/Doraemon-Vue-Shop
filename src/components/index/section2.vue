<template>
    <section class="section2">
        <div class="section2-list">
            <ul>
                <li>
                    <img src="../../imgs/a (3).png" alt="">
                    <h2 class="section2-list-title ac">
                        哆啦A梦
                    </h2>
                    <p class="section2-list-intro">
                        从小玩到大的哆啦A梦
                    </p>
                    <p class="section2-list-price">
                        ￥1
                    </p>
                </li>
                <li>
                    <img src="../../imgs/a (3).png" alt="">
                    <h2 class="section2-list-title ac">
                        哆啦A梦
                    </h2>
                    <p class="section2-list-intro">
                        从小玩到大的哆啦A梦
                    </p>
                    <p class="section2-list-price">
                        ￥2
                    </p>
                </li>
                <li>
                    <img src="../../imgs/a (3).png" alt="">
                    <h2 class="section2-list-title ac">
                        哆啦A梦
                    </h2>
                    <p class="section2-list-intro">
                        从小玩到大的哆啦A梦
                    </p>
                    <p class="section2-list-price">
                        ￥3
                    </p>
                </li>
                <li>
                    <img src="../../imgs/a (3).png" alt="">
                    <h2 class="section2-list-title ac">
                        哆啦A梦
                    </h2>
                    <p class="section2-list-intro">
                        从小玩到大的哆啦A梦
                    </p>
                    <p class="section2-list-price">
                        ￥588
                    </p>
                </li>
                <li>
                    <img src="../../imgs/a (3).png" alt="">
                    <h2 class="section2-list-title ac">
                        哆啦A梦
                    </h2>
                    <p class="section2-list-intro">
                        从小玩到大的哆啦A梦
                    </p>
                    <p class="section2-list-price">
                        ￥588
                    </p>
                </li>
                <li>
                    <img src="../../imgs/a (3).png" alt="">
                    <h2 class="section2-list-title ac">
                        哆啦A梦
                    </h2>
                    <p class="section2-list-intro">
                        从小玩到大的哆啦A梦
                    </p>
                    <p class="section2-list-price">
                        ￥588
                    </p>
                </li>
            </ul>
        </div>
        <router-link :to="{name:'详情页'}">
             <div class="banner">section2-banner</div>
        </router-link>
    </section>
</template>

<script>
// import { Lazyload } from 'mint-ui';

export default {
    props: ['section2']

}
</script>

<style lang="scss" scoped>
.section2-list {
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    ul {
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 6vw; // width: 380%;
        li {
            margin-right: 10vw;
            width: 26vw;
            img {
                display: block;
                width: 100%;
            }
        }
    }
    h2,
    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    h2 {
        padding-top: 3vw;
        color: #333;
        font-size: 18px;
    }
    p.section2-list-intro {
        padding-top: 2vw;
        font-size: 14px;
        color: rgb(150, 150, 150);
    }
    p.section2-list-price {
        color: #b4282d;
    }
}

.banner {
    display: block;
    width: 100%;
    height: 12vh;
    background-color: skyblue;
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
}
</style>

