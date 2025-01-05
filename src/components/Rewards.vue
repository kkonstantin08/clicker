<script>
import ModalRewardWindow from './ModalRewardWindow.vue';
import DailyRewards from './DailyRewards.vue';
export default {
	components: {
		ModalRewardWindow,
		DailyRewards,
	},
	data() {
		return {
			videos: [
				{
					img: 'src/assets/img/tasks/yt.png',
					title: 'Watch the new youtube video',
					coins: '500',
					imgmodal_class: 'youtube-icon',
					description: 'Watch the new youtube video and earn coins.',
					btn_description: 'Watch and learn',
				},
				{
					img: 'src/assets/img/tasks/yt.png',
					title: 'Watch the new youtube video',
					coins: '1,000',
					imgmodal_class: 'youtube-icon',
					description: 'Watch the new youtube video and earn coins.',
					btn_description: 'Watch and learn',
				}
			],
			daily: [
				{
					img: 'src/assets/img/tasks/calendar.png',
					title: 'Collect daily reward',
					coins: '500',
				}
			],
			tasks: [
				{
					img: 'src/assets/img/tasks/insta.png',
					title: 'Follow us on Instagram', 
					coins: '500',
					img_class: 'insta',
					imgmodal_class: 'other-icon',
					description: '',
					btn_description: 'Follow'
				},
				{
					img: 'src/assets/img/tasks/tg.png',
					title: 'Follow us on Telegram',
					coins: '500',
					img_class: 'tg',
					imgmodal_class: 'other-icon',
					description: '',
					btn_description: 'Follow'
				}
			],
			isModalOpen: false,
			isModalDailyOpen: false,
			selectedTask: null,
			activeDays:0,
		}
	},
	methods: {
		openModal(task) {
			this.selectedTask = task;
			this.isModalOpen = true;
		},
		openDailyModal() {
			this.isModalDailyOpen = true;
		},
		claim(){
			this.activeDays ++;
		}
		
	}
}


</script>

<template>
	<div class="header">
		<h1>Earn more coins</h1>
		<p>Your friends and you will receive bonus.</p>
	</div>

	<div class="main">
		<div class="task-group videos" v-if="videos">
			<h4>Watch Videos</h4>
			<div class="container" v-for="video in videos" @click="openModal(video)">
				<img :src="video.img">
				<div class="content">
					<p>{{ video.title }}</p>
					<div class="coins">
						<img src="../assets/img/tasks/coin.png">
						<p>+{{ video.coins }}</p>
					</div>
				</div>
			</div>
		</div>

		<div class="task-group daily">
			<h4>Daily Tasks</h4>
			<div class="container" @click="openDailyModal" >
				<img :src="daily[0].img">
				<div class="content">
					<p>{{ daily[0].title }}</p>
					<div class="coins">
						<img src="../assets/img/tasks/coin.png">
						<p>+{{ daily[0].coins }}</p>
					</div>
				</div>
			</div>
		</div>

		<div class="task-group tasks" v-if="tasks">
			<h4>Tasks</h4>
			<div class="container" v-for="task in tasks" @click="openModal(task)">
				<img :src="task.img" :class="task.img_class">
				<div class="content">
					<p>{{ task.title }}</p>
					<div class="coins">
						<img src="../assets/img/tasks/coin.png">
						<p>+{{ task.coins }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<modal-reward-window v-if="isModalOpen" :task="selectedTask" @close="isModalOpen = false"></modal-reward-window>
	<daily-rewards v-if="isModalDailyOpen" :activeDays="activeDays"  @close="isModalDailyOpen = false" @claim="claim"></daily-rewards>

</template>



<style scoped>
.header {
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: 24px;
}

.insta {
	height: 40px;
	width: 40px;
}

.tg {
	width: 40px;
	width: 40px;
}

.task-group {
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
	gap: 8px;
}

.task-group h4 {
	font-size: 16px;
	font-weight: 500;
	line-height: 110%;
	margin-bottom: 8px;
}



.container {
	display: flex;
	border-radius: 16px;
	background: rgba(255, 255, 255, 0.08);
	padding: 12px 16px;
	align-items: center;
	gap: 16px;
}

.content {
	display: flex;
	flex-direction: column;
}

.content p {
	font-size: 16px;
	font-weight: 450;
	line-height: 110%;
}

.coins {
	display: flex;
	align-items: center;
	gap: 4px;
	text-align: center;
}

.coins p {
	padding-top: 7px;
	font-size: 14px;
	font-weight: 400;
}

.coins img {
	height: 20px;
	width: 20px;
}
</style>