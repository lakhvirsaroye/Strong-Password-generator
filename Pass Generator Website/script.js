let password = document.getElementById('password');
let copy = document.getElementById('copy');

let length = document.getElementById('length');
let slider= document.getElementById('slider');
// let Password = password.value;
let btn = document.getElementById('create');
let upperCheck = document.getElementById('upperCheck');
let lowerCheck = document.getElementById('lowerCheck');
let numbersCheck = document.getElementById('numbersCheck');
let symbolsCheck = document.getElementById('symbolsCheck');

let Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lowercase = "abcdefghijklmnopqrstuvwxyz"; 
let Numbers = "1234567890";
let Symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";


let L = 8;

slider.addEventListener('input', ()=>{
    length.textContent = slider.value;
     L = length.textContent;
     PassGenerator();
    })
    
    PassGenerator = () =>{
        Password = "";
    
        if(upperCheck.checked){
            Password += Uppercase;
        }
    
        if(lowerCheck.checked){
            Password += Lowercase;
        }
    
        if(numbersCheck.checked){
            Password += Numbers;
        }
        
        if(symbolsCheck.checked){
            Password += Symbols;
        }
        
        let p = "";
        
        for(let i = 1; i<=L;i++){
            let random = Math.floor(Math.random()*Password.length);
            
            
            p += Password[random];
            
            if(i==L){
                password.value = p;
            }
       }
    }

    PassGenerator();
    
    btn.addEventListener('click', ()=>{
        PassGenerator();
    })

const checks = [upperCheck, lowerCheck, numbersCheck, symbolsCheck];

checks.forEach(check => {

    check.addEventListener("change", () => {

        let checked = checks.filter(c => c.checked);

        if (checked.length === 1) {
            checked[0].disabled = true;
        } 
        else {
            checks.forEach(c => c.disabled = false);
        }

    });

});


copy.addEventListener("click", () => {
    navigator.clipboard.writeText(password.value);

    copy.innerHTML = 'copied!'
    copy.style.backgroundColor = 'white';
    copy.style.color = '#e81147';
    copy.style.outline = '1px solid #e81147';
    setTimeout(()=>{
        copy.innerHTML = 'Copy password'
        copy.style.backgroundColor = '#e81148';
    copy.style.color = 'white';
    copy.style.outline = 'none';
    },400)
    
});