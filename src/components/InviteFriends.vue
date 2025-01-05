<script>
import NavBar from './NavBar.vue';  // Убедитесь, что путь к файлу правильный

export default {
  components: {
    NavBar
  },
  data() {
    return {
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
  }
}
</script>

<template>
  <header>
    <div class="header">
      <h1>Invite friends</h1>
      <p>Your friends and you will receive bonus.</p>
    </div>
    <div class="container invite">
      <h4>Invite a friend</h4>
      <p><img src="../assets/img/coin.png" class="coin">+5,000 for you and your friend.</p>
    </div>
  </header>
  <main>
    <p class="your-inv-fr">
      Your invited friends
    </p>
    <div class="friends">
      <div class="container friend" v-for="friend in friends">
        <div class="avatar-wrapper">
          <img src="../assets/img/jimmy.svg" class="avatar">
          <div class="fr-info">
            <h4>{{friend.name}}</h4>
            <p>Silver <img src="../assets/img/coin.png" class="coin"> <span class="count">{{friend.coins}}</span></p>
          </div>
        </div> 
        <div class="plus-coins">
          <p> <img src="../assets/img/coin.png" class="coin">+500</p>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="tg-btn">
      <div class="container invite-tg">
        <img src="../assets/img/tg.svg" alt="">
        <p>Invite a friend via telegram</p>
      </div>
    </div>
    <!-- <NavBar :navbar="navbar" :selectedIndex="selectedIndex" @update:selectedIndex="selectedIndex = $event" /> -->
  </footer>
</template>

<style scoped>
/* Все стили, кроме тех, что относятся к навбару */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
  --primary-bg: linear-gradient(180deg, rgb(53, 56, 158), rgb(7, 23, 65) 98%), linear-gradient(180deg, rgb(53, 56, 158), rgb(28, 40, 72) 98%), rgb(44, 47, 53);
  --white-transparent: rgba(255, 255, 255, 0.08);
  --white-more-transparent: rgba(255, 255, 255, 0.1);
  --dark-transparent: rgba(33, 36, 41, 0.5);
}

a {
  text-decoration: none;
}

main {
  margin-bottom: 16px;
}

.coin {
  display: inline-block;
  vertical-align: middle;
}

.count {
  color: #FFEF99;
  font-size: 12px;
}

.header h1 {
  font-size: 32px;
  margin-bottom: 8px;
}

.header p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.container {
  display: flex;
  border-radius: 16px;
  background: var(--white-transparent);
  margin: 3px 0;
  padding: 16px;
}

.invite {
  flex-direction: column;
  padding-left: 84px;
  margin: 24px 0;
}

.invite h4 {
  padding-bottom: 8px;
}

.avatar {
  margin-right: 16px;
}

.your-inv-fr {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 13px;
}

.avatar-wrapper {
  display: flex;
}

.friends {
  max-height: 43vh;
  overflow-y: auto;
}

.friend {
  justify-content: space-between;
  align-items: center;
}

.plus-coins {
  padding: 8px;
  border-radius: 8px;
  background: var(--white-more-transparent);
}

footer {
  padding: 0 24px 31px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}

.tg-btn {
  padding: 0 24px 40px;
  position: fixed;
  width: 100%;
  bottom: 78px;
  left: 0;
}

.invite-tg { 
  width: 100%;
  justify-content: center;
  gap: 6px;
  color: #2C39B9;
  background-color: #FFFFFF;
	transition: background-color 0.3s ease;
}

.invite-tg:active {
  background-color: #e0dfdf;
}

</style>