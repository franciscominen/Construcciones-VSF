<template>
  <div class="main-team">
    <Navbar class="navbar-desktop" />
    <NavbarMobile class="navbar-mobile" />
    <ConsultModal />
    <main>
      <h1 data-aos='fade-in' data-aos-duration="500" >Equipo Viviendas Santa Fe</h1>
      <section class="teams_container">
        <article class="team_container" data-aos='fade-right' data-aos-duration="700" data-aos-delay='300'>
          <img src="@/assets/images/ventas.png" alt="" class="team_img" />
          <div class="team_containerInfo">
            <div>
              <img
                src="@/assets/images/icons/ventasIcon.svg"
                alt=""
                class="title_icon"
              />
              <h2>Equipo Ventas</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis sequi sapiente dolores culpa quibusdam quas dolor.
              Voluptas veritatis at, consequuntur veniam, reprehenderit eaque
              eligendi minus exercitationem corrupti quisquam fugit? Libero.
              Voluptas veritatis at, consequuntur veniam, reprehenderit eaque
              eligendi minus exercitationem corrupti quisquam fugit? Libero.
            </p>
          </div>
        </article>

        <article class="team_container" data-aos='fade-right' data-aos-duration="700" data-aos-delay='600'>
          <img src="@/assets/images/fabrica.png" alt="" class="team_img" />
          <div class="team_containerInfo">
            <div>
              <img
                src="@/assets/images/icons/fabricaIcon.svg"
                alt=""
                class="title_icon"
              />
              <h2>Equipo Fabrica</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis sequi sapiente dolores culpa quibusdam quas dolor.
              Voluptas veritatis at, consequuntur veniam, reprehenderit eaque
              eligendi minus exercitationem corrupti quisquam fugit? Libero.
              Voluptas veritatis at, consequuntur veniam, reprehenderit eaque
              eligendi minus exercitationem corrupti quisquam fugit? Libero.
            </p>
          </div>
        </article>
      </section>

      <section class="teamCards_container" data-aos='fade-up'>
        <article class="team_card">
          <div>
            <img src="@/assets/images/icons/mision.svg" alt="" />
            <h2>Mision</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            animi deleniti sapiente distinctio totam iure voluptatibus adipisci
            alias maiores reiciendis dicta praesentium nostrum vitae quidem
            harum hic! Veniam, sapiente asperiores?
          </p>
        </article>
        <article class="team_card">
          <div>
            <img src="@/assets/images/icons/vision.svg" alt="" />
            <h2>Vision</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            animi deleniti sapiente distinctio totam iure voluptatibus adipisci
            alias maiores reiciendis dicta praesentium nostrum vitae quidem
            harum hic! Veniam, sapiente asperiores?
          </p>
        </article>
        <article class="team_card">
          <div>
            <img src="@/assets/images/icons/valores.svg" alt="" />
            <h2>Valores</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            animi deleniti sapiente distinctio totam iure voluptatibus adipisci
            alias maiores reiciendis dicta praesentium nostrum vitae quidem
            harum hic! Veniam, sapiente asperiores?
          </p>
        </article>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NavbarMobile from '@/components/NavbarMobile.vue'
import ConsultModal from '@/components/ConsultModal.vue'
import Footer from '@/components/Footer.vue'
import aosMixin from '@/mixins/aos'

export default {
  name: 'Team',
  mixins: [aosMixin],
  components: {
    Footer,
    Navbar,
    NavbarMobile,
    ConsultModal,
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/main.scss';
.main-team {
  overflow-x: hidden;
  background: $lightblue url('@/assets/images/lightblue-pattern.svg') no-repeat
    fixed center 20em;
  background-size: contain;

  main {
    padding: 7.5em 15px 4em 15px;
    max-width: 76em;
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
    h1 {
      color: $green;
      font-size: 48px;
      margin-bottom: 0.5em;
    }
    .teams_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .team_container {
        display: flex;
        align-items: center;
        margin-bottom: 22px;
        .team_img {
          max-width: 600px;
          width: 100%;
          object-fit: cover;
          border: 1px solid $white;
          border-radius: 8px;
        }
        .team_containerInfo {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding-left: 12px;
          div {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            img {
              max-width: 82px;
              width: 100%;
              object-fit: cover;
              margin-right: 12px;
            }
            h2 {
              color: $blue;
              font-size: 42px;
            }
          }
          p {
            color: $white;
            font-size: 18px;
            line-height: 1.5;
            padding-left: 15px;
          }
        }
      }
    }

    .teamCards_container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      .team_card {
        max-width: 387px;
        width: 100%;
        object-fit: cover;
        background: $blue;
        border-radius: 6px;
        padding: 22px;
        border: 1px solid transparent;
        transition: 0.2s;
        div {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          img {
            max-width: 66px;
            width: 100%;
            object-fit: cover;
            margin-right: 12px;
          }
          h2 {
            color: $white;
            font-size: 28px;
          }
        }
        p {
          color: $lightblue;
          font-weight: 600;
        }
        &:hover {
          border: 1px solid $white;
        }
      }
    }
  }
}

@media (max-width: 980px) {
  .main-team {
    background: $lightblue url('@/assets/images/lightblue-pattern.svg')
      no-repeat fixed center 20em;
    background-size: 250%;

    main {
      padding: 6em 15px 4em 15px;
      h1 {
        text-align: center;
        font-size: 38px;
      }
      .teams_container {
        .team_container {
          flex-direction: column;
          margin-bottom: 22px;
          .team_img {
            margin-bottom: 16px;
          }
          .team_containerInfo {
            align-items: center;
            padding-left: 0;
            div {
              h2 {
                font-size: 30px;
              }
              img {
                max-width: 60px;
              }
            }
            p {
              padding-left: 0;
              max-width: 600px;
              width: 100%;
              object-fit: cover;
              text-align: center;
            }
          }
        }
      }

      .teamCards_container {
        margin-top: 1em;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
