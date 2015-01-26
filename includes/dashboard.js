campaign1= 41173;
campaign2=204778;
campaign3=1002;

campaign1_goal=60000;
campaign2_goal=215000;
campaign3_goal=10000;

window.setInterval(function() {updateHeadline()},1000);
$(function() {
    $( "#insights").accordion({collapsible: true, active : false, heightStyle : "content"});
});
$(function() {
	$( "#recommendations").accordion({collapsible: true, active : false, heightStyle : "content"});
 });
function getPrintDate() {
	var currentDate=new Date();
	var year=currentDate.getFullYear();
	var month=currentDate.getMonth() + 1;
	var day=currentDate.getDate();
	var hour=currentDate.getHours();
	var minute=currentDate.getMinutes();
	var second=currentDate.getSeconds();
	if (month < 10 ) {
	 month="0" + month.toString();
	}
	if (day < 10 ) {
	 day="0" + day.toString();
	}
	if (hour < 10 ) {
	 hour="0" + hour.toString();
	}
	if (minute < 10 ) {
	 minute="0" + minute.toString();
	}
	if (second < 10 ) {
	 second="0" + second.toString();
	}
	return month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second;
}

function getAvgSaleSize() {
	return getRandomNumber(250 ,100);
}

function getActiveCustomerCount() {
	return  getRandomNumber(2000 ,1000);
}

function getUnitsProduced() {
	return getRandomNumber(82,10);
}

function getRandomNumber(base, multiplier) {
	return base + Math.round(Math.random()*multiplier);
}

function updateHeadline() {
	var printDate=getPrintDate();
	var averageSale=getAvgSaleSize();
	var activeCustomerCount = getActiveCustomerCount();
	var unitsProduced = getUnitsProduced();
	document.getElementById("headlineText").innerHTML="| Key Performance Metrics as of " + "<span class='numberValue'>" + printDate  + "</span>"
			+ " | Average Sale Size: " + "<span class='numberValue'>" + averageSale.toLocaleString(	'en-US',{style : "currency",  currency : "USD", currencyDisplay : "symbol"})  + "</span>"
			+ " | Active Website Customers: " + "<span class='numberValue'>" + activeCustomerCount .toLocaleString('en-US')  + "</span>"
			+ " | Units Produced: " + "<span class='numberValue'>" + unitsProduced .toLocaleString("en-US") + "</span>"
			+ " | ";
}

window.setInterval(function() {updateCampaigns()},3000);

function updateCampaigns() {
	campaign1= campaign1 + 60
	campaign2= campaign2 +10;
	campaign3=campaign3 + 1;
	


	$("#campaign_bar1").progressbar({max: campaign1_goal, value: campaign1});
	$("#campaign_bar1_label").text("\"Go the the Max\" : " + campaign1.toLocaleString('en-US',{style : "currency",  currency : "USD", currencyDisplay : "symbol"}));
	$("#campaign_bar2").progressbar({max: campaign2_goal, value: campaign2});
	$("#campaign_bar2_label").text("\"Street Cred\" : " + campaign2.toLocaleString('en-US',{style : "currency",  currency : "USD", currencyDisplay : "symbol"}));
	$("#campaign_bar3").progressbar({max: campaign3_goal, value: campaign3});
	$("#campaign_bar3_label").text("\"All Aboard!\" : " + campaign3.toLocaleString('en-US',{style : "currency",  currency : "USD", currencyDisplay : "symbol"}));
}

function acceptAction(recommendation) {
	if (recommendation == "recommendation1") {
		alert('Accepted. 10% discount rates sent.');
	} else if ( recommendation == "recommendation2" ) {
		alert('Accepted. Upgrade package offer sent to Customer ABC.');
	} else if ( recommendation == "recommendation3" ) {
		alert('Accepted. Upgrade packages offer sent.');
	}
	e=document.getElementById(recommendation);
	e.style.display='none';
}
