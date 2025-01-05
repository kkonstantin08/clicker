<script>
import InviteFriends from "./components/InviteFriends.vue";
import ModalRewardWindow from './components/ModalRewardWindow.vue';
import Main from "./components/Main.vue";
import NavBar from "./components/NavBar.vue";
import AirdropTasks from "./components/AirdropTasks.vue";
import WalletModal from "./components/WalletModal.vue";
import Rewards from "./components/Rewards.vue";

export default {
	components: {
		InviteFriends,
		ModalRewardWindow,
		Main,
		NavBar,
		AirdropTasks,
		WalletModal,
		Rewards,

	},
	data() {
		return {
			isModalRewardVisible: false,
			isModalWalletVisible: false,
			navbar: [
				{
					title: 'Votes',
					img: "src/assets/img/picker.svg",
				},
				{
					title: 'Friends',
					img: "src/assets/img/group.svg",
				},
				{
					title: 'Earn',
					img: "src/assets/img/coins.svg",
				},
				{
					title: 'Airdrop',
					img: "src/assets/img/coin.png",
				}
			],
			friends: [
				{
					name: 'Jimmy',
					img: 'src/assets/jimmy.svg',
					coins: 1000
				}
			],
			selectedIndex: 0,
		}
	},

}
</script>

<template>
	<div class="app">
		<Main v-if="selectedIndex === 0" />
		<InviteFriends v-if="selectedIndex === 1" />
		<rewards v-if="selectedIndex === 2" />
		<AirdropTasks v-if="selectedIndex === 3" @showModalWallet="showModalWallet" />
		<NavBar :navbar="navbar" :selectedIndex="selectedIndex" @update:selectedIndex="selectedIndex = $event" />
	</div>
</template>

<style>
@import url('./assets/reset.css');

:root {
	--primary-bg: linear-gradient(180deg, rgb(53, 56, 158), rgb(7, 23, 65) 98%), linear-gradient(180deg, rgb(53, 56, 158), rgb(28, 40, 72) 98%), rgb(44, 47, 53);
	--white-transparent: rgba(255, 255, 255, 0.08);
	--white-more-transparent: rgba(255, 255, 255, 0.1);
	--dark-transparent: rgba(33, 36, 41, 0.5);
}

/* *{
	outline: 4px solid green !important;
} */

body {
	font-family: "Roboto", sans-serif;
	color: white;
	background: var(--primary-bg);
	padding: 116px 24px 80px;
	/* Увеличиваем нижний padding для NavBar */
	min-height: 100vh;
	box-sizing: border-box;
}

.app {
	position: relative;
	/* min-height: 100vh; */
}
</style>