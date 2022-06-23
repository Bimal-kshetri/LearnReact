function O(){
    // age= 40;
    const obj_ = {name:"bimal",
                age : 20,
                home : function() {
                    return this.name , " is from Baglung";  //here this represent ob_ object.
                }};
    // document.getElementById("object").innerHTML = "name: "+obj_.name+"<br>age: "+this.age+"<br>home:"+obj_.home();   //this is not working.
    // document.getElementById("object").innerHTML = "name: "+obj_.name+"<br>age: "+this.age+"<br>home:"+obj_.home();   // age will be 40 as this represent function
    // document.getElementById("object").innerHTML = "name: "+obj_.name+"<br>age: "+obj_.age+"<br>home:"+obj_.home;   //home is not working.
    document.getElementById("object").innerHTML = "name: "+obj_.name+"<br>age: "+obj_.age+"<br>home:"+obj_.home();
}