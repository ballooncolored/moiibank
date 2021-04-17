<template>
          <div class="interface-container">

            <div class="breadcrumbs">
              <a class="dark" href="?">Настройки</a> > <a href="?">Изменение пароля</a>
            </div>
            <div class="password-change">
              <p>На главной странице Интернет-банкинга нажмите вкладку «Забыли пароль». Для восстановления необходимо ввести: логин, под которым вы были зарегистрированы; номер мобильного телефона, который указывали в системе; адрес электронной почты. При вводе данных обратите внимание на регистр букв. Если вы прописывали в логине или адресе почты заглавные буквы, то при восстановлении они должны быть такими же.</p>
              <h2>Правила выбора пароля</h2>
              <p>
                <ol>
                  <li>Пароль должен содержать не менее 8 символов.</li>
                  <li>Пароль должен содержать заглавные и строчные буквы, цифры, пробелы и специальные символы.</li>
                  <li>Пароль не должен содержать личную информацию, которую легко узнать. Например: имя, фамилию или дату рождения.</li>
                  <li>Пароль не должен содержать очевидные и простые слова, фразы, устойчивые выражения и наборы символов, которые легко подобрать.</li>
                </ol>
              </p>
              <div class="password-form" v-for="user of allUsers" :key="user.id">
                <input :id="user.id" v-model="loginUser1" type="password" placeholder="Введите текущий пароль"/><img src="https://api.iconify.design/clarity:eye-show-line.svg?color=%234F4F4F" alt="" class="input-eye-icon"><br>
                <input :id="user.id" v-model="loginUser2" type="password" placeholder="Введите новый пароль"/><img src="https://api.iconify.design/clarity:eye-show-line.svg?color=%234F4F4F" alt="" class="input-eye-icon"><br>
                <input :id="user.id" v-model="loginUserNew.password" type="password" placeholder="Повторите новый пароль"/><img src="https://api.iconify.design/clarity:eye-show-line.svg?color=%234F4F4F" alt="" class="input-eye-icon"><br>
                <p v-if="!isRight"
          style="border-radius: 5px;
    background: #f15858;
    padding: 10px;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;">Проверьте введенные данные.</p>
                <div class="password-form-bottom">
                  <a @click="$router.go(-1)">Назад</a>
                  <button @click="changePassword()" class="button change-the-password">Изменить пароль</button>

                </div>
              </div>
              <div id="passwordModal" v-if="isChanged" @click="changeIsChanged()" style="
                position: fixed;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                display:flex;
                justify-content: center;
                align-items: center;
                z-index:99;
              ">
                <div style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: rgba(0,0,0,.5);
                  width: 200px;
                  height: 180px;
                  border-radius: 20px
                  font-size:24px;
                  color: rgba(252,255,102,1);
                  text-align: center;
                  font-weight: bold;
                  z-index:99;
                ">
                  <div><img height="50" src="https://api.iconify.design/ic:outline-done.svg?color=white"><br>
                  Пароль<br>успешно<br>изменен</div>
                </div>
              </div>
            </div>


          </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import User from '../models/user.model';
import UsersServiceInstance from '../services/users.service';

@Component
export default class Login extends Vue {


  private readonly usersService = UsersServiceInstance;

  loginUser1: string = "";
  private  loginUserNew: User = { username: "", password: "", logged: false};


isChanged: boolean = false;
isRight: boolean = true;

  created(): void {
    this.getUsers();
  }


 private allUsers: User[] | null = null;

  changeIsChanged(): void  {
    this.isChanged=false;
    this.isRight=true;
  }

  isLogged: boolean = true;

  async getUsers(): Promise<void> {
    this.allUsers = await this.usersService.getUsers();
  }

  async changePassword(user: User): Promise<void> {
    if (this.loginUser1 == this.allUsers[0].password){
        this.loginUserNew.password = this.loginUser1;
        console.log(this.loginUserNew);
        await this.usersService.changePassword(this.loginUserNew);
        this.isChanged=true;
        this.isRight=true;
        console.log(this.isChanged);
        } else {
        this.isChanged=false;
        this.isRight=false;
        }
    
    await this.getUsers();
  }


}
</script>