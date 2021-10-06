const plus= document.querySelector(".minus");
         minus= document.querySelector(".num");
          num=document.querySelector(".num");
        let a=1;
        function fun() {
            a++;
            a= (a<=25)? "0" + a : a;
            num.innerText=a;
            console.log(a);
        }
        function func() {
            a--;
            a= (a<=25)? "0" + a : a;
            num.innerText=a;
            console.log(a);
        }