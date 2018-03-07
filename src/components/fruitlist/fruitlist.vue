<template>
<div>
<wj-flex-grid
  :items-source="fruits"
  :format-item="formatCountry"
   style="height: 500px;margin-top:10px">
  <wj-flex-grid-column binding="common_name" header="Name" format="c0"></wj-flex-grid-column>
  <wj-flex-grid-column binding="species" header="Species" format="c0"></wj-flex-grid-column>
  <wj-flex-grid-column binding="region" header="Region"></wj-flex-grid-column>
  <wj-flex-grid-column header="Image" style="width:100px;height:100px;" binding="ImageURL"></wj-flex-grid-column>
</wj-flex-grid>  <transition name="fade">
    <FruitDetail
      v-if="selectedHero || addingHero"
      :hero="selectedHero"
      @unselect="unselect"
      @heroChanged="heroChanged"></FruitDetail>
    </transition>

</div>
</template>
<script lang="ts">
import Vue from 'vue';
import  { fruitService} from '../fruit.service';
import { Component, Prop, Watch } from 'vue-property-decorator';
import  * as wj from "wijmo/wijmo";
import  *  as wjGrid from "wijmo/wijmo.grid";
import 'wijmo/wijmo.vue2.grid';
@Component({
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
                    '<img src="{ImageURL}">',
                    flex.rows[e.row].dataItem);
            }
             if (e.panel == flex.cells && flex.columns[e.col].binding === 'common_name') {
                e.cell.innerHTML = wj.format(
                    '<a href="{URL}" target="new" style="width:100px;height:100px;">{common_name}</a>',
                    flex.rows[e.row].dataItem);
            }
        }
}

</script>
