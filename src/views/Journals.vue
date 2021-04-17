<template>
      <div class="interface-container">
        <div class="settings-list"
        style="max-width: 700px;">

          <a @click="$router.go(-1)" style="  color: #FCFF66;
  text-decoration: none;
  border-bottom: 1px solid #FCFF66;
  font-weight: bold;cursor:pointer; display: inline-block;">Назад</a>

          <h1><br>Журнал операций</h1>
<table>
  <tr>
    <td>Дата и время</td>
    <td>Операция</td>
    <td>-</td>
    <td>Сумма</td>
  </tr>
  <tr v-for="journal of allJournals"
      :key="journal.id">
    <td>{{journal.date}}</td>
    <td>{{journal.variant}}</td>
    <td>{{journal.description}}</td>
    <td><span v-if="journal.amount != 0">{{journal.amount}} BYN</span></td>
  </tr>
</table>

        </div>
      </div>
</template>



<script lang="ts">


import { Component, Vue } from 'vue-property-decorator';

import Journal from '../models/journal.model';
import JournalsServiceInstance from '../services/journals.service';

@Component
export default class Login extends Vue {
  private readonly journalsService = JournalsServiceInstance;

  private allJournals: Journal[] | null = null;

  created(): void {
    this.getJournals();
  }

  async getJournals(): Promise<void> {
    this.allJournals = await this.journalsService.getJournals();
  }


}
</script>


<style scoped>

tr>td:last-child {
    text-align: center;
    background: #fcff66;
    border-radius: 10px;
    width: 100px;
    /* border: 1px solid #fcff66; */
    /* border-width: 1px 4px 4px 4px; */
}

tr {
    background: #ffffff38;
    border-bottom: 4px solid #cdcdcd;
    border-radius: 10px;
    /* overflow: hidden; */
}

td {
    padding: 10px;
    vertical-align: middle;
}

</style>