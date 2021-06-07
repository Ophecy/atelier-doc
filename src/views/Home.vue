<template>
	<main class="w-9/12 self-center flex justify-center">
		<div class="form w-1/2">
			<form class="w-full flex flex-col" @submit.prevent="handleSubmit">
				<input ref="username" 
					v-model="username"
					type="text"
					placeholder="Nom d'utilisateur"
					class=" mt-2 self-center block px-3 py-2 w-9/12 box-border border-solid border-0 border-b border-primary text-black; "/>
				<input ref="password"
					type="password"
					placeholder="Mot de passe"
					class=" mt-2 self-center block px-3 py-2 w-9/12 box-border border-solid border-0 border-b border-primary text-black; " />
				<button
					role="button"
					class="self-center mt-2 py-1 bg-primary rounded-lg w-40"
					@click="saveName"
				>
					Se connecter
				</button>
			</form>
		</div>
	</main>
	
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore()

const user = computed(() => {
	return this.$store.state.user
})

let username = ''

export default {
	data() {
		return {
			username,
			user
		}
	},
	methods: {
		saveName() {
		this.$store.dispatch('saveName', username.value)
		this.$router.push('users')
		}
	}
}
</script>