<script setup lang='ts'>
const faqs = ref([
  {
    question: 'What is MK Health Care?',
    answer: 'Lorem ipsum dolor...',
    open: false,
  },
  {
    question: 'What is MK Health Care 2?',
    answer: 'Through MK Health Care, patients can connect with independent, licensed doctors and medical providers through the MK Health Care software platform. Once registered, patients can use MK Health Care send secure messages and request medical services like prescription consultations and help with lab testing. The independent medical providers using MK Health Care can provide care to patients, message securely and send invoices in accordance with their professional judgement and scope of practice. MK Health Care can be accessed through any mobile device or computer with internet access. Approved prescriptions for medications are e-routed to the patient’s chosen pharmacy and lab orders are e-routed to Quest Diagnostics. MK Health Care does not ship medications at this time.',
    open: false,
  },
  {
    question: 'What is MK Health Care 2?',
    answer: 'Through MK Health Care, patients can connect with independent, licensed doctors and medical providers through the MK Health Care software platform. Once registered, patients can use MK Health Care send secure messages and request medical services like prescription consultations and help with lab testing. The independent medical providers using MK Health Care can provide care to patients, message securely and send invoices in accordance with their professional judgement and scope of practice. MK Health Care can be accessed through any mobile device or computer with internet access. Approved prescriptions for medications are e-routed to the patient’s chosen pharmacy and lab orders are e-routed to Quest Diagnostics. MK Health Care does not ship medications at this time.',
    open: false,
  },
  {
    question: 'What is MK Health Care 2?',
    answer: 'Through MK Health Care, patients can connect with independent, licensed doctors and medical providers through the MK Health Care software platform. Once registered, patients can use MK Health Care send secure messages and request medical services like prescription consultations and help with lab testing. The independent medical providers using MK Health Care can provide care to patients, message securely and send invoices in accordance with their professional judgement and scope of practice. MK Health Care can be accessed through any mobile device or computer with internet access. Approved prescriptions for medications are e-routed to the patient’s chosen pharmacy and lab orders are e-routed to Quest Diagnostics. MK Health Care does not ship medications at this time.',
    open: false,
  },
  {
    question: 'What is MK Health Care 2?',
    answer: 'Through MK Health Care, patients can connect with independent, licensed doctors and medical providers through the MK Health Care software platform. Once registered, patients can use MK Health Care send secure messages and request medical services like prescription consultations and help with lab testing. The independent medical providers using MK Health Care can provide care to patients, message securely and send invoices in accordance with their professional judgement and scope of practice. MK Health Care can be accessed through any mobile device or computer with internet access. Approved prescriptions for medications are e-routed to the patient’s chosen pharmacy and lab orders are e-routed to Quest Diagnostics. MK Health Care does not ship medications at this time.',
    open: false,
  },
]);

const toggleOpen = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};


</script>

<template>
    <PageHeader />
    <main>
        <section class="faq-sec">
            <div class="container">
                <h1 class="text-center">Frequently Asked Questions</h1>
                <div>
                    <h2 class="main-heading">General</h2>
                    <div v-for="(faq, index) in faqs" :key="index">
                        <h4 class="question" @click="toggleOpen(index)">
                            <v-icon :icon=" faq.open ? 'mdi-minus' : 'mdi-plus' " />
                            {{ faq.question }}
                        </h4>
                        <p class="answer" v-if="faq.open">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <PageFooter />
    </footer>
</template>

<style scoped lang="scss">
.faq-sec {
    color: $darkBlack;
    .main-heading {
        font-size: 40px;
        padding: 10px;
        margin-top: 60px;
        background-color: rgba($primary, 0.3);
        border: 1px solid $primary;
    }
    .question {
        padding: 10px;
        font-size: 20px;
        border: 1px solid $darkBlack;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .answer {
        background-color: #fff;
        color: $textGrey;
        padding: 10px;
        border: 1px solid $darkBlack;
        font-size: 16px;
    }
}
    h1 {
    margin-bottom: 20px 0;
    font-size: 64px; 
}
</style>

