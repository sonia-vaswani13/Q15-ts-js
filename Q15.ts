//Q15.Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.


//Start with your program from Exercise 14. Add a 
//print statement at the end of your program stating the name of the guest who can’t make it.


let frndsArr: string[] =["Adv Haya","Adv Bushra","Adv Sidra","Adv zareena"]

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let CanNotAttend: string ="Adv Bushra"
console.log(CanNotAttend+  ``+ 
"Can not make it for dinner");
let newguest:string = "Izna"

frndsArr[frndsArr.indexOf( CanNotAttend)]= newguest
console.log(frndsArr)

//• Print a second set of invitation messages, one for each person who is still in your list.

frndsArr.map((item) =>
console.log(` Dear ${item}, 
you are cordinally invited to a dinner`)
)



