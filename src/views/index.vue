<script lang="ts" setup>
import PageFooter from '@/components/PageFooter.vue';
import PageHeader from '@/components/PageHeader.vue';

// import { useTheme } from 'vuetify'
// const $vuetify = useTheme()
// const color = $vuetify.current.value.colors;
</script>
<template>
  <div>
    <div id="header">
      <PageHeader />
    </div>
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
              MK Health Care is the biggest Virtual Concierge Medical Care which enables doctors, medical providers and
              patients to connect virtually for concierge telemedicine care.
            </p>
            <router-link to='/creatAccount'>
              <button class="hero-btn">
                Get Started
              </button>
            </router-link>
          </div>
          <div class="hero-img">
            <img src="../assets/svg/hero-img.svg" alt="">
          </div>
        </div>
      </section>
      <section class="container-box">
        <div class="process-section section">
          <div class="content">
            <h1 class="pb-8" style="font-size: 58px;">
              Our Process
            </h1>
            <div class="process">
              <div class="process-step">
                <div>
                  <div class="icon-box">
                    <VIcon size="36" icon="mdi-plus-outline"></VIcon>
                  </div>
                  <span class="process-text">
                    Consult a <br> Doctor
                  </span>
                </div>
              </div>
              <VIcon style="margin-top: 12px;" size="52px" icon="mdi-arrow-right"></VIcon>
              <div class="process-step">
                <div>
                  <div class="icon-box">
                    <VIcon size="36" icon="mdi-stethoscope"></VIcon>
                  </div>
                  <span class="process-text">
                    Get Checked & <br>Prescribed
                  </span>
                </div>
              </div>
              <VIcon style="margin-top: 12px;" size="52px" icon="mdi-arrow-right"></VIcon>
              <div class="process-step">
                <div>
                  <div class="icon-box">
                    <VIcon size="36" icon="mdi-bottle-tonic-plus-outline"></VIcon>
                  </div>
                  <span class="process-text">
                    Get Healthybr <br>Again
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="number">
            <b style="font-size: 180px;">500+</b>
            <p>
              Our beloved customer. We provide the best Health care services. There are consultancy, prescription, etc
            </p>
          </div>
        </div>
      </section>
      <section class="container-box">
        <div class="side-img-sec section">
          <div class="content">
            <h1 class="pb-8" style="font-size: 58px;">
              For Medical <br> Providers
            </h1>
            <div class="list">
              <ul>
                <li>
                  Simple documentatio
                </li>
                <li>
                  Secure messaging
                </li>
                <li>
                  Integrated with Quest Diagnostics
                </li>
              </ul>
            </div>
            <button class="hero-btn">
              Sign up
            </button>
          </div>
          <div class="side-image">
            <div>
              <img src="../assets/png/stethoscope.png" alt="stethoscope" style="border-radius: 30px;">
            </div>
            <div class="floating-box">
              <div style="display: flex; align-items: center;">
                <img src="../assets/png/doctor.png" alt="doctor" style="border-radius: 10px;">
                <span style="margin-inline-start: 14px;">
                  Connect <br> Everyday!
                </span>
              </div>
              <div style="color: hsla(0, 0%, 0%, 0.5); margin-top: 20px; ">
                Connect and Prescribe with Patients like never Before!
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container-box">
        <div class="side-img-sec section">

          <div class="side-image">
            <div>
              <img src="../assets/png/patients.png" alt="stethoscope" style="border-radius: 30px;">
            </div>
            <div class="floating-box floating-box-right ">
              <div style="display: flex; align-items: center;">
                <img src="../assets/png/doctor.png" alt="doctor" style="border-radius: 10px;">
                <span style="margin-inline-start: 14px;">
                  Professional <br> Consultancy!
                </span>
              </div>
              <div style="color: hsla(0, 0%, 0%, 0.5); margin-top: 20px; ">
                Our best service in here Customers like our service the most.
              </div>
            </div>
          </div>
          <div class="content" style="text-align: end;">
            <h1 class="pb-8" style="font-size: 58px;">
              For Medical <br> Patients
            </h1>
            <div class="list">
              <ul>
                <li>
                  Simple documentatio
                </li>
                <li>
                  Secure messaging
                </li>
                <li>
                  Integrated with Quest Diagnostics
                </li>
              </ul>
            </div>
            <button class="hero-btn">
              Sign up
            </button>
          </div>
        </div>
      </section>
      <section class="container-box">
        <div class="side-img-sec section about-us ">
          <div class="side-image">
            <div>
              <img src="../assets/png/about.png" alt="stethoscope" style="border-radius: 30px;">
            </div>
          </div>
          <div class="content ">
            <h1 class="pb-8" style="font-size: 58px;">
              About Us
            </h1>
            <div class="list">
              <p style="color: hsla(0, 0%, 0%, 0.5); margin-top: 0px; width: 70%; font-size: 22; ">
                MK Health Care is the biggest Virtual Concierge Medical Care which enables doctors, medical providers and
                patients to connect virtually for concierge telemedicine care.
              </p>
            </div>
            <button class="hero-btn">
              Sign up
            </button>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <PageFooter />
    </footer>
  </div>
</template>
<style lang="scss" scoped>
main {
  .hero-sec {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline-start: 120px;
    margin-top: -100px;

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

  }

  .hero-btn {
    color: #ffffff;
    padding: 12px 40px;
    background-color: $primary;
    border-radius: 8px;
    margin-top: 64px;
  }

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.about-us {
      justify-content: start;

      .content {
        margin-left: 100px;
      }
    }
  }

  .container-box {
    margin: 0 120px;
    padding-top: 120px;
  }

  .list {
    ul {
      margin: 0;
      font-size: 24px;
      color: hsla(0, 0%, 0%, 0.5);
      list-style-position: inside;
    }
  }

  .side-image {
    position: relative;

    .floating-box {
      position: absolute;
      left: -170px;
      bottom: 40px;
      border-radius: 30px;
      background: #E2EAF3;
      width: 294px;
      height: 236px;
      padding: 27px;
      font-size: 20px;
    }
  }

  .side-image {
    .floating-box-right {
      right: -170px;
      left: unset;
    }
  }

  .process-section {
    .process {
      display: flex;

      .process-step {
        display: grid;
        place-items: center;
        padding: 0 35px;
        text-align: center;

        .icon-box {
          width: 77px;
          height: 77px;
          display: grid;
          place-items: center;
          background-color: #FFDFBE;
          border-radius: 10px;
          margin: auto;
        }
        .process-text {
          font-size: 20px;
          text-align: center;
          margin-top: 15px;
          display: inline-block;
          color: hsla(0, 0%, 0%, 0.5);
        }
      }
    }
    .number {
      width: 40%;
      text-align: center;

      p {
        font-size: 24px;
        color: hsla(0, 0%, 0%, 0.5);
        padding: 28px;
        border-top: 1px solid #000000;
      }
    }
  }
}
</style>
<style lang="scss">
#header {
  header {
    background-color: unset;
  }
  .header-btn {
   background-color: #fff;
    color: $primary;
  }
}
</style>