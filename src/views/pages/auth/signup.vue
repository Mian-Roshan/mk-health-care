<script setup lang='ts'>
   

</script>

<template>
   <div>
    <div class="wrapper d-flex flex-column justify-center align-center">
      <h1>Sign Up</h1>
      <h1 class="mt-2">Join for health Care Now!</h1>
      <v-form class="form" id="login-form" action="">
        <v-text-field
          variant="solo-filled"
          label="First Name"
          placeholder="User"
        ></v-text-field>
        <v-text-field
          variant="solo-filled"
          label="Last Name"
          placeholder="User"
        ></v-text-field>
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
          Sign Up
        </v-btn>
      </v-form>
      <h2 class="mt-4">
        Already have an account?
        <a style="color: #FAB915;"> Log In </a>
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
      background-color: #FAB915;
      border-radius: 18px;
      padding: 30px ;
      height: 100%;
      font-size: 15px;
      font-weight: 900;
      margin-top: 20px;
      color: #fff;
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