<template>
<div>
    <h2 class="big-heading">Title</h2>
<div class="form" style="width:800px;">
	<form>
		<div class="form-group">
			<div class="col-md-8">
				<!-- Using the custom fruititem-image Component, render the Fruit Item Image into an anchor that targets the detail page 
                by passing the appropriate model properties into the directive's required bindings. -->
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-8">
				<label class="control-label">ID</label>
				<!--This is an example of one way binding: {{binding expression}}-->
				<input required type="text" class="bento-input form-control" v-model="currentFruitItem.id" readonly name="id">
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-8">
				<label class="control-label">Common Name</label>
				<input required type="text" class="bento-input form-control" v-model="currentFruitItem.common_name" name="common_name">
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-8">
				<label class="control-label">Fruit Species</label>
                	<!-- This is an example of two-way binding: v-model="binding expression" -->
				<input required type="text" class="bento-input form-control" v-model="currentFruitItem.species" name="species">
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-8">
				<label class="control-label">Fruit Region</label>
				<input required type="text" class="bento-input form-control" v-model="currentFruitItem.region" name="region">
			</div>
		</div>

	</form>
</div>

</div>
</template>
<script lang="ts">
import Vue from 'vue';
import  { fruitService} from '../fruit.service';
import { Component, Emit, Prop, Watch } from 'vue-property-decorator';
@Component({})
export default class FruitDetail extends Vue {
	fruitsList: any;
	@Prop() 
	currentFruitItem: {} | undefined;
created() {
	this.fruitsList = fruitService.getFruits().fruit;
	let self = this;
	this.currentFruitItem = this.fruitsList.find((element: any) => {
    return parseInt(self.$route.params.id) === element.id
  });
}
}
</script>
