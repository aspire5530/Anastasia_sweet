// 驗證帳號
const account = document.querySelector('[name = account]')
account.addEventListener('change', verifyAccount)
function verifyAccount(){
    const alert = account.nextElementSibling
    const reg = /^[a-zA-Z0-9_-]{6,15}$/
    if (!reg.test(account.value)) {
        alert.innerHTML = '您的帳號格式有誤'
        return false
    } 
    alert.innerHTML = ''
    return true
}

//驗證密碼
const pwd = document.querySelector('[name = pwd]')
pwd.addEventListener('change', verifyPwd)
function verifyPwd(){
    const alert = pwd.nextElementSibling
    const reg = /^[a-zA-Z\d_-]{6,15}$/
    if (!reg.test(pwd.value)) {
        alert.innerHTML = '您的密碼格式有誤'
        return false
    }
    alert.innerHTML = ''
    return true
}

//確認密碼
const confirm = document.querySelector('[name = confirm]')
confirm.addEventListener('change', verifyConfirm)
function verifyConfirm() {
    const alert = confirm.nextElementSibling
    if ( confirm.value !== pwd.value) {
        alert.innerHTML = '您輸入的密碼與前一次不同'
        return false
    } else {
        alert.innerHTML = ''
        return true
    }
    
}

//驗證手機
const phone = document.querySelector('[name = phone]')
phone.addEventListener('change', verifyPhone)
function verifyPhone() {
    const alert = phone.nextElementSibling
    const reg = /^09[0-9]{8}$/
    if (!reg.test(phone.value)) {
        alert.innerHTML = '您輸入的手機有誤'
        return false
    } 
        alert.innerHTML = ''
        console.log('已輸入手機')
        return true       
}

//發送驗證碼
const sent = document.querySelector('.sent')
let flag = true
let ranStr = ''
sent.addEventListener('click', function(){
    //每次按鍵前清空驗證碼
    ranStr = ''
    //每次按鍵前清空原先輸入的驗證碼    
    if (flag) {
        flag = false 
        let i = 5
        sent.innerHTML = `${i}秒後重新獲取`
        let timerId = setInterval(function(){
            i--
            sent.innerHTML = `${i}秒後重新獲取`
            
            if (i === 0) {
                clearInterval(timerId)
                flag = true
                sent.innerHTML = '發送驗證碼'
            }
        }, 1000)
    }
    //產生驗證碼        
    for (let i = 1; i <= 6; i++) {
        let random = Math.floor(Math.random() * 10)
        let str = random.toString()      
        ranStr += str    
    }
    alert ('您的驗證碼為：'+ ranStr)            
})
    
//驗證碼驗證
const msg = document.querySelector('[name = msg]')
msg.addEventListener('change', verifyMsg)
function verifyMsg() {
    const alert = sent.nextElementSibling                       
    if (msg.value !== ranStr) {
        alert.innerHTML = '您輸入的驗證碼有誤'                
        return false
    }
    alert.innerHTML = ''
    return true
}

// 驗證姓名
const uname = document.querySelector('[name = uname]')
uname.addEventListener('change', verifyUname)
function verifyUname() {
    const alert = uname.nextElementSibling 
    if (uname.value.trim() === '') {  
        alert.innerHTML = '請輸入您的大名'
        return false
    }
    alert.innerHTML = ''
    return true
}

//驗證地址
const address = document.querySelector('[name = address]')
address.addEventListener('change', verifyAddress)
function verifyAddress() {
    const alert = address.nextElementSibling 
    if (address.value.trim() === '') {  
        alert.innerHTML = '請輸入您的收件地址'
        return false
    } else {
        alert.innerHTML = ''    
        return true   
    }
     
}

//同意書倒數
const agreebtn = document.querySelector('.agreebtn')
const agreement = document.querySelector('.agreement')
const checkbox = document.querySelector('.checkbox')
checkbox.disabled = true
let flagAree = true
agreement.addEventListener('click', function(){
    if (flagAree) {            
        flagAree = false 
        let i = 10
        agreebtn.innerHTML = `已閱讀並同意《使用者同意書》(${i})`
        let timerId = setInterval(function(){
            i--
            agreebtn.innerHTML = `已閱讀並同意《使用者同意書》(${i})`
            
            if (i === 0) {
                clearInterval(timerId)
                flagAree = true
                agreebtn.style.color = '#000'
                checkbox.disabled = false
                agreebtn.innerHTML = `已閱讀並同意《使用者同意書》`
            }
        }, 1000)
    }                
})           

//驗證勾選同意書
const btn = document.querySelector('.btn')
btn.addEventListener('click', verifyAgree)
function verifyAgree(){
    if (!checkbox.checked) {        
        return false
    } else {
        console.log('勾了')
        return true
    }    
}

//送出
const form = document.querySelector('form')
form.addEventListener('submit', function(e){    
    // if (!verifyAccount()) e.preventDefault()
    // if (!verifyPhone()) e.preventDefault()
    // if (!verifyPwd()) e.preventDefault()
    // if (!verifyConfirm()) e.preventDefault()
    // if (!verifyMsg()) e.preventDefault()
    // if (!verifyUname()) e.preventDefault()
    // if (!verifyAddress()) e.preventDefault()
    // if (!verifyAgree()) e.preventDefault()
    if (!verifyAccount() || !verifyPwd() || !verifyConfirm() || !verifyPhone() || !verifyMsg() || !verifyUname() || !verifyAddress() || !verifyAgree()) {
        e.preventDefault()
        alert('請確認是否必填欄位皆已填寫')
    }    else {
        alert ('謝謝您的註冊')
    }
})



















