<template>
<div class="table-responsive container-fluid">
    <table id="table_turn" class="table mB-0" > 
        <thead class="thead-dark" >
            <tr class="row table-row-head">
                <th  v-for="(colum,index) in columns" :key="index" class="table-space-word p-10" :class="colum.class" ><h5> {{colum.columname}}</h5></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in list" :key="index" class="row" >
                <td v-for="(column, indexColum) in columns" :key="indexColum" v-bind:class="column.class" >
                    <columntable :value="item[column.column]" @onDeleteItem="handlerDelete(item)" :type="column.type" :item="item" ></columntable>
                </td>               
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import Columntable from "./Columntable";

export default {
    name : 'table-klay',
    props : {
        list : {
            type : Array
        },
        columns : {
            type : Array
        },
    },
    components : {
        Columntable,
    },
    data () {
        return {

        }
    },
    created (){
    },
    computed : {
    },
    methods : {
        handlerDelete(item){
            this.$emit('onDeleteItem',item);
        },
        handlerEdit(item){
            console.log(item);
        }
    }
}
</script>

<style scoped>
.table {
  width: 100%;
}
.table-responsive {
    height: auto;
}
@media (max-width: 600px) {
    .table {
        width: 1800px
    }
}
</style>