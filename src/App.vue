<template>
  <div id="app" :class="$route.name">
  <header>
    <div class="header-container">
      <h1 class="header-logo"><a href="/">Мой Банк</a></h1>
      <div class="header-buttons">
        <a class="help-button" href="#">Онлайн-помощник</a>
        <a class="enter-button" href="/login"><img src="https://api.iconify.design/bx-bx-power-off.svg?color=%23FCFF66" alt="" class="icon"><span>Войти</span></a>
      </div>
    </div>
    <div class="chat-widget hide">
      <div class="chat-header">
        <div class="toggle-controls">
          <div class="toggle-close">
            <img src="https://api.iconify.design/ion:close.svg?color=%234c4c4c">
          </div>
        </div>
        <div class="chat-title">
          Онлайн-помощник
        </div>
      </div>
      <div class="chat-window">
        <div class="chat-log">
          <div class="chat-message">
            <div class="sender">
              <div class="sender-name friend">
                Ирина, консультант банка
              </div>
            </div>
            <div class="message">
              Добрый день! Чем я могу вам помочь?
            </div>
          </div>
        </div>
        <div class="chat-input">
          <form id="post_message">
            <input type="text" id="new_message" placeholder="Задать вопрос..."/>
          </form>
        </div>
      </div>
    </div>
  </header>
    <main class="layout" :class="$route.name">
      <div class="layout-container">
        <div class="sidebar">
          <button class="dropdown-btn cards">Карты 
            <i class="dropdown-icon"></i>
          </button>
          <div class="dropdown-container cards">
            <a href="/cards">Мои карты</a>
            <a href="#">SMS-оповещение</a>
            <a href="#">Курсы валют</a>
          </div>
          <button class="dropdown-btn">Платежи 
            <i class="dropdown-icon"></i>
          </button>
          <div class="dropdown-container payment">
            <a href="/payment" class="payment">Специальные платежи</a>
          </div>
          <button class="dropdown-btn">Переводы 
            <i class="dropdown-icon"></i>
          </button>
          <div class="dropdown-container transfer">
            <router-link to="/transfer" class="transfer">Перевод на карту</router-link>
            <a href="#">Перевод на счет</a>
            <a href="#">Лимиты</a>
          </div>
          <button class="dropdown-btn">Кредиты 
            <i class="dropdown-icon"></i>
          </button>
          <div class="dropdown-container">
            <a href="/product">Заявка на кредит</a>
          </div>
          <a href="/product" class="products">Мои продукты</a>
          <div style="height:100px;"></div>
          <router-link to="/news">Новости банка</router-link>
          <button class="dropdown-btn">О банке 
            <i class="dropdown-icon"></i>
          </button>
          <div class="dropdown-container">
            <a href="#">О банке</a>
          </div>
          <button class="dropdown-btn">Помощь 
            <i class="dropdown-icon"></i>
          </button>
          <div class="dropdown-container">
            <a href="#">Служба поддержки</a>
            <a href="#">Горячая линия</a>
          </div>
          <button href="/settings" class="dropdown-btn settings">Настройки 
            <i class="dropdown-icon"></i>
          </button>
          <div class="dropdown-container change settings">
            <router-link to="/password" class="change">Изменение пароля</router-link>
            <a href="#">Изменение адреса эл. почты</a>
            <a href="#">Изменение личных предпочтений</a>
            <a href="#">Настройка согласия на участие в рекламных компаниях</a>
            <a href="#">Настройка PUSH-уведомлений</a>
            <a href="#">Рассылка уведомлений</a>
            <a href="#">Регистрационные данные</a>
            <a href="#">Удаление учетной записи</a>
          </div>
        </div>
        <div class="interface">
            <router-view/>
        </div>
      </div>
    </main>  

  <footer>
    <div class="footer-container">
      <h1 class="footer-logo">Мой Банк</h1>
      <div class="footer-items">
        <div class="footer-item" style="padding: 0 0 0 16px;">
          <div>
            <h3>Инструкция</h3>
            <h5>для интернет-банкинга</h5>
            <h5>для мобильного банкинга</h5>
          </div>
        </div>
        <div class="footer-item">
          <h6>E-mail:<br>mybank@mtbank.by</h6>
        </div>
        <div class="footer-item">
          <h6 style="text-align: center; line-height: 1.5; width: 100%;">Контакт-центр:<br><i style="color:#FCFF66;">+375 29 123-45-67</i></h6>
        </div>
        <div class="footer-item">
          <h6 style="text-align: center; width: 100%;">Курсы валют сегодня:<br>
            <div style="height: 10px;"></div><i style="line-height: 1px;">USD: 2.53<br>EUR: 3.08<br>RUB: 3.46</i>
          </h6>
        </div>
      </div>
    </div>
  </footer>

  </div>
</template>