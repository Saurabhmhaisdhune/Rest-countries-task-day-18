document.body.innerHTML=`
<div id="mainbody">
<div id="di">
<h1 id="countryname"><strong>Afghanistan</strong></h1>
<br>
<img id="flag" src="https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg"></img><br>
<h3 id="capital">Capital:Kabul</h3>
<h3 id="region">Region:Asia</h3>
<h3 id="countryCode">Country Code:AFG</h3>
<input type="button" id="weartherdetails" value="Click for Weather">
</div>
<div id="di">
<h1 id="countryname"><strong>Aland Island</strong></h1>
<br>
<img id="flag" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Flag_of_%C3%85land_%283-2%29.svg"></img><br>
<h3 id="capital">Capital:Mariehamn</h3>
<h3 id="region">Region:Europe</h3>
<h3 id="countryCode">Country Code:ALA</h3>
<input type="button" id="weartherdetails1" value="Click for Weather">
</div>
<div id="di">
<h1 id="countryname"><strong>Albania</strong></h1>
<br>
<img id="flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Flag_of_Albanian_Provisional_Government_%281912-1914%29.svg/320px-Flag_of_Albanian_Provisional_Government_%281912-1914%29.svg.png"></img><br>
<h3 id="capital">Capital:Tirana</h3>
<h3 id="region">Region:Europe</h3>
<h3 id="countryCode">Country Code:ALB</h3>
<input type="button" id="weartherdetails2" value="Click for Weather">
</div>
</div>
`
var button1 = document.querySelector ("#weartherdetails")

button1.addEventListener ("click",function(){
fetch("https://api.openweathermap.org/data/2.5/weather?q=afghanistan&appid=752fafdc6ff61104af18637ab1e1e04c")
.then ( response=>response.json())
.then (data=>console.log(data)
)
.catch (err=>lert("error"))
})

var button2 = document.querySelector ("#weartherdetails1")

button2.addEventListener ("click",function(){
fetch("https://api.openweathermap.org/data/2.5/weather?q=aland&appid=752fafdc6ff61104af18637ab1e1e04c")
.then ( response=>response.json())
.then (data=>console.log(data)
)
.catch (err=>lert("error"))
})

var button3 = document.querySelector ("#weartherdetails2")

button3.addEventListener ("click",function(){
fetch("https://api.openweathermap.org/data/2.5/weather?q=albania&appid=752fafdc6ff61104af18637ab1e1e04c")
.then ( response=>response.json())
.then (data=>console.log(data)
)
.catch (err=>lert("error"))
})
