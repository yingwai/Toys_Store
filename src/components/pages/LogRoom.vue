<template>
    <div class="log_room">
        <div v-if="lLog">
            <h2>Вход в кабинет</h2>
            <FormLog @clickReg="fClickReg" @clickRes="fClickRes" />
        </div>
        <div v-if="lReg">
            <h2>Регистрация</h2>
            <FormReg @clickLog="fClickLog" />
        </div>
        <div v-if="lEmail">
            <h2>Вход в кабинет</h2>
            <FormRes @clickLog="fClickLog" />
        </div>
    </div>
</template>

<script>
import FormLog from '@/components/FormLog.vue'
import FormReg from '@/components/FormReg.vue'
import FormRes from '@/components/FormRes.vue'

    export default {
        components: {
            FormLog,
            FormReg,
            FormRes,
        },
        data() {
            return {
                lLog: true,
                lReg: false,
                lEmail: false
            }
        },
        methods: {
            fClickLog() {
                this.lLog = true
                this.lReg = false
                this.lEmail = false
            },
            fClickReg() {
                this.lLog = false
                this.lReg = true
                this.lEmail = false
            },
            fClickRes() {
                this.lLog = false
                this.lReg = false
                this.lEmail = true
            },
        }
    }
</script>

<style lang="scss" scoped>
.log_room {
    margin: 30px 150px;

    h2 {
        font-size: 42px;
    }
}
</style>