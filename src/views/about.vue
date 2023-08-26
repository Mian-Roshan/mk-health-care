<script setup lang='ts'>
   

</script>

<template>
   <PageHeader />
    <main>
        <section>
           <div class="container">
                <div class="about-us">
                    <h1 class="text-center">The Mk Health Care Story</h1>
                    <div class="about-description">
                        <p>
                        MK Health Care was founded with a simple idea: every medical provider should be able to care for his or her network using great technology tools. Since 2013, thousands of patients and providers have connected through MK Health Care and benefited from increased access, convenience and price transparency.
                    </p> <br>
                    <p>MK Health Care is based in El Segundo, California.</p>
                    </div>
                </div>
           </div>
           <div>
                <div class="team-sec" >
                    <h2 class="text-center"> Our Management Team</h2>
                    <div class="team">
                        <div class="member-name">
                            <h3>
                                Malik Shahid, MD
                            </h3>
                            <span>
                                Co-Founder
                            </span>
                        </div>
                        <div class="member-description">
                            <p>
                                Chirag's interest in medicine started as a child while looking at lung pathology slides with his dad. For him, entrepreneurship has given him the opportunity to develop new ideas on improving the healthcare system while empowering others to do the same. He received his MD from Yale University, his MBA with High Distinction (Baker Scholar) from Harvard Business School and his BA from Stanford University. He completed a residency in Emergency Medicine at Harbor-UCLA Medical Center and is a Board-Certified Emergency Physician.
                            </p>
                        </div>
                    </div>
                    <div class="team">
                        <div class="member-name">
                            <h3>
                                John Doe
                            </h3>
                            <span>
                                Co-Founder
                            </span>
                        </div>
                        <div class="member-description">
                            <p>
                                Chirag's interest in medicine started as a child while looking at lung pathology slides with his dad. For him, entrepreneurship has given him the opportunity to develop new ideas on improving the healthcare system while empowering others to do the same. He received his MD from Yale University, his MBA with High Distinction (Baker Scholar) from Harvard Business School and his BA from Stanford University. He completed a residency in Emergency Medicine at Harbor-UCLA Medical Center and is a Board-Certified Emergency Physician.
                            </p>
                        </div>
                    </div>
                    <div class="team">
                        <div class="member-name">
                            <h3>
                                Steven Bull
                            </h3>
                            <span>
                                Co-Founder
                            </span>
                        </div>
                        <div class="member-description">
                            <p>
                                Chirag's interest in medicine started as a child while looking at lung pathology slides with his dad. For him, entrepreneurship has given him the opportunity to develop new ideas on improving the healthcare system while empowering others to do the same. He received his MD from Yale University, his MBA with High Distinction (Baker Scholar) from Harvard Business School and his BA from Stanford University. He completed a residency in Emergency Medicine at Harbor-UCLA Medical Center and is a Board-Certified Emergency Physician.
                            </p>
                        </div>
                    </div>
                    <div class="team">
                        <div class="member-name">
                            <h3>
                                Matthew Williamson
                            </h3>
                            <span>
                                Co-Founder
                            </span>
                        </div>
                        <div class="member-description">
                            <p>
                                Chirag's interest in medicine started as a child while looking at lung pathology slides with his dad. For him, entrepreneurship has given him the opportunity to develop new ideas on improving the healthcare system while empowering others to do the same. He received his MD from Yale University, his MBA with High Distinction (Baker Scholar) from Harvard Business School and his BA from Stanford University. He completed a residency in Emergency Medicine at Harbor-UCLA Medical Center and is a Board-Certified Emergency Physician.
                            </p>
                        </div>
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
h2 {
        margin-bottom: 20px 0;
        font-size: 54px;
        color: $darkBlack;
}
.about-us {
    background-color: rgba($primary, 0.3);
    border: 2px solid $primary;
    border-radius: 13px;
    padding: 20px;
    font-size: 20px;
    h1 {
        margin-bottom: 20px 0;
        font-size: 64px;
        color: $darkBlack;
    }
    .about-description {
      color: #757575;  
    } 
}
.team-sec{
    margin: 0 120px;
    .team {
        margin-bottom: 30px;
        .member-name {
            h3 {
                font-size: 40px;
                color: $darkBlack;
            }
            span {
                font-weight: 300;
                line-height: 20px;
                margin-top: -10px;
                display: block;
                font-size: 18px;
            }
        }
        .member-description {
            font-size:20px ;
            margin: 10px 0;
            color: $textGrey;
        }
    }
}
</style>

