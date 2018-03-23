function greet() {
            var greeting;
            var mydate=new Date;
            var myhour=mydate.getHours();
            if(myhour<12){
            greeting="Good morning";       
            }else if(myhour>=12 && myhour<18){
               greeting="Good afternoon";
            }else {
               greeting="Good evening";
            }
               return greeting; 
        }
    