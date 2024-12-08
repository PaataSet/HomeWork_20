console.log("HomeWork_20");

/*
დავალება:
1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც იმუშავებს როგორც ნამდვილი სააათი. გამოიყენეთ 
ატვირთული სურათი (საათი.png).
*/
// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
  // Getting current time and date
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  // Setting time for 12 Hrs format
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

  // Displaying the time
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

 3*(optional) დავამატოთ მარტივი countdown რომელიც გვიჩვენებს მომდევნო ლექციამდე (3 დეკემბერი, 20:00) დარჩენილ 
 დროს (დღე, საათი, წუთი)
 */
