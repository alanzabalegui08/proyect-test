<template>
    <div class="row m-0 m-lg-3">
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-0">
                    <ValidationObserver v-slot="{handleSubmit}">
                        <form @submit.prevent="handleSubmit(onSubmit)">
                            <bar-submit :title="titleBar" @cancelar="cancelar"></bar-submit>
                            <div class="row">
                                <div class="col-md-12 mT-0">
                                    <path-form ref="pathForm"></path-form>
                                </div>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import PathForm from '@/components/PathForm';
import BarSubmit from '@/components/BarSubmit';
export default {
    name : 'create',
    components : {
        PathForm,
        BarSubmit
    },
    data () {
        return {
            titleBar : 'Nueva ruta',
        }
    },
    created () {
    },
    computed : {
    },
    methods : {
        onSubmit () {
            this.$refs.pathForm.handlepPath();
            this.$router.push('/rutas');
        },
        cancelar(){
            this.$router.push('/rutas');
        }
    }
}
</script>