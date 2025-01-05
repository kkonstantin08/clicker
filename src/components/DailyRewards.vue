<template>
	<div class="modal-overlay" @click.self="$emit('close')">
		<div class="modal-content">
			<button class="close-button" @click="$emit('close')">✕</button>
			<div class="header">
				<img src="../assets/img/daily/calendar.png" alt="">
				<h1>Collect Daily Rewards</h1>
				<p>Login daily without skipping and collect rewards for free. </p>
			</div>
			<div class="days">
				<div class="day" v-for="day in days" :class="{'active': day <= activeDays}" >
					<img src="../assets/img/daily/coin.png" alt="">
					<p class="plus">+500</p>
					<p>Day {{ day }}</p>
				</div>
			</div>

			<button @click="$emit('claim')" >
				<p>Claim daily rewards</p>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DailyRewards',
	emits: ['close', 'claim'],
	props:{
		activeDays: Number
	},
	data(){
		return{
			days:[1,2,3,4,5,6,7],
		}
	},


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
	padding: 84px 20px 28px;
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

.header {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 32px;
}

.header img {
	height: 64px;
	width: 64px;
}

.header h1 {
	font-size: 24px;
	font-weight: 700;
	line-height: 110%;
	letter-spacing: -2%;
}

.header p {
	font-size: 14px;
	font-weight: 400;
	line-height: 110%;
}

.days {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	justify-content: center;
	margin-bottom: 80px;
}

.day {
	box-sizing: border-box;
	border-radius: 16px;
	width: 88px;
	height: 103px;
	background: rgba(255, 255, 255, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.day p {
	font-size: 12px;
	font-weight: 400;
	line-height: 110%;
	letter-spacing: 0%;
}

.day .plus {
	font-size: 20px;
	font-weight: 700;
	line-height: 110%;
	letter-spacing: 0%;
	padding-right: 7px;
}

button {
	border-radius: 16px;
	background: rgb(255, 255, 255);
	width: 100%;
	height: 64px;
	color: rgb(44, 57, 185);
	font-size: 16px;
	font-weight: 600;
	line-height: 110%;
}

.active {
	border: 3px solid rgb(98, 168, 101);
	position: relative;
}

.active::before {
	content: "";
	position: absolute;
	top: -18px;
	right: -13px;
	width: 28px;
	height: 28px;
	background-image: url('../assets/img/daily/done.png');
	background-size: cover;
	background-position: center;
}
</style>