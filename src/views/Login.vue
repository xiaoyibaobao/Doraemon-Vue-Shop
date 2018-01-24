<template>
    <div class="Login">
        <v-header>
            <h1 slot="title">登录</h1>
        </v-header>
        <section>
            <mt-field label='账户' placeholder="请输入账户" type='text' v-model="account" :readonly='!toggle' :disableClear='!toggle'>
            </mt-field>
            <mt-field label='密码' placeholder="请输入密码" type='password' v-model="password" :readonly='!toggle' :disableClear='!toggle'>
            </mt-field>
            <p class="tip">Tip : 账号密码随便输</p>
            <mt-button plain size='large' @click='login' v-if="toggle">
                登录
            </mt-button>
            <mt-button plain size='large' @click='logout' v-else>退出登录</mt-button>
        </section>
    </div>
</template>

<script>
import Header from '../common/_header.vue'
import { Toast } from 'mint-ui'
export default {
    components: {
        'v-header': Header
    },
    data() {
        return {
            account: '',
            password: '',
            toggle: !this.$store.state.login.token
        }
    },
    methods: {
        login() {
            // console.log(123)
            if (this.account !== '' && this.password !== '') {
                Toast('登录成功');
                this.toggle = false;
                this.$store.commit('CHANGE_TOKEN', 1)
            } else {
                Toast('账户密码不能空')
            }
            setTimeout(() => {
                this.$router.replace({
                    path: 'user'
                })
            }, 1000);
        },
        logout() {
            Toast('退出登录成功,清除token');
            this.$store.commit('CHANGE_TOKEN', 0);
            this.toggle = true;
            this.account = '';
            this.password = '';

        }
    }
}
</script>

<style lang="scss" scoped>
.tip {
    padding: 6vw 3vw;
    color: rgb(224, 145, 71);
    letter-spacing: 2px;
    font-size: 16px;
}
</style>

