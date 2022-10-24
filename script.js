var names=new Array();
names[0]="mahdi"; names[1]="Yaakov"; names[2]="John"; names[3]="Jen"; names[4]="Jason"; names[5]="Paul"; names[6]="Frank"; names[7]="Larry"; names[8]="Paula"; names[9]="Laura";
for (var i = 0; i < names.length; i++) {
if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
console.log("Goodbye "+ names[i])
}
else{
console.log("Hello "+ names[i])
}
}
