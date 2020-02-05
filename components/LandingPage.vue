<template>
  <section id="landing-page">
    <div class="landing-page-content">
      <v-container>
        <div class="landing-page-caption white--text">
          <h1 class="landing-page-title">
            Tondo Football Club
          </h1>
          <h6 class="subtitle-1 font-italic">
            "Changing Lives"
          </h6>
        </div>
      </v-container>
    </div>
    <div class="dark-overlay"></div>
  </section>
</template>
<script>
    export default {
        name: "landing-page"
    };
</script>

<style scoped>
  #landing-page {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("~assets/tondoFootballClubHomeBanner.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .landing-page-content {
    width: 100%;
    position: absolute;
    bottom: 10%;
    left: 0;
    z-index: 3;
  }

  .landing-page-caption {
    text-align: center;
  }

  .landing-page-title {
    font-size: 4.5rem;
  }

  .dark-overlay {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.8;
  }
</style>
