<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
</script>
<template>
  <div class="contacts">
    <div class="contacts-content">
      <p class="contacts__title">{{ t("Contacts") }}</p>
      <p class="contacts__item">
        <a
          href="https://github.com/AnisimovStas"
          target="_blank"
          class="contacts__link"
          >Git
        </a>
      </p>
      <p class="contacts__item">
        <a
          href="https://telegram.me/otpbard"
          target="_blank"
          class="contacts__link"
          >TG
        </a>
      </p>
      <p class="contacts__item">
        <a href="mailto: anisimov-stas.stas@yandex.ru" class="contacts__link">
          @
        </a>
      </p>
    </div>
  </div>
</template>
