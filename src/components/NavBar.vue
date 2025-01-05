<script>
export default {
  name: 'NavBar',
  props: {
    navbar: {
      type: Array,
      required: true
    },
    selectedIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    selectNavBtn(index) {
      this.$emit('update:selectedIndex', index);
      // Вызываем updateIndicator() сразу после эмиссии события
      this.$nextTick(() => {
        this.updateIndicator();
      });
    },
    updateIndicator() {
      const indicator = this.$el.querySelector('.nav-indicator');
      const selectedLink = this.$el.querySelector(`.link:nth-child(${this.selectedIndex + 2})`);
      
      if (indicator && selectedLink) {
        const padding = 12;
        indicator.style.width = `${selectedLink.offsetWidth + padding * 2}px`;
        indicator.style.height = `${selectedLink.offsetHeight + padding * 2}px`;
        indicator.style.left = `${selectedLink.offsetLeft - padding}px`;
        indicator.style.top = `${selectedLink.offsetTop - padding}px`;
      }
    }
  },
  watch: {
    // Добавляем наблюдатель за изменением selectedIndex
    selectedIndex() {
      this.$nextTick(() => {
        this.updateIndicator();
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updateIndicator();
    });
    window.addEventListener('resize', this.updateIndicator);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateIndicator);
  }
}
</script>

<template>
  <nav class="navbar-container">
    <div class="container navbar">
      <div class="nav-indicator"></div>
      <div class="link" v-for="(btn, index) in navbar" @click="selectNavBtn(index)" :class="{ 'active': selectedIndex === index }">
        <a role="button">
          <img v-if="index == 3" :src="btn.img" id='airdrop'>
          <img v-else :src="btn.img">
          <p>{{btn.title}}</p>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>

:root {
  --primary-bg: linear-gradient(180deg, rgb(53, 56, 158), rgb(7, 23, 65) 98%), linear-gradient(180deg, rgb(53, 56, 158), rgb(28, 40, 72) 98%), rgb(44, 47, 53);
  --white-transparent: rgba(255, 255, 255, 0.08);
  --white-more-transparent: rgba(255, 255, 255, 0.1);
  --dark-transparent: rgba(33, 36, 41, 0.5);
}


.navbar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* padding: 20px 24px; */
	padding-left: 24px;
	padding-right: 24px;
	padding-bottom: 31px;
  /* background: rgba(0, 0, 0, 0.5);  */
}

.container {
  display: flex;
  border-radius: 16px;
  background: var(--white-transparent);
  padding: 16px;
}

/* Все стили, связанные с навбаром, из вашего основного компонента */
.container.navbar {
  position: relative;
  overflow: hidden;
}

.navbar {
  justify-content: space-around;
  background-color: var(--white-transparent);
  width: 100%;
}

.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  position: relative;
  z-index: 1;
}


.navbar a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navbar a img {
  height: 16px;
  width: auto;
}

.link img,
.link p {
  opacity: 0.2;
}

.nav-indicator {
  position: absolute;
  background: transparent;
  border-radius: 12px;
  transition: all 0.3s ease;
  z-index: 0;
}

.nav-indicator::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--dark-transparent);
  border-radius: 12px;
  z-index: -1;
}

.link.active img,
.link.active p,
.link #airdrop {
  opacity: 1;
}
</style>