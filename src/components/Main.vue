<template>
  <div class="election-component">
    <header>
      <div class="header">
        <div class="container name">
          <img src="../assets/img/main/avatar.svg" alt="Avatar" />
          <p>John Smith</p>
        </div>
        <div class="container exchange">
          <img src="../assets/img/main/binance.png" alt="Binance" />
          <p>Binance</p>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <h1>Tap on your candidate</h1>
      </div>
      <div class="container presidents">
        <div class="baiden">
          <!-- <img src="../assets/img/main/biden.png" id="biden" class="president-image" alt="Biden"> -->
          <img
            src="../assets/img/main/blue-circle.png"
            id="blue-circle"
            class="circle-image"
            alt="Blue circle"
          />
        </div>
        <div class="tramp">
          <!-- <img src="../assets/img/main/tramp.png" id="tramp" class="president-image" alt="Trump"> -->
          <img
            src="../assets/img/main/red-circle.png"
            id="red-circle"
            class="circle-image"
            alt="Red circle"
          />
        </div>
      </div>

      <div
        class="power-bar"
        v-for="candidate in candidates"
        :key="candidate.name"
      >
        <div class="container line">
          <div class="president">
            <p>{{ candidate.name }}</p>
            <img src="../assets/img/main/next.png" width="5" alt="Next" />
          </div>
          <p>
            <span class="energy">{{ candidate.energy }}</span
            >/10000
          </p>
        </div>
        <div class="progressbar">
          <div
            :class="candidate.fillClass"
            :style="{ width: (candidate.energy / 10000) * 100 + '%' }"
          ></div>
        </div>
      </div>

      <div class="container votes">
        <div class="container light">
          <img src="../assets/img/main/lightning.png" alt="Lightning" />
          <div class="remaining-votes">
            <p>Remaining votes</p>
            <p>{{ remainingVotes }} / {{ totalVotes }}</p>
          </div>
        </div>
        <p>Boost</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ElectionComponent",
  data() {
    return {
      candidates: [
        {
          name: "Biden",
          energy: 200,
          fillClass: "fill-progress bd-fill-progress",
          progressWidth: "10%",
        },
        {
          name: "Trump",
          energy: 200,
          fillClass: "fill-progress tr-fill-progress",
          progressWidth: "52%",
        },
      ],
      remainingVotes: 500,
      totalVotes: 5500,
    };
  },
};
</script>

<style scoped>
:root {
  --primary-gradient: linear-gradient(
    180deg,
    rgb(53, 56, 158),
    rgb(7, 23, 65) 98%
  );
  --secondary-gradient: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(78, 73, 73, 0.2) 100%
  );
  --biden-gradient: linear-gradient(
    270deg,
    rgb(53, 56, 158) 29.5%,
    rgb(28, 40, 72) 98%
  );
  --trump-gradient: linear-gradient(
    270deg,
    rgb(208, 56, 56) 0%,
    rgb(100, 14, 14) 97.5%
  );
}

.container {
  display: flex;
  justify-content: space-between;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 6px;
  margin-bottom: 20px;
}

.name,
.exchange {
  display: flex;
  align-items: center;
  gap: 10px;
}

.exchange {
  padding: 8px;
  border-radius: 10px;
  background: var(--secondary-gradient);
}

main {
  padding-top: 63px;
}

main h1 {
  margin: 0 auto;
}

.presidents {
  margin: 140px 0 25px;
}

.baiden,
.tramp {
  position: relative;
}

.president-image {
  position: absolute;
  height: 250px;
  width: auto;
  object-fit: cover;
}

#biden {
  top: -70px;
  left: 0;
}

#tramp {
  height: 270px;
  top: -80px;
  left: 17px;
}

.circle-image {
  height: 186px;
  width: 186px;
}

.line {
  justify-content: space-between;
}

.president {
  display: flex;
  align-items: center;
  gap: 5px;
}

.power-bar {
  margin-bottom: 16px;
}

.progressbar {
  width: 100%;
  border: 0.5px solid rgba(85, 85, 85, 0.75);
  border-radius: 30px;
  background: rgb(50, 54, 60);
  height: 9px;
}

.energy {
  opacity: 0.5;
}

.fill-progress {
  height: 9px;
  border-radius: 30px;
}

.bd-fill-progress {
  width: 10%;
  background: linear-gradient(
    270deg,
    rgb(53, 56, 158) 29.5%,
    rgb(28, 40, 72) 98%
  );
}

.tr-fill-progress {
  width: 52%;
  background: linear-gradient(
    270deg,
    rgb(208, 56, 56) 0%,
    rgb(100, 14, 14) 97.5%
  );
}

.votes {
  margin-top: 40px;
  align-items: center;
}

.light {
  gap: 10px;
  align-items: center;
}

.light img {
  height: 35px;
  width: 20px;
}
</style>
