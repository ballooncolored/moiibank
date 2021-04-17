<template>
<div class="up">

<div class="login-menu">
  <div class="login-menu-container">
    <nav>
      <a href="#">Что такое интернет-банкинг?</a>
      <a href="#">Инструкция</a>
      <a href="#">Правила пользования</a>
      <a href="#">Онлайн-консультант</a>
    </nav>
  </div>
</div>
<main class="login-page">
  <div class="login-page-container">
    <h2>Интернет-банкинг</h2>
    <div class="login-page-form">
      <form class="login-form">
        <h3>Вход</h3>
        <div v-for="user of allUsers"
      :key="user.id">
          <label for="">Логин</label>
          <input type="text" :id="user.id"
          v-model="loginUser.username"
          >
          <label for="">Пароль</label>
          <input type="password"
          :id="user.id"
          v-model="loginUser.password"
          >          
          <a class="button"
          @click="checkUser(user)">Войти</a>
          <p v-if="!isLogged"
          style="border-radius: 5px;
    background: #f15858;
    padding: 10px;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;">Данные введены неверно.</p>


        </div>
        <p><a href="#">Регистрация</a></p>
      </form>
    </div>
  </div>
</main>
<!-- 
    <div class="row"
      v-for="user of allUsers"
      :key="user.id">
        <label :for="1">{{user.username}}</label>
        <label :for="1">{{user.password}}</label>
        
        <input type="text"
          :id="user.id"
          v-model="loginUser.username"
          >
          <input type="text"
          :id="user.id"
          v-model="loginUser.password"
          >
          <button class="create"
        @click="changePassword(user)">change</button>
        <button
        @click="checkUser(user)">log</button>
    </div>
<br>
   -->
   

</div>
</template>

<script lang="ts">


import { Component, Vue } from 'vue-property-decorator';
import User from '../models/user.model';
import UsersServiceInstance from '../services/users.service';

@Component
export default class Login extends Vue {
  private readonly usersService = UsersServiceInstance;

  private  loginUser: User = { username: "", password: "", logged: false};


 private allUsers: User[] | null = null;

  created(): void {
    this.getUsers();
  }

  isLogged: boolean = true;

  async getUsers(): Promise<void> {
    this.allUsers = await this.usersService.getUsers();
  }

  async changePassword(): Promise<void> {
    await this.usersService.changePassword(this.loginUser);
    await this.getUsers();
  }

  async checkUser(): Promise<void> {
    await this.getUsers();
    this.isLogged = true;
    if(this.allUsers[0].username == this.loginUser.username 
    && this.allUsers[0].password == this.loginUser.password ) {
      this.$router.push({ path: '/cards' });
    } else {
      this.isLogged = false;
    }
    }


}
</script>

<style scoped>
.up {
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 9;
}
</style>