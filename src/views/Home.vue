<template>
<div>
<div class="splide" data-splide='{"type":"fade","autoplay":true,"perPage":1, "pagination":false, "interval":4000,"rewind":true}'>
    <div class="splide__arrows">
    <button class="splide__arrow splide__arrow--prev">
      
    </button>
    <button class="splide__arrow splide__arrow--next">

    </button>
  </div>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide"> <img src="/phone.png" style="width: 100%;"> </li>
      <li class="splide__slide"><img src="/man.png" style="width: 100%;"></li>
    </ul>
  </div>

  <div class="splide__progress">
    <div class="splide__progress__bar">
    </div>
  </div>
</div>

<div class="divider" style="height: 10px"></div>
<main class="landing">
  <div class="landing-container">
    <h1 class="landing-headline">Мой Банк</h1>
    <p class="landing-text">Получите мгновенный доступ к Вашим счетам и картам из<br>любой точки мира. В любой момент Вы можете совершить<br>платеж или проверить, сколько средств осталось на счете.</p>

    <div>
      <h1 class="course-headline">Онлайн-курсы</h1>
    </div>
    <div class="landing-grid">
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
      <div class="visa-dream">
        <div class="visa-dream-container">
          <h3>Покупки с Visa - ближе к мечтам!</h3>
          <h3>Рекламная игра “Покупай с Visa”.<br>Исполняем ваши желания</h3>
          <a href="" class="button">Подробнее</a>
        </div>
      </div>
    </div>
    <div class="landing-atm">
      <h1>Банкоматы и отделения</h1>
      <a href="#atmMap" rel="modal:open">Карта</a>
      <a href="#atmTable" rel="modal:open">Список</a>
    </div>
  </div>
</main>
<div class="divider" style="height: 10px;"></div>


<div id="atmTable" class="modal" style="max-width:90%;">
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

<div id="atmMap" class="modal" style="text-align: center; max-width:90%;">

<img src="/yandex.png" alt="">

</div>

</div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Task from '../models/task.model';
import TasksServiceInstance from '../services/tasks.service';

import Card from '../models/card.model';
import CardsServiceInstance from '../services/cards.service';

@Component
export default class Home extends Vue {
  private readonly tasksService = TasksServiceInstance;

  private readonly newTask: Task = { name: null, complete: false };

  private allTasks: Task[] | null = null;

  created(): void {
    this.getTasks();
    this.getCards();
  }

  async getTasks(): Promise<void> {
    this.allTasks = await this.tasksService.getTasks();
  }

  async createTask(): Promise<void> {
    await this.tasksService.createTask(this.newTask);
    this.newTask.name = null;
    await this.getTasks();
  }

  async toggleTask(task: Task): Promise<void> {
    await this.tasksService.toggleTask(task);
    await this.getTasks();
  }

  async deleteTask(id: number): Promise<void> {
    await this.tasksService.deleteTask(id);
    await this.getTasks();
  }


  private readonly cardsService = CardsServiceInstance;

  private readonly newCard: Card = { name: "", working:true, amount:0,balance:0 };

  private allCards: Card[] | null = null;



  async getCards(): Promise<void> {
    this.allCards = await this.cardsService.getCards();
  }


  async deleteCard(id: number): Promise<void> {
    await this.cardsService.deleteCard(id);
    await this.getCards();
  }
  
}
</script>

<style scoped>
.splide__arrow {
  opacity: .15 !important;
}


.modal table {
  margin-top: 20px;
  background: #CDCDCD;
  color: #4F4F4F;
  border-radius: 10px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  overflow:hidden
}

.modal th {
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  color: #CDCDCD !important;
  background: #4F4F4F !important;
}

.modal td, .modal th {
  padding: 14px;
  vertical-align: middle;
}

.modal img {
  border-radius: 10px;
}
</style>