<template>
    <div class="vue-app">
        <window :title="'Values Grid'">
            <button @click="saveGridState">Save Grid State</button>
            <grid :data-source="values" :resizable="true" :reorderable="true" :column-menu="true" ref="grid">
                <kendo-grid-column :title="'name'" :field="'name'"></kendo-grid-column>
                <kendo-grid-column :title="'value1'" :field="'value1'" ></kendo-grid-column>
                <kendo-grid-column :title="'value2'" :field="'value2'" ></kendo-grid-column>
                <kendo-grid-column :title="'value3'" :field="'value3'" ></kendo-grid-column>
            </grid>
        </window>
    </div>
</template>

<script>
import api from 'axios'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid } from '@progress/kendo-grid-vue-wrapper'
import { Window } from '@progress/kendo-window-vue-wrapper'

export default {
    name: 'values',

    components: {
        grid: Grid,
        window: Window
    },

    data() {
        return {
            values: []
        };
    },

    methods: {
        saveGridState(e) {
            e.preventDefault();

            var grid = this.$refs.grid.kendoWidget();
            localStorage["kendo-grid-options"] = kendo.stringify(grid.getOptions());
        },
        restoreGridState() {
            var options = localStorage["kendo-grid-options"];
            if (options) {

                var grid = this.$refs.grid.kendoWidget();
                grid.setOptions(JSON.parse(options));
            }
        }
    },

    created () {
        api.get('https://localhost:5001/api/values')
        .then(response => {
            this.values = response.data;
            this.$nextTick(() => this.restoreGridState());
        });
    },
}
</script>
