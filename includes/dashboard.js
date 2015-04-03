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

 /*
$(function() {
	$("#headline").progressbar({max : 1, value :1});
	updateHeadline();
});	
*/
$(function() {
	$(".acceptButton").button({icons :  {primary : "ui-icon-check"}});
});

$(function() {
	$(".rejectButton").button({icons :  {primary : "ui-icon-circle-close"}});
});

$(function() {
	$(".historyButton").button({icons :  {primary : "ui-icon-calendar"}});
});

$(function() {
	var dialog_width=window.innerWidth * .8;
	$("#history1").dialog({autoOpen: false, width : dialog_width});
});

$(function() {
	var dialog_width=window.innerWidth * .8;
	$("#history2").dialog({autoOpen: false, width : dialog_width});
});


$(function() {
	var dialog_width=window.innerWidth * .8;
	$("#history3").dialog({autoOpen: false, width : dialog_width});
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
	var headlineText=" Key Performance Indicators as of " + printDate  	
									+ " | Average Sale Size: " + averageSale.toLocaleString(	'en-US',{style : "currency",  currency : "USD", currencyDisplay : "symbol"})  
									+ " | Active Website Customers: " + activeCustomerCount .toLocaleString('en-US')  
									+ " | Units Produced: " + unitsProduced .toLocaleString("en-US") ;
	$("#headline_label").text(headlineText);
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
		var e=document.getElementById("accept1");
		e.style.background="green";
		$("#accept1 span").text('Accepted!');
		e.disabled="true";
		var e=document.getElementById("reject1");
		e.style.display="none";
		
		t=document.getElementById("historyTable1");
		var currentTable=t.innerHTML;
		t.innerHTML=currentTable.replace("</tbody>","<tr><td>" + getPrintDate().replace(/ .*/,"") + "</td><td>10% Discount Offer</td><td>87% efficacy</td><td>Result Pending</td></tr></tbody>");
	} else if ( recommendation == "recommendation2" ) {
		alert('Accepted. Upgrade package offer sent to Customer ABC.');
		var e=document.getElementById("accept2");
		e.style.background="green";
		$("#accept2 span").text('Accepted!');
		e.disabled="true";
		var e=document.getElementById("reject2");
		e.style.display="none";
		
		t=document.getElementById("historyTable2");
		var currentTable=t.innerHTML;
		t.innerHTML=currentTable.replace("</tbody>","<tr><td>" + getPrintDate().replace(/ .*/,"") + "</td><td>Enhanced Offer for Customer</td><td>89% efficacy</td><td>Result Pending</td></tr></tbody>");
	} else if ( recommendation == "recommendation3" ) {
		alert('Accepted. Upgrade packages offer sent.');
		var e=document.getElementById("accept3");
		e.style.background="green";
		$("#accept3 span").text('Accepted!');
		e.disabled="true";
		var e=document.getElementById("reject3");
		e.style.display="none";
		
		t=document.getElementById("historyTable3");
		var currentTable=t.innerHTML;
		t.innerHTML=currentTable.replace("</tbody>","<tr><td>" + getPrintDate().replace(/ .*/,"") + "</td><td>Enhanced Offer for Related Customer</td><td>50% efficacy</td><td>Result Pending</td></tr></tbody>");
	}
}

function rejectAction(recommendation) {
		if (recommendation == "recommendation1") {
		var e=document.getElementById("accept1");
		e.style.display="none";
		var e=document.getElementById("reject1");
		e.style.background="red";
		$("#reject1 span").text('Rejected!');
		e.disabled="true";
	} else if ( recommendation == "recommendation2" ) {
		var e=document.getElementById("accept2");
		e.style.display="none";
		var e=document.getElementById("reject2");
		e.style.background="red";
		$("#reject2 span").text('Rejected!');
		e.disabled="true";
	} else if ( recommendation == "recommendation3" ) {
		var e=document.getElementById("accept3");
		e.style.display="none";
		var e=document.getElementById("reject3");
		e.style.background="red";
		$("#reject3 span").text('Rejected!');
		e.disabled="true";
	}
}

function historyAction(recommendation) {
	if (recommendation == "recommendation1") {	
		$("#history1").dialog("open");
	} else if ( recommendation == "recommendation2" ) {
		$("#history2").dialog("open");
	} else if ( recommendation == "recommendation3" ) {
		$("#history3").dialog("open");
	}
}