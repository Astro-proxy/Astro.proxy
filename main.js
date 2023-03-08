function login(t){"2023"==t?(key=prompt("Astro Key:"),key=="walterwhite".toLowerCase()?this.location="methodsel.html":this.close()):this.close()}
function redirect(method){
    if(method==1){
        alert('Sorry no astro proxy exists yet!')
    }
    if(method==2){
        window.open("https://www.cloudflare.com/apps/0VJ1mCYqPTh4/install", "_blank", "width=900,height=900,status=yes, toolbar=no, menubar=no, location=no,");
        this.close();
    }
    if(method==3){
        window.open("https://r.codewars.cf", "_blank", "width=900,height=900,status=yes, toolbar=no, menubar=no, location=no,");
        this.close();
    }
    if(method==4){
        window.open("./misc/gamer.html", "_blank", "width=900,height=900,status=yes, toolbar=no, menubar=no, location=no,");
        this.close();
    }
    if(method==5){
        window.open("./misc/Minecraft.html", "_blank", "width=900,height=900,status=yes, toolbar=no, menubar=no, location=no,");
        this.close();
    }
    
}