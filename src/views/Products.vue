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
              <h1>Мои продукты</h1>
              <div class="interface-header-links">
                <!-- <a href="">Блокировка</a> -->
                <a href="/journals">История операций</a>
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
                <a href="#qCard" rel="modal:open" class="button big-button"><img class="icon" src="https://api.iconify.design/carbon:add-alt.svg?color=%23FCFF66" alt="">Оформить заявку<br>на карту</a>
              </div>
            </div>
            <div class="i-grid-2 align-btm">
              <div class="products-actions">
                <a href="#qLoan" rel="modal:open" class="button big-button"><img class="icon" src="https://api.iconify.design/carbon:add-alt.svg?color=%23FCFF66" alt="">Оформить заявку<br>на кредит</a>
                <a href="#qDeposit" rel="modal:open" class="button big-button"><img class="icon" src="https://api.iconify.design/carbon:add-alt.svg?color=%23FCFF66" alt="">Оформить заявку<br>на размещение<br>средств</a>
                
              </div>
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
            </div>




<div id="qCard" class="modal">

          <h1>Заявка на получение карты</h1>
      <table>
      <tr>
        <td><label for="">Фамилимя</label></td>
        <td><input disabled type="text" value="Петрова"> </td>
      </tr>
      <tr>
        <td><label for="">Имя</label></td>
        <td><input disabled type="text" value="Анна"></td>
      </tr>
      <tr>
        <td><label for="">Отчество</label></td>
        <td><input disabled type="text" value="Николаевна"></td>
      </tr>
      <tr>
        <td>Выберите карту</td>
        <td>
            <br>
            <input type="radio" value="МИБ ИКС Карта" v-model="newJournal.description" name="chooseCard">
            <label><img style="width:64px;" src="https://x-card.mtbank.by/images/tild3735-6635-4038-b862-366665333962__card_v2.png" alt=""></label>
            <br>
            <input type="radio" value="Карта Халва Микс" v-model="newJournal.description" name="chooseCard">
            <label><img style="width:60px;" src="https://www.mtbank.by/upload/iblock/eab/Card_Product_Retail_Halva-max_562x340x2.png" alt=""></label>
            <br>
            <input type="radio" value="Карта Hello, World" v-model="newJournal.description" name="chooseCard">
            <label><img style="width:60px;" src="https://recard.by/images/card/330d2985d7d49ab281c4e8e2b63ef9a8.png" alt=""></label>
            <br>
        </td>
      </tr>
      <tr>
        <td><label for="">Желательное время звонка</label></td>
        <td><input type="text" ></td>
      </tr>
      <tr>
        <td></td>
        <td><button class="button" @click="cardQuery();">Отправить</button></td>
      </tr>
      </table>
</div>

<div id="qLoan" class="modal">

          <h1>Заявка на кредит</h1>
      <table>
      <tr>
        <td><label for="">Фамилимя</label></td>
        <td><input disabled type="text" value="Петрова"> </td>
      </tr>
      <tr>
        <td><label for="">Имя</label></td>
        <td><input disabled type="text" value="Анна"></td>
      </tr>
      <tr>
        <td><label for="">Отчество</label></td>
        <td><input disabled type="text" value="Николаевна"></td>
      </tr>
      <tr>
        <td>Выберите кредит</td>
        <td>
            <br>
            <input type="radio" value="Кредит Проще простого" v-model="newJournal.description" name="chooseCard">
            <label><h3>Проще простого</h3><p>Потребительский кредит с процентной ставкой 16 %</p></label>
            <br>
            <input type="radio" value="Кредит Выручай" v-model="newJournal.description" name="chooseCard">
            <label><h3>Выручай</h3><p>Потребительский кредит с процентной ставкой 28 %</p></label>
            <br>
            <input type="radio" value="Еще больше" v-model="newJournal.description" name="chooseCard">
            <label><h3>Еще больше</h3><p>Кредит без справок</p></label>
            <br>
        </td>
      </tr>
      <tr>
        <td><label for="">Необходимая сумма</label></td>
        <td><input type="text" ></td>
      </tr>
      <tr>
        <td></td>
        <td><button class="button" @click="cardQuery();">Отправить</button></td>
      </tr>
      </table>
