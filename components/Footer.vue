<template>
  <footer>
    <section class="footer_mainWrapper">
      <article class="footer_infoWrapper">
        <img
          src="@/assets/images/logo-2.svg"
          alt="Viviendas Santa Fe"
          class="logo"
        />
        <p>
          Vos lo imaginas,<br />
          nosotros lo construimos.
        </p>
        <SocialMediaLinks
          :classColor="[
            $device.isDesktop
              ? 'socialMedia_lightblue-mobile'
              : 'socialMedia_lightblue-mobile',
          ]"
        />
      </article>
      <article class="footer_infoWrapper">
        <div class="footer_infoWrapper-container">
          <h3>Contactanos</h3>
          <ul class="footer_list">
            <li><p>+54 9 (342) 433 1234</p></li>
            <li><p>+54 9 (342) 433 1234</p></li>
            <li><p>viviendassantafe@gmail.com</p></li>
          </ul>
        </div>
        <div class="footer_infoWrapper-container">
          <h3>Encontranos en</h3>
          <p><strong>Santa Fe</strong></p>
          <p>Saavedra 1699 CP 3000</p>
        </div>
      </article>
      <article class="footer_infoWrapper">
        <div class="footer_infoWrapper-container">
          <h3>Compania</h3>
          <ul class="footer_list">
            <li><a>Testimonios</a></li>
            <li><a>Nosotros</a></li>
            <li><a>Team</a></li>
            <li><a>Contacto</a></li>
          </ul>
        </div>
      </article>
      <article class="footer_infoWrapper">
        <div class="footer_infoWrapper-container">
          <h3>Servicios</h3>
          <ul class="footer_list">
            <li><a>Construcciones</a></li>
            <li><a>Modelos</a></li>
          </ul>
        </div>
      </article>
    </section>
    <section class="copyright">
      <p>© All right reserved. Viviendas Santa Fe SRL 2022</p>
    </section>
  </footer>
</template>

<script lang='ts'>
import SocialMediaLinks from './SocialMediaLinks.vue'

export default {
  name: 'Footer',
  components: { SocialMediaLinks },
}
</script>

<style lang='scss'>
@import '@/assets/main.scss';
footer {
  padding: 4em 10% 2em 10%;
  .footer_mainWrapper {
    display: flex;
    justify-content: space-between;
    padding: 1em 0 4em 0;
    border-bottom: 1px solid #eaeaea;

    .footer_infoWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 55px;
      .logo {
        max-width: 180px;
      }
      h3 {
        color: $blue;
        margin: 0 0 12px 0;
      }
      p {
        color: $lightblue;
        font-size: 16px;
      }
      .footer_list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: $lightblue;
        font-size: 16px;
      }
    }
  }
  .copyright {
    padding-top: 2em;
    color: $lightblue;
    font-size: 16px;
  }
}

@media (max-width: 1024px) {
  footer {
    padding: 4em 10% 2em 10%;
    .footer_mainWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em 0 2em 0;
      border-bottom: 1px solid #eaeaea;

      .footer_infoWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0;
        .footer_infoWrapper-container {
          margin: 10px 0;
        }
        .logo {
          max-width: 180px;
          margin-bottom: 18px;
        }
        h3 {
          color: $blue;
          margin: 0 0 12px 0;
        }
        p {
          font-size: 16px;
        }
        .footer_list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 16px;
        }
      }
    }
    .copyright {
      padding-top: 2em;
      font-size: 12px;
    }
  }
}
</style>