

letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+"

// randomize the upper  lower number and speacial 
// generate random no .


function passwordGenerator(){
    pwdlen=15
    res=""
    for(let i=0;i<pwdlen;i++){
        randomno=Math.floor(Math.random()*letters.length)
        // console.log(randomno)
        res+=letters.charAt(randomno)
    }

    return res
}


// console.log(passwordGenerator())
function isvalid(s){
    c1=0
    c2=0
    c3=0
    c4=0

    for(let i=0;i<s.length;i++){

        c=s.charAt(i)
        if(c>='A' && c<='Z') c1=1
        else if(c>='a' && c<='z') c2=1
        else if (!isNaN(parseInt(c))) c3=1
        else {
            special="!@#$%^&*()-_=+"
            for(let j=0; j<special.length;j++){
                if (c==special.charAt(j)){
                    c4=1
                    break
                }
            }
        }

    }
    total= c1+c2+c3+c4
    // console.log(c1,c2,c3,c4)
    return total==4
}

// k=passwordGenerator()


// while (!isvalid(k)){
//     k=passwordGenerator()
// }
// console.log(k)

// h=k

mybutton=document.getElementById("button")
mybutton.addEventListener("click",myFunction )

function myFunction() {
    h=document.getElementById("inputvalue")
    k=passwordGenerator()
    while (!isvalid(k)){
        k=passwordGenerator()
    }
    h.value=k
  }


//   copy to clipboard

function copytoclip(){
    console.log("Clip")
    let inp=document.getElementById("inputvalue")
    let inpvalue=inp.value


      // Use the Clipboard API to copy the value to the clipboard
      navigator.clipboard.writeText(inpvalue)
        .then(() => {
          console.log('Text successfully copied to clipboard');
        })
        .catch(err => {
          console.error('Unable to copy text to clipboard', err);
        });
}