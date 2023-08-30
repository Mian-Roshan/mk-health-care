<script setup lang='ts'>
   

</script>

<template>
  <div>
    <div class="header">
      <div class="header-logo">
        <HeaderLogo />
      </div>
    </div>
    <div class="wrapper d-flex flex-column justify-center align-center">
      <h1>Sign in</h1>
      <h1 class="mt-2">Welcome back!</h1>
      <v-form class="form" id="login-form" action="">
        <v-text-field
          variant="solo-filled"
          label="Email"
          placeholder="User@gmial.com"
        ></v-text-field>
        <v-text-field
          variant="solo-filled"
          label="Password"
          placeholder="Password"
          type="password"
        ></v-text-field>
        <v-btn class="action-btn">
          Sign in
        </v-btn>
      </v-form>
      
      <h2 class="mt-4 link">
        <router-link to="/password-recovery"> Forgot Password ? </router-link>
      </h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    color: #033F42;
    min-height: 100vh;
    padding: 30px;
  }
  .form {
    width: 100%;
    flex-direction: column;
    max-width: 500px;
    margin-top: 30px;
    font-size: 11px;
    .action-btn {
      width:100%;
      background-color: $primary;
      border-radius: 18px;
      padding: 30px ;
      height: 100%;
      font-size: 15px;
      font-weight: 900;
      margin-top: 20px;
      color: #fff;
    }
  }
  .link {
    a {
      text-decoration: none;
      color: inherit;
    }
  }
</style>
<style lang="scss"> 
  #login-form {
    label {
      font-weight: 900;
    }
    .v-field {
      border-radius: 18px;
      background-color: #F0F3F6;
      margin-top: 10px;
    }
    .v-field__field {
      padding: 10px;
    }
  }
</style>