<script  lang="ts" setup >
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const modules = [Autoplay,  Pagination];
</script>
<template>
    <div class="container">
        <div class="testimonials">
            <h1>
                What our Patients <br> Say about us?
            </h1>
            <div id="slider">
                <swiper
                    :slidesPerView="3"
                    :spaceBetween="30"
                    :centeredSlides="true"
                    :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                    }"
                    :pagination="{
                    clickable: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                    >
                    <swiper-slide>
                        <div class="cards">
                            <div class="card">
                            <div class="img">
                                <img src="../assets/png/doctor.png" alt="img">
                            </div>
                            <div class="content">
                                <h2>
                                    John Philips
                                </h2>
                                <span class="mb-2">Patient</span>
                                <p class="mt-5">
                                    “The doctor here is very friendly, at first i was afraid but after getting the prescription and checkup, I Highly Recommend you all”
                                </p>
                            </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="cards">
                            <div class="card">
                            <div class="img">
                                <img src="../assets/png/doctor.png" alt="img">
                            </div>
                            <div class="content">
                                <h2>
                                    John Philips
                                </h2>
                                <span class="mb-2">Patient</span>
                                <p class="mt-5">
                                    “The doctor here is very friendly, at first i was afraid but after getting the prescription and checkup, I Highly Recommend you all”
                                </p>
                            </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="cards">
                            <div class="card">
                            <div class="img">
                                <img src="../assets/png/doctor.png" alt="img">
                            </div>
                            <div class="content">
                                <h2>
                                    John Philips
                                </h2>
                                <span class="mb-2">Patient</span>
                                <p class="mt-5">
                                    “The doctor here is very friendly, at first i was afraid but after getting the prescription and checkup, I Highly Recommend you all”
                                </p>
                            </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .testimonials {
        h1 {
            font-size: 40px;
            margin-bottom: 30px;
            color: $darkBlack;
            text-align: center;
        }
        .mySwiper {
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
                img {
                    border-radius: 50%;
                }
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
        
    } 
</style>
<style lang="scss" >
#slider {
    .mySwiper {
            margin-top: 50px;
            .swiper-pagination-bullets {
                .swiper-pagination-bullet {
                width: 35px !important;
                border-radius: 6px; 
            }
            .swiper-pagination-bullet-active {
                background-color: $primary;
            }
            }
           
        }
}
</style>