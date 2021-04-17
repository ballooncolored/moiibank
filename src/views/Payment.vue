<template>
      <div class="interface-container">
        <div class="breadcrumbs">
          <a class="dark" href="?">Платежи</a> > <a href="?">Оплата услуг</a>
        </div>
        <div class="interface-header">
          <h2>Избранные платежи</h2>
          <div class="interface-header-links">
            <a href="#addPayment" rel="modal:open" class="button medium-button"><h5>{{favQty}} платежа<br><span>Добавить</span></h5><img class="icon" src="https://api.iconify.design/carbon:add-alt.svg?color=%23FCFF66" alt=""></a>
          </div>
        </div>
        <div class="i-grid-2">
          <div class="payments-fav">
            <div class="payment-item" v-for="favorite of allFavorites" :key="favorite.id">
              <div class="payment-info">
                <h3>Платеж ЕРИП</h3>
                <h3>Код услуги: <span>{{favorite.code}}</span></h3>
              </div>
              <div class="payment-price">
                <h3>{{favorite.amount}} BYN</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="i-grid-2">
          <div class="payment-search">
          <img class="payment-search-icon" src="https://api.iconify.design/ph:magnifying-glass.svg?color=%234F4F4F" alt="">
              <form>
                <div class="form-group">
                  <select id="select-payment" class="form-control" placeholder="Поиск услуг ЕРИП">
                    <option value="">Поиск услуг ЕРИП</option>
                    <optgroup label="Мобильная связь">
                      <option value="4863394">A1</option>
                      <option value="4894182">life:)</option>
                      <option value="4602705"> МТС</option>
                    </optgroup>
                    <optgroup label="ИТ-услуги">
                      <option value="4906162">АЙЭМЛЭБ - iKassa</option>
                      <option value="4534264">Мобикон-Медиа - М-Беларусбанк</option>
                      <option value="4283775">Открытый контакт - EasyPay</option>
                      <option value="4243497">Хуткi Грош</option>
                      <option value="4716071">Эксат-Лаб</option>
                    </optgroup>
                    <optgroup label="Электронное праительство">
                      <option value="4369558">РУЦ для физических лиц</option>
                      <option value="4560268">РУЦ для юридических лиц</option>
                      <option value="4380266">Электронные услуги ОАИС</option>
                    </optgroup>
                    <optgroup label="Красота и здоровье">
                      <option value="4705168">Модум-наша косметика</option>
                      <option value="4641554">Мэзон Групп</option>
                      <option value="4609596">Мэри Кэй</option>
                      <option value="4562893">Никтан плюс</option>
                      <option value="4912638">Нинуа плюс</option>
                      <option value="4340795">Орифлэйм Косметикс - Oriflame</option>
                      <option value="4654456">Рич Кингс</option>
                      <option value="4243906">Сандбар</option>
                    </optgroup>
                  </select>
                </div>
                <a style="margin-top: 15px;" class="button" href="#cardPayment" rel="modal:open">Оплатить</a>
              </form>
          </div>
        </div>
        <div class="i-grid-2">
          <div class="fast-pay">
            <h1>Быстрые платежи</h1>
            <div class="fast-pay-actions">
              <a class="button" href="#cardPayment" rel="modal:open">A1</a>
              <a class="button" href="#cardPayment" rel="modal:open">MTC</a>
              <a class="button" href="#cardPayment" rel="modal:open">life:)</a>
              <a class="button" href="">Оплата по QR-коду</a>
            </div>
          </div>
        </div>
    
<div id="addPayment" class="modal" style="">
  <h2>Добавить платеж в избранное</h2>

          <div class="payment-search">
          <img class="payment-search-icon" src="https://api.iconify.design/ph:magnifying-glass.svg?color=%234F4F4F" alt="">
              <form>
                <div class="form-group">
                  <select id="select-payment2" class="form-control" placeholder="Поиск услуг ЕРИП">
                    <option value="">Поиск услуг ЕРИП</option>
                    <optgroup label="Мобильная связь">
                      <option value="4863394">A1</option>
                      <option value="4894182">life:)</option>
                      <option value="4602705"> МТС</option>
                    </optgroup>
                    <optgroup label="ИТ-услуги">
                      <option value="4906162">АЙЭМЛЭБ - iKassa</option>
                      <option value="4534264">Мобикон-Медиа - М-Беларусбанк</option>
                      <option value="4283775">Открытый контакт - EasyPay</option>
                      <option value="4243497">Хуткi Грош</option>
                      <option value="4716071">Эксат-Лаб</option>
                    </optgroup>
                    <optgroup label="Электронное праительство">
                      <option value="4369558">РУЦ для физических лиц</option>
                      <option value="4560268">РУЦ для юридических лиц</option>
                      <option value="4380266">Электронные услуги ОАИС</option>
                    </optgroup>
                    <optgroup label="Красота и здоровье">
                      <option value="4705168">Модум-наша косметика</option>
                      <option value="4641554">Мэзон Групп</option>
                      <option value="4609596">Мэри Кэй</option>
                      <option value="4562893">Никтан плюс</option>
                      <option value="4912638">Нинуа плюс</option>
                      <option value="4340795">Орифлэйм Косметикс - Oriflame</option>
                      <option value="4654456">Рич Кингс</option>
                      <option value="4243906">Сандбар</option>
                    </optgroup>
                  </select>
                </div>
              </form>
          </div>
  <table>
    <tr>
      <td>Выберите карту</td>
      <td>
          <select name="select-card" id="slecttwo" v-model="newFavorite.source">
            <option value="choose" selected>Выберите из списка</option>
            <option v-for="card of allCards" :key="card.id" v-bind:value="card.id">{{card.name}} ({{card.balance}} BYN)</option></select>
      </td>
    </tr>
    <tr>
      <td>Сумма</td>
      <td> <input type="number" v-model="newFavorite.amount"></td>
    </tr>
    <tr>
      <td>Комиссия</td>
      <td><span>{{newFavorite.amount * 0.01}} BYN</span></td>
    </tr>
    <tr>
      <td></td>
      <td><button @click="newFav();" class="button">Добавить</button></td>
    </tr>
  </table>

