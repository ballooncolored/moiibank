<template>
<div class="interface-container">
  <script type="application/javascript">
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
</script> 
    <div class="interface-header">
      <h1>Мои карты</h1>
      <div class="interface-header-links">
        <a href="#block" rel="modal:open">Блокировка</a>
        <router-link to="/journals">История операций</router-link>
      </div>
    </div>
    <div class="i-grid-2">
              <div class="card-slider">
                <div class="slideshow-container">

                <div class="mySlides fade cardSlideItem" v-for="card of allCards"
                      :key="card.id" v-bin:class="card.working">
                  <div class="card-ellipse"></div>  
                  <div class="blockThatCard" v-if="!card.working">Карта<br>заблокирована</div>                    
                  <div class="card-slide">
                    
                    <div class="card-name"><h3>{{card.description}}</h3> <img class="card-logo" :src="card.logo" alt="">  </div>
                    <div class="card-balance"><h1>{{card.balance}} BYN</h1></div>
                    <div class="card-info"><h3 class="card-number">{{card.name}}</h3> <h3 class="card-date">03/25</h3></div>

                  </div>
                  
                </div>


                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>

                </div>
              </div>
      <div class="card-actions">
        <router-link to="/transfer" class="button">Перевод на карту</router-link>
        <a href="/transfer" class="button">Перевод на счет</a>
        <a href="" class="button">Лимиты</a>
      </div>
    </div>
    <div class="i-grid-2">
      <div class="fast-pay">
        <h1>Быстрые платежи</h1>
        <div class="fast-pay-actions">
          <a class="button" href="/payment">A1</a>
          <a class="button" href="/payment">MTC</a>
          <a class="button" href="/payment">life:)</a>
          <a class="button" href="/payment">Оплата по QR-коду</a>
        </div>
      </div>
      <div class="fast-atm">
        <h1>Банкоматы и отделения</h1>
        <div class="fast-atm-links">
          <a href="#atmMap" rel="modal:open">Карта</a>
          <a href="#atmTable" rel="modal:open">Список</a>
        </div>
      </div>
    </div>
    <div class="i-grid-2">
      <div class="online-ex">
        <h1>Онлайн-курсы</h1>
        <div class="course-table">
          <table>
              <tr>
                  <td>Валюта</td>
                  <td>Покупка</td>
                  <td>Продажа</td>
              </tr>
              <tr>
                  <td>USD</td>
                  <td style="text-align:right;">2.5200</td>
                  <td style="text-align:right;">2.5400</td>
              </tr>
              <tr>
                  <td>EUR</td>
                  <td style="text-align:right;">3.0600</td>
                  <td style="text-align:right;">3.0800</td>
              </tr>
              <tr>
                  <td>100 RUB</td>
                  <td style="text-align:right;">3.4450</td>
                  <td style="text-align:right;">3.4800</td>
              </tr>
          </table>
        </div>
      </div>
      <div class="visa-dream">
        <div class="visa-dream-container">
          <h3>Покупки с Visa - ближе к мечтам!</h3>
          <h3>Рекламная игра “Покупай с Visa”.<br>Исполняем ваши желания</h3>
          <a href="" class="button">Подробнее</a>
        </div>
      </div>
    <!-- </div>
    <div class="row"
      v-for="card of allCards"
      :key="card.id">
        <span>{{card.name}}</span>
        <span>{{card.balance}}</span>
        <span>{{card.working}}</span>
    </div>

    <div class="row"
      v-for="card of allCards"
      :key="card.id">
        <span>{{card.name}}</span>
        <span>{{card.balance}}</span>
        <span>{{card.working}}</span>
        <button class="delete"
        @click="blockCard(card)">Block</button>
    </div> -->

<div id="block" class="modal" style="max-width:500px;">
<h1>Блокировка карты</h1>
<table>
  <tr v-for="card of allCards"
      :key="card.id" v-bin:class="card.working" class="blockTableItem">
    <td><img :src="card.logo" alt=""></td>
    <td>{{card.name}}</td>
    <td>{{card.balance}} BYN</td>
    <td><button v-if="card.working" class="button"
        @click="blockCard(card)">Заблокировать</button></td>
    <td v-if="!card.working" style="position: absolute;
    left: 0;
    width: 100%;
    height: 75px;
    background: #cacacac9;
    padding: 0;"></td>
  </tr>
  
</table>

</div>

<div id="passwordModal" v-if="isB" @click="isB = false" style=" position: fixed; height: 100%; width: 100%; top: 0; left: 0; display:flex; justify-content: center; align-items: center; z-index:99999; "> <div style=" display: flex; justify-content: center; align-items: center; background: rgb(204 19 19 / 50%); width: 200px; height: 180px; border-radius: 20px; font-size:20px; color: rgba(252,255,102,1); text-align: center; font-weight: bold; z-index:99; ">
  <div> <img style="height: 50px;" src="https://api.iconify.design/ic:outline-done.svg?color=white">
  <br> Ваша<br>карта<br>заблокирована </div> </div>

<div id="atmTable" class="modal modalw" style="max-width:90%;">
  <h1>Список банкоматов и отделений<br></h1>
  <table>
    <thead>
