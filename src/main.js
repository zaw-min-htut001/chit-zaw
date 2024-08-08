import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'
import './story.css'
const app = createApp(App)
app.use($)
app.mount('#app')

var countDownDate = new Date('Aug 7, 2023 00:00:00').getTime()

setInterval(function () {
  var now = new Date().getTime()

  var distance = countDownDate - now

  var years = Math.floor(-distance / (1000 * 60 * 60 * 24 * 365.25))
  var hours = Math.floor((-distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((-distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((-distance % (1000 * 60)) / 1000)
  document.querySelector('.years').innerHTML = years
  document.querySelector('.hours').innerHTML = hours
  document.querySelector('.minutes').innerHTML = minutes
  document.querySelector('.seconds').innerHTML = seconds
}, 1000)

document.addEventListener('DOMContentLoaded', function () {})
setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1
  var r_size = Math.floor(Math.random() * 65) + 10
  var r_left = Math.floor(Math.random() * 100) + 1
  var r_bg = Math.floor(Math.random() * 25) + 100
  var r_time = Math.floor(Math.random() * 5) + 5

  $('.bg_heart').append(
    "<div class='heart' style='width:" +
      r_size +
      'px;height:' +
      r_size +
      'px;left:' +
      r_left +
      '%;background:rgba(255,' +
      (r_bg - 25) +
      ',' +
      r_bg +
      ',1);-webkit-animation:love ' +
      r_time +
      's ease;-moz-animation:love ' +
      r_time +
      's ease;-ms-animation:love ' +
      r_time +
      's ease;animation:love ' +
      r_time +
      "s ease'></div>"
  )

  $('.bg_heart').append(
    "<div class='heart' style='width:" +
      (r_size - 10) +
      'px;height:' +
      (r_size - 10) +
      'px;left:' +
      (r_left + r_num) +
      '%;background:rgba(255,' +
      (r_bg - 25) +
      ',' +
      (r_bg + 25) +
      ',1);-webkit-animation:love ' +
      (r_time + 5) +
      's ease;-moz-animation:love ' +
      (r_time + 5) +
      's ease;-ms-animation:love ' +
      (r_time + 5) +
      's ease;animation:love ' +
      (r_time + 5) +
      "s ease'></div>"
  )

  $('.heart').each(function () {
    var top = $(this)
      .css('top')
      .replace(/[^-\d\.]/g, '')
    var width = $(this)
      .css('width')
      .replace(/[^-\d\.]/g, '')
    if (top <= -100 || width >= 150) {
      $(this).detach()
    }
  })
}, 500)
