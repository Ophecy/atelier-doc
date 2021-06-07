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
					v-model="password"
					type="password"
					placeholder="Mot de passe"
					class=" mt-2 self-center block px-3 py-2 w-9/12 box-border border-solid border-0 border-b border-primary text-black; " />
				<button
					role="button"
					class="self-center mt-2 py-1 bg-primary rounded-lg w-40"
				>
					Se connecter
				</button>
			</form>
		</div>
	</main>
	
</template>

<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'
const store = useStore()

const username = ''
const password = ''

const user = computed(() => {
	return store.state.user
})

const newName = ref('')

const saveName = ()=>{
	store.dispatch('saveName', {name: newName.value, oauth: "token"})
	newName.value=''
}

</script>