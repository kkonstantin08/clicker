<template>
	<div class="modal-overlay" @click.self="$emit('close')">
		<div class="modal-content">
			<button class="close-button" @click="$emit('close')">✕</button>
			<img :src="task.img" :class="task.imgmodal_class" alt="YouTube Icon">
			<h1>{{ task.title }}</h1>
			<p class="description">{{ task.description }}</p>
			<div class="reward-wrapper">
				<img src="../assets/img/coin.png" class="coin-icon" alt="Coin Icon">
				<p>+{{ task.coins }}</p>
			</div>
			<button class="action-button">
				<p>{{ task.btn_description }}</p>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalRewardWindow',
	emits: ['close'],
	props: {
		task: Object
	}
}
</script>

<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: flex-end;
	z-index: 1000;
}

.modal-content {
	background: var(--primary-bg);
	border-radius: 50px 50px 0 0;
	padding: 84px 24px 28px;
	width: 100%;
	max-height: 90vh;
	overflow-y: auto;
	animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
	from {
		transform: translateY(100%);
	}

	to {
		transform: translateY(0);
	}
}


.modal-content {
	font-family: 'Roboto', sans-serif;
	color: white;
	background: linear-gradient(180deg, rgb(53, 56, 158), rgb(7, 23, 65) 98%);
	border-radius: 50px 50px 0 0;
	padding: 84px 24px 28px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 100%;
}

.close-button {
	position: absolute;
	top: 24px;
	right: 24px;
	color: rgb(90, 93, 171);
	font-size: 22px;
	font-weight: 700;
	cursor: pointer;
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: #D9D9D9;
	border: none;
}

.youtube-icon {
	width: 91px;
	height: 63.75px;
	object-fit: cover;
}

.other-icon {
	width: 63px;
	height: 63px;
	object-fit: cover;
}

h1 {
	font-size: 24px;
	font-weight: 700;
	line-height: 1.1;
	text-align: center;
	margin: 16px 0 8px;
}

.description {
	font-size: 17px;
}

.reward-wrapper {
	display: flex;
	align-items: center;
	gap: 5px;
	margin: 40px 0 26px;
}

.coin-icon {
	height: 25px;
}

.action-button {
	width: 100%;
	height: 64px;
	background-color: white;
	color: rgb(44, 57, 185);
	font-size: 16px;
	font-weight: 600;
	line-height: 1.1;
	border-radius: 16px;
	cursor: pointer;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>