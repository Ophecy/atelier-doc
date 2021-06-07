<template>
	<header class="w-full bg-primary mb-4">
		<nav class="flex w-full justify-between">
			<ul class="self-start flex flex-row">
				<li class="nav-item">
					<router-link to="/">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link to="users">Gestion utilisateurs</router-link>
				</li>
				<li class="nav-item">
					<router-link to="clients">Gestion clients</router-link>
				</li>
				<li class="nav-item">
					<router-link to="create-user">Création utilisateur</router-link>
				</li>
				<li class="nav-item">
					<router-link to="create-client">Création client</router-link>
				</li>
			</ul>
			<button class="user-icon p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class=""
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
			</button>
		</nav>
	</header>
</template>
