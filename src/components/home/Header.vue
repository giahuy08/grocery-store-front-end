<template>
  <div class="flex justify-between home-header">
    <div class="home-header-logo">
      <img src="@/assets/icons/logo.svg" class="home-header-logo" alt="" />
      <div class="column">
        <div class="home-logo-title">Groceyish</div>
        <div class="home-logo-desc">GROCERY</div>
      </div>
    </div>
    <div class="header-search">
      <q-select v-model="selectedType" :options="filters" label="Standard" />

      <q-input v-model="inputText" class="header-search-input" label="Search for items..." />
      <q-btn size="md" color="primary" icon="search" class="header-search-btn" />
    </div>
    <div class="header-action">
      <div class="header-wishlist">
        <q-icon name="heart" />
        Wishlist
      </div>
      <div class="header-cart">
        <q-icon name="cart" />
        <div class="header-cart-info">
          Mycart
          <span class="header-cart-price">$21</span>
        </div>
        <q-icon />
      </div>
    </div>
    <div class="header-profile">
      <img />
      <div class="header-profile-name">Ramzi cherif</div>
      <q-icon class="keyboard_arrow_down" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const filters = ref(['All Categories', 'All Products'])
const profileMenus = ref(['Profile', 'Settings', 'Log out'])
const selectedType = ref('All Categories')
const inputText = ref('')
</script>
<style scoped>
.home-header {
  margin: 0 auto;
  padding: 10px 40px;
}

.home-header-logo {
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.home-logo-title {
  font-size: 26px;
  color: var(--primary-color);
  font-weight: 700;
}

.home-logo-desc {
  color: #adadad;
  font-weight: 400;
}

.header-search {
  display: flex;
  align-items: center;
}

.header-search-btn {
  padding: 10px 15px;
  background-color: var(--primary-color) !important;
}

.header-search-input {
  width: 500px;
}
</style>
