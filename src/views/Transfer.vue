<template>
      <div class="interface-container">
        <div class="interface-header">
          <h1>Перевод на карту</h1>
          <div class="interface-header-links">
            <a href="">Тарифы комиссионного вознаграждения</a>
          </div>
        </div>
        <div class="i-grid-2 align-btm">
          <div class="transfer-card">
          <form class="transfer-card-form" v-on:submit.prevent="onSubmit">
            <table>
                <tr class="inputMode-select">
                    <td>
                      <label for="">Перевод с карты</label>

                      </td>
                    <td>
                      <input type="text">
                      <select name="select-card" v-model="newCard.id">
                        <option value="choose" selected>Выберите из списка</option>
                        <option v-for="card of allCards" :key="card.id" v-bind:value="card.id">{{card.name}} ({{card.balance}} BYN)</option>
                      </select>
                    </td>
                    <!-- <td><a class="inputMode-button1 inputMode-button">Ввести вручную</a></td> -->
                </tr>
                <tr class="inputMode-input">
                    <td>
                      <label for="">Перевод на карту</label>
                      </td>
                    <td>
                      <input type="text" v-model="toCard">
                    </td>

                </tr>
                <tr>
                    <td><label for="">Сумма</label></td>
                    <td><input type="number" v-model="transferAmount"></td>
                    <td></td>
                </tr>
                <tr>
                    <td><label for="">Комиссия</label></td>
                    <td><h2>{{transferAmount * transferCom}} BYN</h2></td>
                    <td></td>
                </tr>
                <tr class="transfer-bottom">
                    <td><a @click="$router.go(-1)">Назад</a></td>
                    <td><button class="button" @click="makeCardTransfer(); makeJournalTransfer();">Перевести</button></td>
                    <td></td>
                </tr>
            </table>
            
          </form>
          </div>
        </div>
                <div>
            
          </div>

<div id="passwordModal" v-if="isTransfered" @click="isTransfered = false" style="
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
                  <div>
                    <img style="height: 50px;" src="https://api.iconify.design/ic:outline-done.svg?color=white"><br>
                  Перевод<br>успешно<br>совершен
                  </div>
              </div>

      </div>
      </div>
  
</template>


<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import Journal from '../models/journal.model';
import JournalsServiceInstance from '../services/journals.service';

import Card from '../models/card.model';
import CardsServiceInstance from '../services/cards.service';

import News from '../views/News.vue';

@Component
export default class Transfer extends Vue {

  private readonly journalsService = JournalsServiceInstance;



  created(): void {
    this.getJournals();
    this.getCards();
  }

  private readonly newJournal: Journal = { variant:"",date:"",amount:0, description:""};

  private allJournals: Journal[] | null = null;

  transferAmount: number = 0;
  fromCard: number = null;
  toCard: string = "7567 4567 8954 3456";
  transferCom: number = 0.01;



  async getJournals(): Promise<void> {
    this.allJournals = await this.journalsService.getJournals();
  }

  async makeJournalTransfer(journal: Journal): Promise<void> {
    await this.getJournals();
    this.newJournal.amount = this.transferAmount;
    this.newJournal.variant = "Перевод с карты";
    this.newJournal.date = new Date().toLocaleString();
    
    console.log(this.newJournal);

    await this.journalsService.makeJournalTransfer(this.newJournal);
    await this.getJournals();
  }

  // async blockJournal(journal: Journal): Promise<void> {
  //   await this.journalsService.blockJournal(journal);
  //   await this.getJournals();
  // }


private readonly cardsService = CardsServiceInstance;

  private readonly newCard: Card = { name: "", working: true, amount: 0, balance: 0};

  private allCards: Card[] | null = null;



  async getCards(): Promise<void> {
    this.allCards = await this.cardsService.getCards();
  }

  // async createCard(): Promise<void> {
  //   await this.cardsService.createCard(this.newCard);
  //   this.newCard.name = null;
  //   await this.getCards();
  // }

  async blockCard(card: Card): Promise<void> {
    await this.cardsService.blockCard(card);
    await this.getCards();
  }

  // async deleteCard(id: number): Promise<void> {
  //   await this.cardsService.deleteCard(id);
  //   await this.getCards();
  // }

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
