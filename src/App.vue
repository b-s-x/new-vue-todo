<template>
	<div id="app">
		<component :is="layout + '-layout'"> 
		
		</component>
		<router-view/>

	</div>
</template>

<script>

import MainLayout from '@/layout/mainLayout'
import EmptyLayout from '@/layout/emptyLayout'

export default {
	components: {
		MainLayout,
		EmptyLayout
	},
	computed: {
		layout() {
			return (this.$route.meta.layout || 'empty')
		}
	}
}

</script>
