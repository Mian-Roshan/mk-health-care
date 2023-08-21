<script lang="ts" setup>
  // import { useTheme } from 'vuetify'
  // const $vuetify = useTheme()
  // const color = $vuetify.current.value.colors;
</script>
<template>
  <div>
    <header>
      <div class="header">
        <div class="header-logo" style="min-width:25%;">
          <a href="#">
            <img src="../assets/svg/MK-logo.svg" alt="logo" height="26px">
            <span class="logo-txt">
              MK Health Care
            </span>
          </a>
        </div>
        <ul class="menu-list">
          <li>
            <a href="">
              Home
            </a>
          </li>
          <li>
            <a href="">
              Provider
            </a>
          </li>
          <li>
            <a href="">
              Provider
            </a>
          </li>
          <li>
            <a href="">
              Request care
            </a>
          </li>
        </ul>
        <button class="header-btn">
          Login
        </button>
      </div>
    </header>
    <main>
      <section>
        <div class="hero-sec">
          <div class="side-content">
            <h1>
                Everyday <br>
                Health Care<br>
                Connected
            </h1>
            <p>
              MK Health Care is the biggest Virtual Concierge Medical Care which enables doctors, medical providers and patients to connect virtually for concierge telemedicine care.
            </p>
            <button class="hero-btn">
              Get Started
            </button>

          </div>
          <div class="hero-img">
            <img src="../assets/svg/hero-img.svg" alt="">
          </div>
        </div>
      </section>
    </main>
  </div>
  
</template>
<style lang="scss" scoped>
  // @import '@/styles/settings.scss';
.header {
  a {
    text-decoration: none;
    color: #08102f;
    font-size: 16px;
    font-weight: 600;
  }
  margin: 0px 120px;
  padding: 26px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-logo a{
    display: inline-flex;
    align-items: center;
    .logo-txt {
      margin-left: 10px;
      font-size: 22px;
      font-weight: 700;
    }
  }
  .menu-list {
    list-style: none;
    margin: 0;padding: 0;
    display: flex;
    flex-wrap: wrap;
    margin-right: auto !important;
    li a{
      margin-left: 40px;
    }
  }
  .header-btn {
    color: #FAB915;
    padding: 12px 40px;
    background-color: #ffffff;
    border-radius: 8px;
  }
}
main {
  .hero-sec {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline-start: 120px;
    margin-top: -100px;
  }
  .side-content {
    h1 {
      color: #37474F;
      font-size: 64px;
      font-weight: 700;
    }
  }
  .hero-img {
    z-index: -100;
  }
  p {
    font-size: 18px;
    color: #646770;
    width: 70%;
    padding-top: 24px;
  }
  .hero-btn {
    color: #ffffff;
    padding: 12px 40px;
    background-color: #FAB915;
    border-radius: 8px;
    margin-top: 64px;
  }
}
</style>