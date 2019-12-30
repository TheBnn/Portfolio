<template>
  <div>
    <section class="section section-bg-home" data-anchor="home">
      <titleMain></titleMain>
    </section>

    <section class="section" data-anchor="about">
      <div class="container">
        <div class="title">Обо мне</div>
        <div class="row">
          <div class="col-md-12">
            <div class="about">

            </div>
          </div>
          <a href="#portfolio"> <span class="button_down"> <i class="fa fa-chevron-down"></i></span></a>
        </div>
      </div>
    </section>

    <section class="section works" data-anchor="portfolio">

      <gridWorks></gridWorks>

      <a href="#contacts"> <span class="button_down"> <i class="fa fa-chevron-down"></i></span></a>
    </section>

    <section class="section" data-anchor="contacts">
      <div class="container">
        <div class="title">Контакты</div>
        <div class="containers">
          <div class="box-content">
            <div class="content">
              <h2>01</h2>
              <h3>Email</h3>
              <p>ds.as.12@mail.ru</p>
              <a href="#" class="vs-hidden">Написать мне</a>
            </div>
          </div>
          <div class="box-content">
            <div class="content">
              <h2>02</h2>
              <h3>VK</h3>
              <p>vk.com/id291298013</p>
              <a href="https://vk.com/id291298013">Перейти на страничку</a>
            </div>
          </div>
          <div class="box-content">
            <div class="content">
              <h2>03</h2>
              <h3>Телефон</h3>
              <p>+7 (917) 205-88-02</p>
              <a href="#" class="vs-hidden">Позвонить мне</a>
            </div>
          </div>
          <div class="box-content">
            <div class="content">
              <h2>04</h2>
              <h3>Телеграм</h3>
              <p>TheBanana_1</p>
              <a href="https://t.me/TheBanana_1">Написать мне</a>
            </div>
          </div>
        </div>
        <a href="#home"> <span class="button_down"> <i class="fa fa-chevron-up"></i></span></a>
      </div>
    </section>
  </div>
</template>

<script>
    import gridworks from '../js/gridWorksVue.vue'
    import titlemain from '../js/infoTitle.vue'

    export default {
        components: {
            gridworks,
            titlemain
        },
        computed: {
            username() {
                return this.$route.params.username
            }
        },
        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        }
    }
</script>
<style>

</style>