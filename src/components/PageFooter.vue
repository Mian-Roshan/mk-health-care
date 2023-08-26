<template>
      <section class="container-box">
        <div class="section footer-sec">
          <div class="footer-logo-side">
            <div>
              <img src="../assets/svg/MK-logo.svg" alt="stethoscope" height="51px">
            </div>
            <div>
              <p style="width: 30%; margin-top: 25px;">
                Logoipsumoffers a wide range of properties of the highest quality. Using Mostrew, finding a new place to
                live has become much easier.
              </p>
            </div>
          </div>
          <div class="content footer-content">
            <div class="footer-content-lists">

              <div class="footer-list">
                <ul>
                  <li>
                    <router-link to="/about">
                      about us
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/faq">
                      FAQ's
                    </router-link>
                  </li>
                  <li>
                    123
                  </li>
                  <li>
                    123
                  </li>
                  <li>
                    123
                  </li>
                  <li>
                    123
                  </li>
                </ul>
              </div>
              <div class="footer-list">
                <ul>
                  <li>
                    Servies
                  </li>
                  <li>
                    123
                  </li>
                  <li>
                    123
                  </li>
                  <li>
                    123
                  </li>
                  <li>
                    123
                  </li>
                </ul>
              </div>
              <div class="footer-list">
                <ul>
                  <li>
                    COMPANY
                  </li>
                  <li>
                    123
                  </li>
                  <li>
                    123
                  </li>
                  <li>
                    123
                  </li>
                  <li>
                    123
                  </li>
                </ul>
              </div>
            </div>
            <div style="margin-top: 50px;">
              <span>Contact</span> <b style="color: #fff; margin: 0 10px;">hello@logoipsum.io</b>
            </div>
          </div>
        </div>
      </section>
</template>

<style scoped lang="scss">
.footer-sec {
  background: #37474F;
  padding: 120px;
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  color: #adadad;
  font-size: 18px;
    .footer-logo-side {
        img {
            height: 51px !important;
        }
    }
        .footer-content {
    width: 50%;
    text-align: start;
    .footer-content-lists {
      display: flex;
      justify-content: space-between;
      align-items: start !important;

      ul {

        li {
          list-style: none;
          margin-bottom: 15px;
          a {
            text-decoration: none;
            color: inherit;
          }
          &:first-child {
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
          }
        }
      }
    }
  }
}
</style>