</div>

<div id="cardPayment" class="modal" style="">
  <h2>Оплатить</h2>
  <table>
    <tr>
      <td>Выберите карту</td>
      <td>
          <select name="select-card" id="slecttwo" v-model="newCard.id">
            <option value="choose" selected>Выберите из списка</option>
            <option v-for="card of allCards" :key="card.id" v-bind:value="card.id">{{card.name}} ({{card.balance}} BYN)</option></select>
      </td>
    </tr>
    <tr>
      <td>Сумма</td>
      <td> <input type="number" v-model="transferAmount"></td>
    </tr>
    <tr>
      <td>Комиссия</td>
      <td><span>{{transferAmount * 0.01}} BYN</span></td>
    </tr>
    <tr>
      <td></td>
      <td><button @click="makeCardTransfer();" class="button">Оплатить</button></td>
    </tr>
  </table>

</div>

<div id="passwordModal" v-if="isQ" @click="isQ = false" style=" position: fixed; height: 100%; width: 100%; top: 0; left: 0; display:flex; justify-content: center; align-items: center; z-index:99999; "> <div style=" display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,.5); width: 200px; height: 180px; border-radius: 20px; font-size:24px; color: rgba(252,255,102,1); text-align: center; font-weight: bold; z-index:99; ">
  <div> <img style="height: 50px;" src="https://api.iconify.design/ic:outline-done.svg?color=white">
  <br>Платеж<br>добавлен<br>в избранное </div> </div>
      </div>

      <div id="passwordModal" v-if="isTransfered" @click="isTransfered = false" style=" position: fixed; height: 100%; width: 100%; top: 0; left: 0; display:flex; justify-content: center; align-items: center; z-index:99999; "> <div style=" display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,.5); width: 200px; height: 180px; border-radius: 20px; font-size:24px; color: rgba(252,255,102,1); text-align: center; font-weight: bold; z-index:99; ">
  <div> <img style="height: 50px;" src="https://api.iconify.design/ic:outline-done.svg?color=white">
  <br>Опалата<br>успешно<br>проведена</div> </div>
      </div>

      </div>
      
      
</template>


<script lang="ts">


import { Component, Vue } from 'vue-property-decorator';

import Card from '../models/card.model';
import CardsServiceInstance from '../services/cards.service';

import Favorite from '../models/favorite.model';
import FavoritesServiceInstance from '../services/favorites.service';

@Component
export default class Payment extends Vue {

private readonly favoritesService = FavoritesServiceInstance;
private newFavorite: Favorite = { name: null, code: 0, amount: 0, source: null };
private readonly cardsService = CardsServiceInstance;
private readonly newCard: Card = { name: null, balance:0,working:true, amount:0};

  private allCards: Card[] | null = null;
  private allFavorites: Favorite[] | null = null;

  created(): void {
    this.getCards();
    this.getFavorites();
  }

  async getCards(): Promise<void> {
    this.allCards = await this.cardsService.getCards();
  }

  favQty: number = 0;
  
  async getFavorites(): Promise<void> {
    this.allFavorites = await this.favoritesService.getFavorites();
    this.favQty = this.allFavorites.length;
  }

  isQ: boolean = false



  async newFav(favorite: Favorite): Promise<void> {
    await this.getFavorites();
    console.log(this.newFavorite);

    this.newFavorite.name = "Код услуги";
    this.newFavorite.code = Math.floor( (4240000 - 0.5 + Math.random() * (5240000 - 4240000 + 1)) ) ;

    console.log(this.newFavorite);

    await this.favoritesService.newFav(this.newFavorite);

    this.isQ = true;
    this.newFavorite = { name: null, code: 0, amount: 0, source: null };
    await this.getFavorites();

    this.newFavorite.code = 0;

  }

  transferAmount: number = 0;
  isTransfered: boolean = false;
  
  async makeCardTransfer(card: Card): Promise<void> {
    await this.getCards();

    this.newCard.balance = this.allCards[this.newCard.id - 1].balance;
    this.newCard.amount = this.transferAmount;

    await this.cardsService.makeCardTransfer(this.newCard);
    await this.getCards();
    this.isTransfered = true;
  }


}
</script>

<style scoped>
  .modal {
    background: #cdcdcd
  }

  .modal input {
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
    padding: 15px 5px;
  }

  .modal h1 {
    margin-bottom: 20px;
  }

.modal select#slecttwo {
  font-family: inherit;
    outline: 0;
    color: #4F4F4F;
    background: #CDCDCD;
    width: 318px;
    border: 1px solid #4F4F4F;
    border-radius: 5px;
    padding: 0 12px;
    box-sizing: border-box;
    font-size: 18px;
    height: 48px;
}

</style>
