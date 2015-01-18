campaign1= 41173;
campaign2=204778;
campaign3=1002;

campaign1_goal=60000;
campaign2_goal=215000;
campaign3_goal=10000;

window.setInterval(function() {updateHeadline()},1000);

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

	document.getElementById("campaign1").innerHTML="\"Go the the Max\" : " + campaign1.toLocaleString(	'en-US',{style : "currency",  currency : "USD", currencyDisplay : "symbol"}) ;
	document.getElementById("campaign2").innerHTML="\"Street Cred\": "  + campaign2.toLocaleString(	'en-US',{style : "currency",  currency : "USD"}) ;
	document.getElementById("campaign3").innerHTML="\"All Aboard!\": " + campaign3.toLocaleString(	'en-US',{style : "currency",  currency : "USD"}) ;
	
	campaign1_current=campaign1 *100/ campaign1_goal;
	e=document.getElementById("campaign_bar1");
	e.style.width=campaign1_current + "%";
	e.style.height="100%";
	e.style.backgroundColor='rgb(44,149,221)';
	
	e=document.getElementById("campaign_bar2");
	campaign2_current=campaign2 *100/ campaign2_goal;
	e.style.width=campaign2_current + "%";
	e.style.height="100%";
	e.style.backgroundColor='rgb(44,149,221)';
	
	campaign3_current=campaign3 *100/ campaign3_goal;
	e=document.getElementById("campaign_bar3");
	e.style.width=campaign3_current + "%";
	e.style.height="100%";
	e.style.backgroundColor='rgb(44,149,221)';
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
function showDetail(item) {
	var e=document.getElementById("itemDetail");
	e.style.display='block';
	if (item == "item1") {
		e.innerHTML='<h1>Customer XYZ</h1>\
						<div class="graph">\
							<table border=1>\
								<tr><th>Quarter</th><th>Spend</th></tr>\
								<tr><td>Q3 2014</td><td>$340.00</td></tr>\
								<tr><td>Q4 2014</td><td>$1,190.00</td></tr>\
								</table> \
						</div>\
						<div class="reasons">\
							<ul>\
								<li>Customer XYZ\'s Influence Quotient has increased by 19 points.</li>\
							</ul>\
						</div>\
						<div class="graph">\
							<table border=1>\
								<tr><th>Customer</th><th>Influence Quotient</th></tr>\
								<tr><td>Customer XYZ</td><td>179</td></tr>\
								<tr><td>Customer QRS</td><td>111</td></tr>\
								<tr><td>Customer ABC</td><td>66</td></tr>\
							</table> \
						</div>\
						<div id="exit"><a href="javascript:void"><img class="exit" src="images/exit.png"/>Exit</a></div>';
	} else if (item == "item2") {
		e.innerHTML='<h1>Customer ABC</h1>\
							<div class="graph">\
								<table border=1>\
								<tr><th>Quarter</th><th>Spend</th></tr>\
								<tr><td>Q4 2013</td><td>$780.00</td></tr>\
								<tr><td>Q1 2014</td><td>$620.00</td></tr>\
								<tr><td>Q2 2014</td><td>$670.00</td></tr>\
								<tr><td>Q3 2014</td><td>$650.00</td></tr>\
								<tr><td>Q4 2014</td><td>$351.00</td></tr>\
								</table> \
								<span class="graph"><img src="images/graph1.png"/></span>\
							</div>\
							<div id="exit"><a href="javascript:void"><img class="exit" src="images/exit.png"/>Exit</a></div>';
	} else if (item == "item3") {
		e.innerHTML='<h1>Customer Average Spend</h1>\
								<div class="graph">\
									<table border=1>\
										<tr><th>Quarter</th><th>Spend</th></tr>\
										<tr><td>Average Q3</td><td>$147.00</td></tr>\
										<tr><td>Average Q4</td><td>$159.25</td></tr>\
										<tr><td>Q3 2014</td><td>$150.00</td></tr>\
										<tr><td>Q4 2014</td><td>$187.00</td></tr>\
										</table>\
										<span class="graph"><img src="images/graph2.png"/></span>\
									</div>\
									<div id="exit"><a href="javascript:void"><img class="exit" src="images/exit.png"/>Exit</a></div>';
	} else if (item == "recommendation1") {
		e.innerHTML='<h1>Customer XYZ</h1>\
							<div class="graph">\
									<table border=1>\
										<tr><th>Quarter</th><th>Spend</th></tr>\
										<tr><td>Q3 2014</td><td>$340.00</td></tr>\
										<tr><td>Q4 2014</td><td>$1,190.00</td></tr>\
										</table>\
							</div>\
							<div class="reasons">\
								<ul>\
									<li>Customer XYZ has 5 Facebook friends that are also customers.</li>\
									<li>10% discount is predicted to have 87% efficacy rate due to Customer XYZ\'s influence.</li>\
									</ul>\
							</div>\
							<div class="acceptButton"><button name="Accept" onClick="acceptAction(\'recommendation1\')">Accept</button></div>\
							<div id="exit"><a href="javascript:void"><img class="exit" src="images/exit.png"/>Exit</a></div>';
	} else if (item == "recommendation2") {
		e.innerHTML='<h1>Customer ABC</h1>\
							<div class="graph">\
							<table border=1>\
								<tr><th>Quarter</th><th>Spend</th></tr>\
								<tr><td>Q3 2014</td><td>$650.00</td></tr>\
								<tr><td>Q4 2014</td><td>$351.00</td></tr>\
								</table>\
							</div> \
							<div class="reasons">\
								<ul>\
									<li>Customer ABC has "pinned" 3 competitive proudcts on Pintrest in the last month.</li>\
									<li>Enhanced Package Offer rate is predicted to increase customer satisfaction ranking by 35%.</li>\
								</ul>\
							</div>\
							<div class="acceptButton"><button name="Accept" onClick="acceptAction(\'recommendation2\')">Accept</button></div>\
							<div id="exit"><a href="javascript:void"><img class="exit" src="images/exit.png"/>Exit</a></div>';
	} else if (item == "recommendation3") {
		e.innerHTML='<h1>Customer ABC</h1>\
							<div class="graph">\
							<table border=1>\
								<tr><th>Quarter</th><th>Spend</th></tr>\
								<tr><td>Q3 2014</td><td>$650.00</td></tr>\
								<tr><td>Q4 2014</td><td>$351.00</td></tr>\
								</table>\
							</div> \
							<div class="reasons">\
								<ul>\
									<li>Customer ABC has "pinned" 3 competitive proudcts on Pintrest in the last month.</li>\
									<li>Enhanced Package Offer rate is predicted to increase customer satisfaction ranking by 35%.</li>\
								</ul>\
							</div>\
							<div class="acceptButton"><button name="Accept" onClick="acceptAction(\'recommendation3\')">Accept</button></div>\
							<div id="exit"><a href="javascript:void"><img class="exit" src="images/exit.png"/>Exit</a></div>';
	}
}