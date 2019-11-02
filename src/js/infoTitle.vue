<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 box">
        <div class="title-name">
          <div class="title-name__item">{{title}}</div>
          <div class="title-name__item_modify">{{modify}}</div>
        </div>
      </div>
      <a href="#about"> <span class="button_down"> <i class="fa fa-chevron-down"></i></span></a>
    </div>
  </div>
</template>

<script>
  export default {
      data(){
          return {
              title: "Мельников Константин",
              modify: "FRONT-END / WEB-DEVELOPER"
          }
      }
  }
</script>

<style>

</style>