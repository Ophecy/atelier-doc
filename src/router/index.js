import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Users from '/src/views/Users.vue'
import Clients from '/src/views/Clients.vue'
import CreateClient from '/src/views/CreateClient.vue'
import CreateUser from '/src/views/CreateUser.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/users',
		name: 'Users',
		component: Users
	},
	{
		path: '/clients',
		name: 'Clients',
		component: Clients
	},
	{
		path: '/create-client',
		name: 'Create-Client',
		component: CreateClient
	},
	{
		path: '/create-user',
		name: 'Create-User',
		component: CreateUser
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router