<tr>
<th>Название</th><th>Адрес</th><th> </th><th>График работы</th><th>Время до закрытия</th>
</tr>
</thead><tbody class="table-body"><tr>
<td>Банкомат ЗАО «МТБанк» Банкомат</td><td>г. Минск, пр-т Независимости 164 (РКЦ №50)</td><td></td><td>Пн-Пт: 09:30-18:30,<br>
Сб: 10:00-18:00,<br>
Вс: Выходной</td><td>До закрытия 3 ч. 9 мин.</td>
</tr>
<tr>
<td>Банкомат ЗАО «МТБанк» Банкомат</td><td>г. Минск, ул. Логойский тракт, 35</td><td></td><td>Пн-Вс: Круглосуточно</td>
</tr>
<tr>
<td>Банкомат №241 ЗАО «МТБанк» Банкомат</td><td>г. Минск, ул. Железнодорожная, 23</td><td></td><td>Пн-Вс: Круглосуточно</td>
</tr>
<tr>
<td>Банкомат ЗАО «МТБанк» Банкомат</td><td>г. Минск, ул. Филимонова, 15</td><td></td><td>Пн-Вс: 07:00-23:00</td><td>До закрытия 7 ч. 39 мин.</td>
</tr>
<tr>
<td>Банкомат ЗАО «МТБанк» Банкомат</td><td>г. Минск, пр-т Независимости, 56 (казино ХО")</td><td></td><td>Пн-Вс: Круглосуточно</td>
</tr>
<tr>
<td>Банкомат ЗАО «МТБанк» Банкомат</td><td>г. Минск, ул. Мележа, 1 (ЦБУ "Парус")</td><td></td><td>Пн-Пт: 09:00-19:00,<br>
Сб-Вс: Выходной</td><td>До закрытия 3 ч. 39 мин.</td>
</tr>
<tr>
<td>Банкомат ЗАО «МТБанк» Банкомат</td><td>г. Минск, ул. Уманская, 54, (ТЦ "Глобо", 1-й этаж)</td><td></td><td>Пн-Вс: 09:00-22:00</td><td>До закрытия 6 ч. 39 мин.</td>
</tr>
<tr>
<td>Банкомат ЗАО «МТБанк» Банкомат</td><td>г. Минск, пр. Победителей 59 (казино "Виктория")</td><td></td><td>Пн-Вс: Круглосуточно</td>
</tr>
<tr>
<td>Банкомат ЗАО «МТБанк» Банкомат</td><td>г. Минск, пер. Промышленный, 12а (магазин "Ома")</td><td></td><td>Пн-Сб: 08:30-20:00,<br>
Вс: 08:30-19:00</td><td>До закрытия 4 ч. 39 мин.</td>
</tr>
<tr>
<td>Банкомат ЗАО «МТБанк» Банкомат</td><td>г. Минск, ул. Партизанский пр-т, 6а, 2 этаж (РКЦ №43)</td><td></td><td>Пн-Пт: 09:00-19:00,<br>
Сб-Вс: Выходной</td><td>До закрытия 3 ч. 39 мин.</td>
</tr>
</tbody></table>


</div>

<div id="atmMap" class="modal modalw" style="text-align: center; max-width:90%;">

<img src="/yandex.png" alt="">

</div>
    
</div>
</div>
 



</div>
</template>

<style scoped>


.modalw table {
  margin-top: 20px;
  background: #CDCDCD;
  color: #4F4F4F;
  border-radius: 10px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  overflow:hidden
}

.modalw th {
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  color: #CDCDCD !important;
  background: #4F4F4F !important;
}

.modalw td, .modal th {
  padding: 14px;
  vertical-align: middle;
}

.modalw img {
  border-radius: 10px;
}

#block.modal {
  background: #CDCDCD;
  
}
#block.modal table {
        margin-top: 20px;
    width: 100%;
}
#block.modal table img {
    height: 50px;
  }

#block.modal  table tr {
    box-shadow: 0px 6px 20px rgb(0 0 0 / 10%);
    position: relative;
}

#block.modal table td {
    padding: 10px;
    vertical-align: middle;
    text-align: center;
}
</style>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Card from '../models/card.model';
import CardsServiceInstance from '../services/cards.service';

@Component
export default class Cards extends Vue {

  private readonly cardsService = CardsServiceInstance;



  created(): void {
    this.getCards();
  }

  private readonly newCard: Card = { name: " ", working: true, balance: 0, amount:0 };

  private allCards: Card[] | null = null;



  async getCards(): Promise<void> {
    this.allCards = await this.cardsService.getCards();
  }

  // async createCard(): Promise<void> {
  //   await this.cardsService.createCard(this.newCard);
  //   this.newCard.name = null;
  //   await this.getCards();
  // }

  isB: boolean = false;

  async blockCard(card: Card): Promise<void> {
    await this.cardsService.blockCard(card);
    await this.getCards();
    this.isB = true;
  }

  // async deleteCard(id: number): Promise<void> {
  //   await this.cardsService.deleteCard(id);
  //   await this.getCards();
  // }
}
</script>