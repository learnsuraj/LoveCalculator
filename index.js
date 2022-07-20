let answer=document.querySelector('.result');
let array=[];
function myFunction(){
    console.log('I am clicked');
    let boy=document.querySelector('.input1').value;
    let girl=document.querySelector('.input2').value;
    array.push(boy,girl);
    console.log(array);
    let a=boy.length;
    let b=girl.length;
    if(boy!=""){
        answer.innerHTML="we are Checking........";
        setTimeout(()=>{
            let num=Math.random()*100;
            let wholeNum=Math.floor(num);
            let loveresult=wholeNum-(a+b);
            console.log(loveresult);
            answer.innerHTML="You Guys Are Matching "+ loveresult+"%";
        },1500);
    }
    else{
        alert('Please enter both BOY and Girl name');
    }
}