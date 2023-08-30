<script setup lang='ts'>
import IconBox from '@/components/IconBox.vue';
import Testimonials from '@/components/Testimonials.vue';

  

</script>

<template>
    <PageHeader />
    <main>
        <section class="provider-main-sec">
            <div class="container">
                <div class="provider-form">
                    <h1 class="text-start">
                        A Medical Practice <br> in Your Pocket
                    </h1>
                    <v-form class="form" id="provider-main-form" action="">
                        <v-text-field
                        variant="solo-filled"
                        label="Email"
                        placeholder="User@gmial.com"
                        ></v-text-field>
                        <v-text-field
                        variant="solo-filled"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        ></v-text-field>
                        <v-btn class="action-btn">
                            Get Started!
                        </v-btn>
                    </v-form>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="icon-sec">
                    <div class="text-center">
                        <IconBox backgroundcolor="#FFB988" color="#fff" boxSize="80px" icon="mdi-message-badge-outline"/>
                        <span class="icon-text">
                            Video Chatting
                        </span>
                    </div>
                    <div class="text-center">
                        <IconBox backgroundcolor="#A0CB8A" color="#fff" boxSize="80px" />
                        <span class="icon-text">
                            Get Prescription
                        </span>
                    </div>
                    <div class="text-center">
                        <IconBox backgroundcolor="#A0CB8A" color="#fff" boxSize="80px" icon="mdi-plus-outline"/>
                        <span class="icon-text">
                            Health Checkup
                        </span>
                    </div>
                    <div class="text-center">
                        <IconBox backgroundcolor="#E1BC62" color="#fff" boxSize="80px" icon="mdi-bottle-tonic-plus-outline"/>
                        <span class="icon-text">
                            Lab Testing
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="featured-section">
                    <div class="heading">
                        <h1>
                            Provider Features
                        </h1>
                        <p>
                            Easily and privately care for your patients via your mobile phone
                        </p>
                    </div>
                    <div class="cards" >
                        <div class="card">
                            <div class="icon">
                                <IconBox icon="mdi-lock" color="#FAB915" backgroundcolor="#fff" boxSize="50px" size="25px" />
                            </div>
                            <div class="content">
                                <h2>
                                    Free & Flexible
                                </h2>
                                <p>
                                    Our services offer you the flexibility to prioritize your well-being on your terms
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <IconBox icon="mdi-lock" color="#FAB915" backgroundcolor="#fff" boxSize="50px" size="25px" />
                            </div>
                            <div class="content">
                                <h2>
                                    Free & Flexible
                                </h2>
                                <p>
                                    Our services offer you the flexibility to prioritize your well-being on your terms
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <IconBox icon="mdi-lock" color="#FAB915" backgroundcolor="#fff" boxSize="50px" size="25px" />
                            </div>
                            <div class="content">
                                <h2>
                                    Free & Flexible
                                </h2>
                                <p>
                                    Our services offer you the flexibility to prioritize your well-being on your terms
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="cta-btn"  > 
                        <v-btn color="#FAB915" >
                            Request a Demo Now 
                        <VIcon  icon="mdi-arrow-right"/>
                        </v-btn> 
                    </div>
                </div>
            </div>
        </section>
        <section>
            <Testimonials />
        </section>
    </main>
    <footer>
        <PageFooter />
    </footer>
</template>
<style scoped lang="scss">

    

    .provider-main-sec {
        background-image: url(../assets/png/provider.png);
        width: 100%;
        background-position: center;
        min-height: 70vh;
        background-size: cover;
        position: relative;
        &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba($primary, 0.5);
                
            }
        .provider-form {
            padding: 75px;
            margin: 60px 0;
            background-color: #fafafa ;
            border-radius: 26px;
            display: grid; place-items: start center; justify-items: start;
            width: 45%;
            position: relative;
            h1 {
                font-size: 40px;
                margin-bottom: 30px;
                color: $darkBlack;
            }
            .form {
                width: 100%;
                .action-btn {
                width:100%;
                background-color: $primary;
                border-radius: 18px;
                padding: 30px ;
                height: 100%;
                font-size: 15px;
                font-weight: 900;
                margin-top: 20px;
                color: #fff;
                }
            }
        }
    }
    .icon-sec {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        padding: 50px;
        margin-top: 60px ;
        background-color: #e8e9e9;
        .icon-text {
            color: #37474F;
            font-size: 20px;
            display: inline-block;
            margin-top: 24px;
            font-weight: 500;
        }
    }
    .featured-section {
        .heading {
            text-align: center;
            h1 {
                font-size: 50px;
                color: $darkBlack;
            }
            p {
                color: #7C8087;
                font-size: 18px;
            }
        }
        .cards {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 60px  0;
           
            .card {
                display: flex;
                align-items: start;
                padding: 20px;
                background-color: #e8e9e9;
                border-radius: 10px;
                color: $darkBlack;
                width: 30%;
                .content {
                    margin-left: 20px;
                    h1 {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }

    .cta-btn {
      display: inline-flex ;
      width: 100%;
      text-align: center;
      justify-content: center;
      margin: auto;
      .v-btn {
        color: #fff;
      }
    }
</style>
<style lang="scss"> 
  #provider-main-form {
    label {
      font-weight: 900;
    }
    .v-field {
      border-radius: 18px;
      background-color: #F0F3F6;
      margin-top: 10px;
    }
    .v-field__field {
      padding: 10px;
    }
  }
</style>
