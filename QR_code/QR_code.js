const qr_input=document.getElementById("text_input")
const btn=document.getElementById("btn")
const img=document.getElementById("img")


// btn.addEventListener('click' ,()=>{
//     const inputvalue= qr_input.value 
//     console.log(inputvalue)
//     if(!inputvalue){
//         alert("Please enter a valid URL")
//         return
//     }
//     else{
//         const qr =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
//         img.src=qr
//         img.alt=`QR code for  ${inputvalue}`


//     }
// })

function load_img(){
    const inputvalue=qr_input.value
    console.log(inputvalue.search(/[a-z]/))
    if (inputvalue==null){
        alert("Please enter a valid URL")
    }
    else{
        const qr=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
        img.src=qr
        img.alt=`QR code for  ${inputvalue}`
    }
}