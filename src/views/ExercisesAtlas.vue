<script setup></script>
<template>
  <div class="EA">
    <div class="EA-content">
      <div class="EA-slides">
        <div class="CSSgal">
          <!-- Don't wrap targets in parent -->
          <s id="s1"></s>
          <s id="s2"></s>
          <s id="s3"></s>
          <s id="s4"></s>

          <div class="slider">
            <div>
              <img class="slider__image" src="@/assets/ExercisesAtlas.png" />
            </div>
            <div style="background: #85b">
              <h2>Slide 2</h2>
            </div>
            <div style="background: #e95">
              <h2>Slide 3</h2>
            </div>
            <div style="background: #e59">
              <h2>Slide 4</h2>
            </div>
          </div>

          <div class="prevNext">
            <div><a href="#s4"> &#60; </a><a href="#s2">&#62;</a></div>
            <div><a href="#s1">&#60;</a><a href="#s3">&#62;</a></div>
            <div><a href="#s2">&#60;</a><a href="#s4">&#62;</a></div>
            <div><a href="#s3">&#60;</a><a href="#s1">&#62;</a></div>
          </div>

          <div class="bullets">
            <a href="#s1">1</a>
            <a href="#s2">2</a>
            <a href="#s3">3</a>
            <a href="#s4">4</a>
          </div>
        </div>
      </div>
      <div class="EA-text">
        <h1 class="text__title">Exercises Atlas</h1>
        <div class="text__description">
          <p>
            This web app helps find out new exercises for each muscle with some
            descripted information about it (general rules, instruction, video)
          </p>
        </div>
        <div class="Text-Stack">
          <h2 class="Text-Stack__title">Stack of used technology</h2>
          <p class="Text-Stack__text">vue | something else</p>
        </div>
        <div class="text-links">
          <h2 class="text-links__title">Links</h2>
          <p class="text-links__text">gitHub: <a>git</a></p>
          <p class="text-links__text">Production build: <a>git</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
