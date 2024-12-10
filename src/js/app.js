console.log("HomeWork_20");

/*
დავალება:
1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც იმუშავებს როგორც ნამდვილი სააათი. გამოიყენეთ 
ატვირთული სურათი (საათი.png).
*/

setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  document.getElementById("clock").innerHTML = currentTime;
}

showTime();

/* 
2. ლექციაზე შექმნილ სლაიდერს დავამატოთ: 
   2.1. დავამატოთ სლაიდების ავტომატური ცვლილება 5 წამიანი ინტერვალით 
   2.2. როდესაც ავტომატურად ხდება სლაიდების შეცვლა თუ მაუსს მივიტან სურათთან, ავტომატური სლაიდი გაჩერდეს.
   2.3. თუ მაუსი მიტანილი მაქვს სურათზე და შემდეგ გამოვწევ სურათიდან, ავტომატური სლაიდი გაგრძელდეს. მოუსმინეთ  
   mouseenter, mouseleave  ივენთებს 
   დამხმარე მასალა: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event  
https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
*/

/*
 3*(optional) დავამატოთ მარტივი countdown რომელიც გვიჩვენებს მომდევნო ლექციამდე (3 დეკემბერი, 20:00) დარჩენილ 
 დროს (დღე, საათი, წუთი)
 */

let countDownDate = new Date("Dec 10, 2024 20:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("clock2").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock2").innerHTML = "EXPIRED";
  }
}, 1000);
