const defaultArr = [            
    {
        id: 1,
        pic: './images/products/1.jpg',
        product: '蔓越莓薄餅',
        isChecked: false,
        price: 220,
        num: 3,
        sort: 'cookie'          
    },
    {
        id: 2,
        pic: './images/products/2.jpg',
        product: '香草黑森林',
        isChecked: false,
        price: 200,
        num: 2,
        sort: 'cake'  
    },
    {
        id: 3,
        pic: './images/products/3.jpg',
        product: '草莓可可慕斯',
        isChecked: false,
        price: 240,
        num: 1,
        sort: 'cake' 
    },
    {
        id: 4,
        pic: './images/products/4.jpg',
        product: '橙香青檸慕斯',
        isChecked: false,
        price: 120,
        num: 5,
        sort: 'cake' 
    },
    {
        id: 5,
        pic: './images/products/5.jpg',
        product: '比利時奶油餅乾',
        isChecked: false,
        price: 480,
        num: 1,
        sort: 'cookie' 
    },
    {
        id: 6,
        pic: './images/products/6.jpg',
        product: '香草杯子蛋糕',
        isChecked: false,
        price: 70,
        num: 2,
        sort: 'cake' 
    },
    {
        id: 7,
        pic: './images/products/7.jpg',
        product: '草莓層層甜心',
        isChecked: false,
        price: 150,
        num: 5,
        sort: 'cake' 
    },
    {
        id: 8,
        pic: './images/products/8.jpg',
        product: '草莓生乳捲',
        isChecked: false,
        price: 290,
        num: 5,
        sort: 'cake' 
    },
    {
        id: 9,
        pic: './images/products/9.jpg',
        product: '草莓可可芭蕾',
        isChecked: false,
        price: 250,
        num: 5,
        sort: 'cake' 
    },
    {
        id: 10,
        pic: './images/products/10.jpg',
        product: '夢幻玫瑰',
        isChecked: false,
        price: 1500,
        num: 1,
        sort: 'cake' 
    },
    {
        id: 11,
        pic: './images/products/11.jpg',
        product: '薄荷杯子蛋糕',
        isChecked: false,
        price: 70,
        num: 2,
        sort:  'cake'
    },
    {
        id: 12,
        pic: './images/products/12.jpg',
        product: '熱帶繽紛派對',
        isChecked: false,
        price: 1200,
        num: 1,
        sort: 'cake' 
    },
    {
        id: 13,
        pic: './images/products/c1.jpg',
        product: '甜心馬卡龍',
        isChecked: false,
        price: 120,
        num: 2,
        sort: 'cookie' 
    },
    {
        id: 14,
        pic: './images/products/c2.jpg',
        product: '心心相印',
        isChecked: false,
        price: 80,
        num: 1,
        sort: 'cookie' 
    },
    {
        id: 15,
        pic: './images/products/c3.jpg',
        product: '法國可可捲心酥',
        isChecked: false,
        price: 180,
        num: 1,
        sort: 'cookie'  
    },
    {
        id: 16,
        pic: './images/products/o1.jpg',
        product: '松露巧克力',
        isChecked: false,
        price: 220,
        num: 1,
        sort: 'chocolate'  
    },
    {
        id: 17,
        pic: './images/products/o2.jpg',
        product: '心跳巧克力禮盒',
        isChecked: false,
        price: 800,
        num: 1,
        sort: 'chocolate'  
    },
    {
        id: 18,
        pic: './images/products/c4.jpg',
        product: '香草派對',
        isChecked: false,
        price: 350,
        num: 1,
        sort: 'cookie'  
    },
    {
        id: 19,
        pic: './images/products/c5.jpg',
        product: '聖誕薑餅',
        isChecked: false,
        price: 320,
        num: 1,
        sort: 'cookie'  
    },
    {
        id: 20,
        pic: './images/products/c6.jpg',
        product: '櫻桃甜心',
        isChecked: false,
        price: 180,
        num: 1,
        sort: 'cookie'  
    },
    {
        id: 21,
        pic: './images/products/c7.jpg',
        product: '橙香花語',
        isChecked: false,
        price: 180,
        num: 1,
        sort: 'cookie'  
    },
    {
        id: 22,
        pic: './images/products/o3.jpg',
        product: '白色戀人',
        isChecked: false,
        price: 260,
        num: 1,
        sort: 'chocolate'  
    },
    {
        id: 23,
        pic: './images/products/o4.jpg',
        product: '巧克棒棒',
        isChecked: false,
        price: 160,
        num: 1,
        sort: 'chocolate'  
    },
    {
        id: 24,
        pic: './images/products/o5.jpg',
        product: '經典甜蜜禮盒',
        isChecked: false,
        price: 880,
        num: 1,
        sort: 'chocolate'  
    },
    {
        id: 25,
        pic: './images/products/o6.jpg',
        product: '牛奶巧克力',
        isChecked: false,
        price: 80,
        num: 1,
        sort: 'chocolate'  
    },
    {
        id: 26,
        pic: './images/products/o7.jpg',
        product: '薄荷巧克力禮盒',
        isChecked: false,
        price: 800,
        num: 1,
        sort: 'chocolate'  
    },
    {
        id: 27,
        pic: './images/products/o8.jpg',
        product: '岩石巧克力',
        isChecked: false,
        price: 230,
        num: 1,
        sort: 'chocolate'  
    },
]

