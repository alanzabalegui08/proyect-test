<template>
    <div class="row m-0">
        <div class="col">
            <h2 class="title-klay" >Banners</h2>
        </div>
        <div class="col text-right align-self-center">
            <router-link to="/banners/nuevo" class="btn cur-p btn-outline-primary ">Nuevo</router-link>
        </div>
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-0 bd">
                <div class="mT-0">
                    <div class="row">
                        <div class="col-md-12">
                            <table-klay :list="banners" :columns="dataHeader" @onDeleteItem="onDeleteItem" ></table-klay>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import $ from 'jquery';
import TableKlay from '@/components/Table';
import DataHeader from '@/util/tablehead.js';
import { alerts } from '@/util/alerts';

export default {
    name : 'data',
    mixins : [ alerts ],
    components : {
        TableKlay,
    },
    data () {
        return {
            name : 'banner',
            dataHeader : []
        }
    },
    created (){
        this.dataHeader = DataHeader.banner;
    },
    computed : {
        ...mapGetters({
            banners: 'banner/getBanners'
        })
    },
    methods : {
        ...mapActions({
            'remove' : 'banner/removeBanner'
        }),

        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        },

        onDeleteItem(item){
            this.deleteResource(this.name).then(
                (result) => {
                    if(result){
                        this.remove(item);
                    }
                }
            );
        }
    }
}
</script>