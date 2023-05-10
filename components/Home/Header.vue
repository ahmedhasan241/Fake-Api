<template>
  <div id="carouselExample" class="slide-show carousel slide mb-5">
    <div class="container carousel-inner text-light">
      <div class="carousel-item active py-3 px-5 text-center">
        <div class="row justify-content-md-around">
          <div class="col-xs-12 col-lg-5 my-5 px-2">
            <h1>Mac Book Pro</h1>
            <p class="mt-5 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              temporibus, totam adipisci accusamus illo odio voluptatem rerum
              velit alias aliquam quisquam autem perspiciatis illum tempora
              officiis, quod odit modi! Minima!
            </p>
          </div>
          <div class="col-lg-4 d-none d-lg-block mt-5">
            <img src="@/assets/images/50061505_575246.png" alt="..." />
          </div>
        </div>
      </div>
      <div class="carousel-item py-3 px-5 container text-center">
        <div class="row justify-content-md-around">
          <div class="col-xs-12 col-lg-5 my-5 px-2">
            <h1>Iphone Xs Max</h1>
            <p class="mt-5 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              temporibus, totam adipisci accusamus illo odio voluptatem rerum
              velit alias aliquam quisquam autem perspiciatis illum tempora
              officiis, quod odit modi! Minima!
            </p>
          </div>
          <div class="col-lg-4 d-none d-lg-block">
            <img src="@/assets/images/Mask Group 1.png" alt="..." />
          </div>
        </div>
      </div>
      <div class="carousel-item py-3 px-5 container text-center">
        <div class="row justify-content-md-around">
          <div class="col-xs-12 col-lg-5 my-5 px-2">
            <h1>Iphone 6 Plus</h1>
            <p class="mt-5 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              temporibus, totam adipisci accusamus illo odio voluptatem rerum
              velit alias aliquam quisquam autem perspiciatis illum tempora
              officiis, quod odit modi! Minima!
            </p>
          </div>
          <div class="col-lg-4 d-none d-lg-block">
            <img src="@/assets/images/pic.png" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
.slide-show {
  width: 100%;
  height: 420px;
  background-image: linear-gradient(#fd4053, #a95cd6);
}
</style>
