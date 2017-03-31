var timer;
var nameNum;
var i;
var btn = document.getElementById('btn');
var pic = document.getElementById('img');
var stu = document.getElementById('stu');
var u1 = document.getElementsByClassName('on');

function start(){
    if(u1.length == 0){
        var res = confirm('已经点完了,是否重新加载？');
        if(res){
            window.location.reload();
        } else {
            return;
        }
        //alert('已经点完了！');
        //window.location.reload();
    }
    btn.innerHTML = '停&nbsp;止';
    btn.setAttribute('onclick','stop()');
    //循环计时器+随机数的应用
    timer = setInterval(function(){
        nameNum = Math.floor(Math.random()*u1.length);
        stu.innerHTML = u1[nameNum].innerHTML;
        i = Math.floor(Math.random()*43);
        pic.setAttribute('src','image/'+i+'.jpg');
    },60);
}

function stop(){
    u1[nameNum].setAttribute('class','in');
    btn.innerHTML = '开&nbsp;始';
    btn.setAttribute('onclick','start()');
    clearInterval(timer);
}