// JavaScript Document
function check(){
	
	var a=0;
	var q1=document.quiz.ques1.value;
	var q2=document.quiz.ques2.value;
	var q3=document.quiz.ques3.value;
	var q4=document.quiz.ques4.value;
	var q5=document.quiz.ques5.value;
	var q6=document.quiz.ques6.value;

	if (q1=="Brendan Eich") {a++}
	if (q2=="if a is defined, then a") {a++}
	if (q3=="Returns the first argument") {a++}
	if (q4=="True") {a++}
	if (q5=="Multiple") {a++}
	if (q6=="True") {a++}
	
	document.write(a);
}