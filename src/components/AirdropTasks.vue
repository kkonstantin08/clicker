<template>
	<div class="airdrop-tasks">
		<div class="coin">
			<img src="@/assets/img/airdrop/big-coin.png" alt="Big Coin">
		</div>

		<div class="tasks">
			<h1>Airdrop tasks</h1>
			<p>Listing is on its way. Tasks will appear below. Complete the tasks to participate in the Airdrop.</p>
		</div>

		<h4>Tasks list</h4>

		<div class="connect" @click="openWalletModal">
			<div class="wallet">
				<img src="@/assets/img/airdrop/wallet.png" alt="Wallet">
				<p>Connect your wallet</p>
			</div>
			<img src="@/assets/img/airdrop/blue-next.png" alt="Next">
		</div>
	</div>

	<wallet-modal v-if="isWalletModalOpen" @close="isWalletModalOpen = false"></wallet-modal>
</template>

<script>
import WalletModal from './WalletModal.vue';
export default {
	name: 'AirdropTasks',
	emits: ['showModalWallet'],
	components: {
		WalletModal
	},
	data() {
		return {
			isWalletModalOpen: false,
		}
	},
	methods: {
		openWalletModal(task) {
			this.isWalletModalOpen = true;
		}
	}
}
</script>

<style scoped>
.airdrop-tasks {
	font-family: 'Roboto', sans-serif;
	color: white;
	/* padding: 116px 24px 80px; */
	/* min-height: 100vh; */
	/* box-sizing: border-box; */
	/* background: linear-gradient(180deg, #35389e, #071741 98%), #2c2f35; */
}

.coin {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 0 80px;
}

.tasks {
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: 24px;
}

.tasks h1 {
	font-size: 32px;
}

.tasks p {
	font-size: 14px;
	font-weight: 400;
	line-height: 110%;
	letter-spacing: -0.02em;
}

h4 {
	margin-bottom: 16px;
}

.connect {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 21px;
	border-radius: 16px;
	background-color: #ffffff;
	color: #2c39b9;
	transition: background-color 0.3s ease;
}

.connect:active {
	background-color: #e0dfdf;
}

.wallet {
	display: flex;
	align-items: center;
	gap: 15px;
}
</style>