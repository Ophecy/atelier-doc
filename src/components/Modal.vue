<!-- This example requires Tailwind CSS v2.0+ -->
<template>
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
								value="ID : 1"
								class=" mt-2 self-center block px-3 py-2 w-9/12 box-border border-solid border-0 border-b border-primary text-black text-gray-400"/>
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
							v-if="type='client'"
							@click="updateClient"
								role="button"
								class="self-center mt-2 py-1 bg-primary rounded-lg w-40"
							>
								Éditer client
							</button>
							<button
								v-if="type=='user'"
								@click="updateUser"
								role="button"
								class="self-center mt-2 py-1 bg-primary rounded-lg w-40"
							>
								Éditer utilisateur
							</button>
						</form>
					</div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
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
	data(){
		return {
			firstname,
			lastname,
			id: person.id
		}
	},
  setup() {
    const open = ref(true)

    return {
      open,
    }
  },
	methods:{
		updateClient() {
			fetch("http://localhost:5000/clients", {
				method: "POST",
				body: JSON.stringify({
					id:person.id,
					firstname,
					lastname,
				}),
				headers: {
						"Content-type": "application/json; charset=UTF-8"
				}
			}).catch(e => console.log(e))

		},
	}
}
</script>