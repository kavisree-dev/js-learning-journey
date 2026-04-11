//day1-variables in js
/*variables are containers for storing information like we already seen in java
js variables can be declared in 4 ways
    -var
    -let
    -const
    -automatically
*/
//var--globally scoped
/*var--can access from anywhere
  can reclare and can update the value*/
var FirstName="Kav";
    FirstName="Kavi";
console.log(FirstName);
{var LastName="sri";
 var LastName="Sree";
}
console.log(LastName);

//let--block scoped
/*let--cannot access outside the block 
   can update the value but.. cannot redeclare*/
var qualification="Engineering";
{let specification="ECE";
    specification="Electronics and Communication Engineering";
    console.log(qualification);
    console.log(specification);
}
//const--block scoped and constant
/*const--cannot redeclare and cannot update*/
{const college="AAMEC";
console.log(college);
}
