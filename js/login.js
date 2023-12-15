const all = new Vue ({
    el: '.all',
    data: {
        username: '',
        password: ''
    },
    methods: {
        reset() {
            this.username = '',
            this.password = ''
        },
        logInReminder() {
            alert('請先登入才能查看購物車唷！')
        },
        verifyUname() {
            if (this.username.trim() !== 'test123') {
                // console.log(this.username)
                // console.log('輸錯誤帳號')
                return false
            } else {
                // console.log('輸入正確')
                return true
            }            
        },
        verifyPwd() {
            if (this.password.trim() !== 'welcome') {
                // console.log('錯了')
                return false
            } else {
                // console.log('輸入正確')
                return true
            }            
        },
        login(e) {
            console.log('按了')  
            if (this.username !== 'test123' || this.password !== 'welcome') {
                alert('您輸入的帳號或密碼有誤')              
                e.preventDefault() 
                return false
            } else {
                alert ('登入成功')
                return true
            }            
        },
        test() {
            alert ('試用帳號：test123；試用密碼：welcome')
        }  
    }
})

