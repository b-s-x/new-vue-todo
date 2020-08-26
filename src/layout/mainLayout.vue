<template>
    <span class="linkDecor">
        <router-link to="/home" class="linkHome">Home</router-link>
        <router-link to="/list" class="linkList">List</router-link>
    </span>
</template>

<style lang="scss" scoped>

	.linkDecor {
		font-size: 42px;
		margin: 10px;
		padding: 10px;
		display: flex;
	}

	.linkList,
	.linkHome {
		padding: 20px;
		margin: auto;
		color: black;
	}

@media screen and (max-width: 550px) {
	
	.linkDecor {
		margin-left: 50px;
		min-width: 420px;
	}

	.linkList,
	.linkHome {
		padding: 20px;
	}

	.linkList {
		margin-left: 70px;
	}
}
</style>