const all = new Vue ({
    el: '.all',
    data: {
        prodList: JSON.parse(localStorage.getItem('list'))  || defaultArr,        
        // prodList : [            
        //     {
        //         id: 1,
        //         pic: './images/products/1.jpg',
        //         product: '蔓越莓薄餅',
        //         isChecked: false,
        //         price: 220,
        //         num: 3,
        //         sort: 'cookie'          
        //     },
        //     {
        //         id: 2,
        //         pic: './images/products/2.jpg',
        //         product: '香草黑森林',
        //         isChecked: false,
        //         price: 200,
        //         num: 2,
        //         sort: 'cake'  
        //     },
        //     {
        //         id: 3,
        //         pic: './images/products/3.jpg',
        //         product: '草莓可可慕斯',
        //         isChecked: false,
        //         price: 240,
        //         num: 1,
        //         sort: 'cake' 
        //     },
        //     {
        //         id: 4,
        //         pic: './images/products/4.jpg',
        //         product: '橙香青檸慕斯',
        //         isChecked: false,
        //         price: 120,
        //         num: 5,
        //         sort: 'cake' 
        //     },
        //     {
        //         id: 5,
        //         pic: './images/products/5.jpg',
        //         product: '比利時奶油餅乾',
        //         isChecked: false,
        //         price: 480,
        //         num: 1,
        //         sort: 'cookie' 
        //     },
        //     {
        //         id: 6,
        //         pic: './images/products/6.jpg',
        //         product: '香草杯子蛋糕',
        //         isChecked: false,
        //         price: 70,
        //         num: 2,
        //         sort: 'cake' 
        //     },
        //     {
        //         id: 7,
        //         pic: './images/products/7.jpg',
        //         product: '草莓層層甜心',
        //         isChecked: false,
        //         price: 150,
        //         num: 5,
        //         sort: 'cake' 
        //     },
        //     {
        //         id: 8,
        //         pic: './images/products/8.jpg',
        //         product: '草莓生乳捲',
        //         isChecked: false,
        //         price: 290,
        //         num: 5,
        //         sort: 'cake' 
        //     },
        //     {
        //         id: 9,
        //         pic: './images/products/9.jpg',
        //         product: '草莓可可芭蕾',
        //         isChecked: false,
        //         price: 250,
        //         num: 5,
        //         sort: 'cake' 
        //     },
        //     {
        //         id: 10,
        //         pic: './images/products/10.jpg',
        //         product: '夢幻玫瑰',
        //         isChecked: false,
        //         price: 1500,
        //         num: 1,
        //         sort: 'cake' 
        //     },
        //     {
        //         id: 11,
        //         pic: './images/products/11.jpg',
        //         product: '薄荷杯子蛋糕',
        //         isChecked: false,
        //         price: 70,
        //         num: 2,
        //         sort:  'cake'
        //     },
        //     {
        //         id: 12,
        //         pic: './images/products/12.jpg',
        //         product: '熱帶繽紛派對',
        //         isChecked: false,
        //         price: 1200,
        //         num: 1,
        //         sort: 'cake' 
        //     },
        //     {
        //         id: 13,
        //         pic: './images/products/c1.jpg',
        //         product: '甜心馬卡龍',
        //         isChecked: false,
        //         price: 120,
        //         num: 2,
        //         sort: 'cookie' 
        //     },
        //     {
        //         id: 14,
        //         pic: './images/products/c2.jpg',
        //         product: '心心相印',
        //         isChecked: false,
        //         price: 80,
        //         num: 1,
        //         sort: 'cookie' 
        //     },
        //     {
        //         id: 15,
        //         pic: './images/products/c3.jpg',
        //         product: '法國可可捲心酥',
        //         isChecked: false,
        //         price: 180,
        //         num: 1,
        //         sort: 'cookie'  
        //     },
        //     {
        //         id: 16,
        //         pic: './images/products/o1.jpg',
        //         product: '松露巧克力',
        //         isChecked: false,
        //         price: 220,
        //         num: 1,
        //         sort: 'chocolate'  
        //     },
        //     {
        //         id: 17,
        //         pic: './images/products/o2.jpg',
        //         product: '心跳巧克力禮盒',
        //         isChecked: false,
        //         price: 800,
        //         num: 1,
        //         sort: 'chocolate'  
        //     },
        //     {
        //         id: 18,
        //         pic: './images/products/c4.jpg',
        //         product: '香草派對',
        //         isChecked: false,
        //         price: 350,
        //         num: 1,
        //         sort: 'cookie'  
        //     },
        //     {
        //         id: 19,
        //         pic: './images/products/c5.jpg',
        //         product: '聖誕薑餅',
        //         isChecked: false,
        //         price: 320,
        //         num: 1,
        //         sort: 'cookie'  
        //     },
        //     {
        //         id: 20,
        //         pic: './images/products/c6.jpg',
        //         product: '櫻桃甜心',
        //         isChecked: false,
        //         price: 180,
        //         num: 1,
        //         sort: 'cookie'  
        //     },
        //     {
        //         id: 21,
        //         pic: './images/products/c7.jpg',
        //         product: '橙香花語',
        //         isChecked: false,
        //         price: 180,
        //         num: 1,
        //         sort: 'cookie'  
        //     },
        //     {
        //         id: 22,
        //         pic: './images/products/o3.jpg',
        //         product: '白色戀人',
        //         isChecked: false,
        //         price: 260,
        //         num: 1,
        //         sort: 'chocolate'  
        //     },
        //     {
        //         id: 23,
        //         pic: './images/products/o4.jpg',
        //         product: '巧克棒棒',
        //         isChecked: false,
        //         price: 160,
        //         num: 1,
        //         sort: 'chocolate'  
        //     },
        //     {
        //         id: 24,
        //         pic: './images/products/o5.jpg',
        //         product: '經典甜蜜禮盒',
        //         isChecked: false,
        //         price: 880,
        //         num: 1,
        //         sort: 'chocolate'  
        //     },
        //     {
        //         id: 25,
        //         pic: './images/products/o6.jpg',
        //         product: '牛奶巧克力',
        //         isChecked: false,
        //         price: 80,
        //         num: 1,
        //         sort: 'chocolate'  
        //     },
        //     {
        //         id: 26,
        //         pic: './images/products/o7.jpg',
        //         product: '薄荷巧克力禮盒',
        //         isChecked: false,
        //         price: 800,
        //         num: 1,
        //         sort: 'chocolate'  
        //     },
        //     {
        //         id: 27,
        //         pic: './images/products/o8.jpg',
        //         product: '岩石巧克力',
        //         isChecked: false,
        //         price: 230,
        //         num: 1,
        //         sort: 'chocolate'  
        //     },
        // ]
    },
    computed: {        
        // 所有小框都選，此框才選every。        
        isAll: {
            get () {
                if (this.prodList.length !== 0) {
                    return this.prodList.every(item => item.isChecked === true)
                }
                // return this.prodList.every(item => item.isChecked === true)
            },
            set (value) {
                this.prodList.forEach(item => item.isChecked = value )
                
            }            
        },
        totalCount () {
            return this.prodList.reduce((sum, item) => {
                if (item.isChecked) {
                    return sum + item.num
                } else {
                    return sum
                }
            }, 0)
        },
        totalPrice () {
            return this.prodList.reduce((sum, item) => {
                if (item.isChecked) {
                    return sum + item.num * item.price
                } else {
                    return sum
                }
            }, 0)
        },
        totalChecked () {
            return this.prodList.reduce((sum, item) => {
                if (item.isChecked) {
                    return sum += 1
                } else {
                    return sum
                }
            }, 0)
        }
    },
    methods: {
        del (id) {
            this.prodList = this.prodList.filter(item => item.id !== id)
        },
        add (id) {
            const prod = this.prodList.find(item => item.id === id)
            prod.num++
        },
        sub (id) {
            const prod = this.prodList.find(item => item.id === id)
            prod.num--            
        },        
        submit () {
            alert('Oops, 老闆做蛋糕技術還沒學好，等學好再幫您出貨囉！')
        }
    },
    // 無後台:變化暫存本地
    watch: {
        prodList: {
            deep: true,
            handler (newValue) {
                localStorage.setItem('list', JSON.stringify(newValue))
            }
        }
    },
})