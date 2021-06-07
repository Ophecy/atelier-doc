<template>
	<main class="w-8/12 self-center">
	<div>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="open = false" :open="open">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
						<form class="w-full flex flex-col p-4 pt-5" @submit.prevent="handleSubmit">
							<h1 class="self-center pb-2">Editer utilisateur</h1>
							<input disabled ref="id" 
								type="text"
								:value="'ID: ' + editingClient.id"
								class=" mt-2 self-center block px-3 py-2 w-9/12 box-border border-solid border-0 border-b border-primary text-gray-400"/>
							<input ref="lastname" 
								v-model="editingClient.lastname"
								type="text"
								placeholder="Nom"
								class=" mt-2 self-center block px-3 py-2 w-9/12 box-border border-solid border-0 border-b border-primary text-black; "/>
							<input ref="firstname"
								v-model="editingClient.firstname"
								type="text"
								placeholder="Prenom"
								class=" mt-2 self-center block px-3 py-2 w-9/12 box-border border-solid border-0 border-b border-primary text-black; " />
							<button
							@click="updateClient"
								role="button"
								class="self-center mt-2 py-1 bg-primary rounded-lg w-40"
							>
								Éditer client
							</button>
						</form>
					</div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>	</div>
		<div class="search">
			<input type="text" class="search" ref="user-search" />
			<div
				class="
					block
					px-3
					py-2
					w-auto
					box-border
					border-solid border-0 border-b border-primary
					text-primary
				"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
		</div>
		<div class="list mt-4 flex flex-wrap justify-around">
			<div v-for="client in clients" :key="client.id" class="user-item bg-light border border-primary rounded-3xl w-2/5 m-4" >
				<div class="flex flex-row">
					<div class="user-icon">
						<img
							src="http://placeimg.com/480/480/animals"
							alt="Illustration Utilisateur"
							class="user-image"
						/>
					</div>
					<div class="self-center p-2 m-2 mr-0 uppercase font-bold">
						{{client.lastname}}
					</div>
					<div class="self-center p-2 m-2 ml-0">{{client.firstname}}</div>
				</div>
				<div class="flex flex-row ml-20">
					<h1 class="ml-2">Factures: </h1>
					<ul class="ml-2">
						<li v-for="facture in client.factures" :key="facture">
							<a href="facture" target="_blank" class="hover:underline" style="text-decoration-color: rgba(120, 166, 181, 1)">{{facture}}</a>
							</li>
					</ul>
				</div>
				<div class="flex flex-row justify-center">
					<button role="button" class="bg-primary py-2 px-4 m-2 rounded-full" @click="editClient(client.id)">
						Éditer
					</button>
					<button role="button" class="bg-red-700 py-2 px-4 m-2 rounded-full" @click="deleteClient(client.id)">
						Supprimer
					</button>
				</div>
			</div>
		</div>
	</main>
</template>



<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  components: {
		Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
 	},
	data() {
		return {
			clients:[],
			editingClient: {
				id: 0,
				firstname: "",
				lastname: "",
				factures:[]
			}
		}
	},
	setup() {
    const open = ref(false)

    return {
      open,
    }
  },

	mounted() {
		;
		fetch('http://localhost:1234/clients').then(r => r.json()).then(d => this.clients = d).catch(console.log())
	},
		methods: {
		deleteClient(id) {
			fetch("http://localhost:1234/clients/"+id, {
				method: "DELETE",
				headers: {
						"Content-type": "application/json; charset=UTF-8"
				}
			}).then(()=>{
				this.fetchClients()
			})
			.catch(e => console.log(e))
		},
		editClient(id) {
			fetch("http://localhost:1234/clients/"+id, {
				method: "GET",
				headers: {
						"Content-type": "application/json; charset=UTF-8"
				}
			})
			.then(r=>r.json())
			.then(d => this.editingClient = d)
			.then(()=>this.open = true)
			.catch(e => console.log(e))
		},
		updateClient(){
			fetch("http://localhost:1234/clients/"+this.editingClient.id, {
				method: "PUT",
				body: JSON.stringify({
						firstname: this.editingClient.firstname,
						lastname: this.editingClient.lastname,
						admin:this.editingClient.admin
				}),
				headers: {
						"Content-type": "application/json; charset=UTF-8"
				}
			})
			.then(()=>{
				this.open=false
				this.fetchClients()
			})
			.catch(e => console.log(e))
		},
		fetchClients(){
			fetch('http://localhost:1234/clients').then(r => r.json()).then(d => this.clients = d).catch(console.log())
		},
		closeModal(){
			this.modalShown = false
		},
		openModal(){
			this.modalShown = true
		}
	}
}

</script>
