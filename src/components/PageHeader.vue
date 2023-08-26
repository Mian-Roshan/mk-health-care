<script setup lang='ts'>

</script>
<template>
    <header>
      <div class="header">
        <div class="header-logo" style="min-width:25%;">
          <HeaderLogo />
        </div>
        <ul class="menu-list">
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/provider">
              Provider
            </a>
          </li>
          <li>
            <a href="">
              Patient
            </a>
          </li>
          <li>
            <a href="">
              Request care
            </a>
          </li>
        </ul>
        <router-link to="/login">
          <button class="header-btn">
            Login
          </button>
        </router-link>
      </div>
    </header>
</template>

<style scoped lang="scss">
header {
  background-color: #ffffff;
}
</style>

