var names = new Array();
names[0]="frank";
names[1]="John";
names[2]="Laura";
names[3]="jason";
names[4]="paul";
names[5]="Yaakov";
names[6]="Jen";
names[7]="paula";
names[8]="jim";
names[9]="larry";


// console.log(names[1].charAt(2));
for (var i = 0; i< names.length; i++){

    // console.log(names[i])
    if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
        console.log("Goodbye "+names[i]);
    }else{
        console.log("Hello " +names[i]);
    }
}