</div>

<div id="qDeposit" class="modal">

          <h1>Заявка на размещение средств</h1>
      <table>
      <tr>
        <td><label for="">Фамилимя</label></td>
        <td><input disabled type="text" value="Петрова"> </td>
      </tr>
      <tr>
        <td><label for="">Имя</label></td>
        <td><input disabled type="text" value="Анна"></td>
      </tr>
      <tr>
        <td><label for="">Отчество</label></td>
        <td><input disabled type="text" value="Николаевна"></td>
      </tr>
      <tr>
        <td><label for="">Сумма депозита</label></td>
        <td><input type="text" ></td>
      </tr>
      <tr>
        <td><label for="">Откуда вы узнали о депозите?</label></td>
        <td><select name="" id="" v-model="newJournal.description">
          <option value="Депозит">Реклама</option>
          <option value="Депозит">Рекомендация друга или коллеги</option>
          <option value="Депозит">Интернет-поиск</option>
          </select></td>
      </tr>
      <tr>
        <td></td>
        <td><button class="button" @click="cardQuery();">Отправить</button></td>
      </tr>
      </table>
</div>

<div id="passwordModal" v-if="isQueried" @click="isQueried = false" style=" position: fixed; height: 100%; width: 100%; top: 0; left: 0; display:flex; justify-content: center; align-items: center; z-index:99999; "> <div style=" display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,.5); width: 200px; height: 180px; border-radius: 20px; font-size:24px; color: rgba(252,255,102,1); text-align: center; font-weight: bold; z-index:99; ">
  <div> <img style="height: 50px;" src="https://api.iconify.design/ic:outline-done.svg?color=white">
  <br> Ваша<br>заявка<br>зарегестрирована </div> </div>

          </div>



</div>

</template>

<style scoped>

  .modal {
    background: #cdcdcd
  }

  .modal input[type="text"] {
    font-family: inherit;
    outline: 0;
    color: #4F4F4F;
    background: #CDCDCD;
    width: 318px;
    border: 1px solid #4F4F4F;
    border-radius: 5px;
    /* margin: 3px 0 15px 0; */
    padding: 15px;
    box-sizing: border-box;
    font-size: 18px;
    height: 48px;
  }

  .modal label img {
    margin: 0 15px;
    
  }

  .modal label {
    vertical-align: middle;
  }

  input[type="radio"] {
      transform: scale(1.5);
  }

  .modal td {
    vertical-align: middle;
    padding: 5px;
  }

  .modal h1 {
    margin-bottom: 20px;
  }
  .modal select {
  font-family: inherit;
  outline: 0;
  color: #4F4F4F;
  background: #CDCDCD;
  width: 318px;
  border: 1px solid #4F4F4F;
  border-radius: 5px;
  margin: 3px 0 15px 0;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 18px;
  height: 48px;
}
</style>

<script lang="ts">


import { Component, Vue } from 'vue-property-decorator';

import Journal from '../models/journal.model';
import JournalsServiceInstance from '../services/journals.service';

import Card from '../models/card.model';
import CardsServiceInstance from '../services/cards.service';


@Component
export default class Product extends Vue {

  private readonly journalsService = JournalsServiceInstance;
  private readonly cardsService = CardsServiceInstance;


  created(): void {
    this.getJournals();
    this.getCards();
  }

  private readonly newJournal: Journal = { variant:"",date:"",amount:0, description:"" };
  private allJournals: Journal[] | null = null;

  private readonly newCard: Card = { name: " ", working: true, balance: 0, amount:0 };
  private allCards: Card[] | null = null;


  async getJournals(): Promise<void> {
    this.allJournals = await this.journalsService.getJournals();
  }

    async getCards(): Promise<void> {
    this.allCards = await this.cardsService.getCards();
  }

  isQueried: boolean = false;

  async cardQuery(journal: Journal): Promise<void> {
    await this.getJournals();
    console.log(this.newJournal);
    this.newJournal.variant = "Заявка на получение карты";
    this.newJournal.date = new Date().toLocaleString();

    this.isQueried = true;
    
    console.log(this.newJournal);

    await this.journalsService.cardQuery(this.newJournal);
    await this.getJournals();
  }



}
</script>
