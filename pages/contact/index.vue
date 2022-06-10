<template>
  <div>
    <Navbar class="navbar-desktop" />
    <NavbarMobile class="navbar-mobile" />

    <main class="contact-main">
      <section class="contactForm_wrapper" data-aos='fade-in' data-aos-duration="700" data-aos-delay="300" >
        <h1>Soñas con tener tu propio hogar?</h1>
        <p>
          Completá el formulario y nos contactaremos dentro de las las próximas
          24hs, también podes enviarnos un e-mail o escribirnos por WhatsApp.
        </p>
        <ContactForm />
      </section>

      <ul class="contactData_wrapper" data-aos='fade-left' data-aos-duration="700" >
        <li>
          <p>Telefonos:</p>
          <h4>+54 9 (342) 433 1234</h4>
          <h4>+54 9 (342) 433 1234</h4>
        </li>
        <li>
          <p>Email:</p>
          <h4>viviendassantafe@gmail.com</h4>
        </li>
        <li>
          <p>Seguinos:</p>
          <SocialMediaLinks :classColor="`socialMedia_blue`" />
        </li>
        <li>
          <p>Oficinas:</p>
          <h4>Santa Fe</h4>
          <h4>Saavedra 1699 CP 3000</h4>
        </li>
      </ul>
    </main>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.2466530423067!2d-60.720768685014875!3d-31.654470981325435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9ab7897451b%3A0xa74d1c4e73e990a3!2sSaavedra%201699%2C%20S3000EXO%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1653448668537!5m2!1ses-419!2sar"
      width="100%"
      height="300"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="copyright">
      <p>© All right reserved. Viviendas Santa Fe SRL 2022</p>
    </div>
  </div>
</template>

<script lang='ts'>
import Navbar from '@/components/Navbar.vue'
import NavbarMobile from '@/components/NavbarMobile.vue'
import ContactForm from '@/components/ContactForm.vue'
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'
import aosMixin from '@/mixins/aos'

export default {
  name: 'Contact',
  mixins: [aosMixin],
  components: { Navbar, NavbarMobile, ContactForm, SocialMediaLinks },
  data() {
    return {}
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';

.navbar-mobile {
  display: none;
}

@media (max-width: 1024px) {
  .navbar-desktop {
    display: none !important;
  }
  .navbar-mobile {
    display: block;
  }
}

.contact-main {
  overflow-x: hidden;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8em;
  height: auto;
  padding: 9em 0 3em 0;

  .contactForm_wrapper {
    display: flex;
    flex-direction: column;

    h1 {
      color: $blue;
      font-size: 40px;
      margin-bottom: 12px;
    }
    p {
      font-size: 18px;
      color: $lightblue;
    }
  }

  .contactData_wrapper {
    display: flex;
    flex-direction: column;
    gap: 42px;
    padding-left: 42px;
    border-left: 1px solid rgb(225, 225, 225);
    height: 24.6em;

    li {
      p {
        font-size: 16px;
        color: $lightblue;
        margin-bottom: 8px;
      }
      h4 {
        color: $blue;
        font-weight: 400;
        font-size: 17px;
      }
    }
  }
}
iframe {
  margin-bottom: -5px;
}
.copyright {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: $lightblue;
  padding: 28px;
  text-align: center;
  p {
    color: $white;
    font-size: 14px;
  }
}

@media (max-width: 1024px) {
  .contact-main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2em;
    padding: 7em 5% 3em 5%;

    .contactForm_wrapper {
      display: flex;
      flex-direction: column;

      h1 {
        line-height: 1;
        font-size: 38px;
        margin-bottom: 22px;
      }
      p {
        font-size: 16px;
      }
    }

    .contactData_wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 38px 0 0 0;
      border-left: none;
      border-top: 1px solid rgb(225, 225, 225);
      height: auto;
    }
  }
}
</style>