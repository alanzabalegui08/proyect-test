<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row">
                        <div class="col-7">
                            <h2 class="title-klay">Comentarios </h2>
                        </div>
                        <div class="col-5 text-right align-self-center">
                            <button type="button"
                                class="btn cur-p btn-outline-primary ">Generar</button>
                        </div>
                    </div>
                    <div class="bgc-white bd">
                        <div class="mT-0">
                        <div class="col-md-12">
                            <div class="row m-10">
                                <div class="col-sm-6 col-lg-3 d-flex p-0">
                                    <h5>Periodo del: </h5>                                
                                    <div class="form-group col text-center">
                                        <date-picker class="" name="date" v-model="date" :config="options">
                                        </date-picker>
                                    </div>                                    
                                </div>
                                <div class="col-sm-6 col-lg-3 d-flex p-0">
                                        <h5>al</h5>
                                    <div class="form-group col text-center">
                                        <date-picker class="" name="date" v-model="date" :config="options">
                                        </date-picker>
                                    </div>                                    
                                </div>
                                <div class="col-sm-6 col-lg-3 d-flex p-0">
                                        <h5>Categoría</h5>
                                    <div class="form-group col text-center">
                                        <select class="form-control " id="">
                                            <option>Seleccionar categoría</option>
                                        </select>
                                    </div>                                    
                                </div>
                                <div class="col-sm-6 col-lg-3 d-flex p-0">
                                    <h5>Sub categoría </h5>
                                    <div class="form-group col text-center">
                                        <select class="form-control " id="">
                                            <option>Seleccionar sub categoría</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3 d-flex p-0">
                                    <h5>Unidad: </h5>                                
                                    <div class="form-group col text-center">
                                        <select class="form-control " id="">
                                            <option>Seleccionar unidad</option>
                                        </select>
                                    </div>                                 
                                </div>
                                <div class="col-sm-6 col-lg-3 d-flex p-0">
                                    <h5>Operador: </h5>                                
                                    <div class="form-group col text-center">
                                        <select class="form-control " id="">
                                            <option>Seleccionar operador</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3 d-flex p-0">
                                    <h5>Turno: </h5>                                
                                    <div class="form-group col text-center">
                                        <select class="form-control " id="">
                                            <option>Seleccionar turno</option>
                                        </select>
                                    </div>                                
                                </div>
                                <div class="col-sm-6 col-lg-3 d-flex p-0">
                                    <h5>Cliente: </h5>                                
                                    <div class="form-group col text-center">
                                        <select class="form-control " id="">
                                            <option>Seleccionar cliente</option>
                                        </select>
                                    </div>                                  
                                </div>
                            </div>
                            <div class="row m-10 ">
                            </div>
                            <div class="row m-0">
                                <table-klay :list="datasource" :columns="gridHeader"></table-klay>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>

import $ from 'jquery';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import TableKlay from '@/components/Table';
import DataGrid from '@/util/tablehead.js';

export default {
    name : 'comments',
    components : {
        Sidebar,
        Navbar,
        datePicker,
        TableKlay
    },
    data () {
        return {
            datasource : [],
            date: new Date(),
            options: {
                format: 'DD/MM/YYYY h:mm:ss',
                useCurrent: false,
                showClear: true,
                showClose: true,
                locale : 'es-es'
            }
        }
    },
    created (){
        this.gridHeader = DataGrid.comments;
    },
    computed : {
    },
    methods : {
        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        }
    }
}
</script>

 