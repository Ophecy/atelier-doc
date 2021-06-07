<template>
	<main class="w-9/12 self-center flex justify-center">
		<div class="form w-1/2">
			<form class="w-full flex flex-col" @submit.prevent="handleSubmit">
				<input ref="lastname" 
					v-model="lastname"
					type="text"
					placeholder="Nom"
					class=" mt-2 self-center block px-3 py-2 w-9/12 box-border border-solid border-0 border-b border-primary text-black; "/>
				<input ref="firstname"
					v-model="firstname"
					type="text"
					placeholder="Prenom"
					class=" mt-2 self-center block px-3 py-2 w-9/12 box-border border-solid border-0 border-b border-primary text-black; " />
				<button
					role="button"
					class="self-center mt-2 py-1 bg-primary rounded-lg w-40"
				>
					Créer utilisateur
				</button>
			</form>
		</div>
	</main>
</template>

<script>

export default {
	data() {
		return {
			lastname:'',
			firstname:''
		}
	},
	methods: {
		createClient(fn, ln) {
			console.log(this.lastname, this.firstname);
			fetch("http://localhost:5000/clients", {
				method: "POST",
				body: JSON.stringify({
						firstname: fn,
						lastname: ln,
						admin:false,
						factures:[]
				}),
				headers: {
						"Content-type": "application/json; charset=UTF-8"
				}
			}).catch(e => console.log(e))

		},
		handleSubmit(){
			this.createClient(this.firstname, this.lastname)
		}
	}
	

}
</script>

<style>

</style>