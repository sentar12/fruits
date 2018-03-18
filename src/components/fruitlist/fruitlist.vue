<template>
<div>
<wj-flex-grid
  :items-source="fruits"
  :format-item="formatCountry"
   :selection-changed ="loadDetail"
   style="height: 500px;margin-top:10px">
  <wj-flex-grid-column binding="common_name" header="Name" format="c0"></wj-flex-grid-column>
  <wj-flex-grid-column binding="species" header="Species" format="c0"></wj-flex-grid-column>
  <wj-flex-grid-column binding="region" header="Region"></wj-flex-grid-column>
  <wj-flex-grid-column header="Image" style="width:100px;height:100px;" binding="ImageURL"></wj-flex-grid-column>
</wj-flex-grid>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
import  { fruitService} from '../fruit.service';
import FruitDetail from '../fruitdetail/fruitdetail.vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import  * as wj from "wijmo/wijmo";
import  *  as wjGrid from "wijmo/wijmo.grid";
import 'wijmo/wijmo.vue2.grid';
@Component({
     components: { FruitDetail }
})
export default class FruitList extends Vue { 
  fruits: any;
created(){
    this.getFruits();
}
getFruits(): any {
   this.fruits = new wj.CollectionView(fruitService.getFruits().fruit);
}
formatCountry(s: any, e: any) {
            var flex = s;
            if (e.panel == flex.cells && flex.columns[e.col].binding === 'ImageURL') {
                e.cell.innerHTML = wj.format(
                    '<img src="{ImageURL}"  style="width:100px;height:100px;">',
                    flex.rows[e.row].dataItem);
            }
             if (e.panel == flex.cells && flex.columns[e.col].binding === 'common_name') {
                e.cell.innerHTML = wj.format(
                    '<a href="{URL}" target="new" style="width:100px;height:100px;">{common_name}</a>',
                    flex.rows[e.row].dataItem);
            }
        }

loadDetail (event: any) {
    let id = event.selectedItems[0].id;
    this.$router.push({ path: `/fruit/${id}`, params: {event.selectedItems[0]}});
}

}


</script>
