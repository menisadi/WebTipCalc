function calc()
{
	var mymoney100 = qa100.value;
	var mymoney10 = qa10.value;
	var mymoney1 = qa1.value;        
	var mymeal100 = qb100.value;
	var mymeal10 = qb10.value;
	var mymeal1 = qb1.value;
	var mymoney = mymoney100 + mymoney10 + mymoney1
	var mymeal = mymeal100 + mymeal10 + mymeal1
	var tip = mymeal*0.15
	var credit = +mymeal + +tip - +mymoney
	document.getElementById('result').innerHTML = credit;
	document.getElementById('tip').innerHTML = tip;
} 
