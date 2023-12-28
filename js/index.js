//倒數計時
function getCountTime() {
    const nowDate = +new Date()    
    const deadline = +new Date('2024-01-05 23:59:59')     
    const count = (deadline - nowDate) / 1000
    
    // let d = parseInt(count / 60 / 60 / 24)
    // let h = parseInt(count / 60 / 60 % 24) 
    let h = parseInt(count / 60 / 60) 
    h = h < 10 ? '0' + h : h
    let m = parseInt(count / 60 % 60)
    m = m < 10 ? '0' + m : m
    let s = parseInt(count % 60)
    s = s < 10 ? '0' + s : s
    
    // const days = document.querySelector('#days')
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')

    // days.innerHTML = d
    hours.innerHTML = h
    minutes.innerHTML = m        
    seconds.innerHTML = s
}
getCountTime()
setInterval(getCountTime, 1000)

// 蓋版
const coverAd = document.querySelector('.cover')
const close = document.querySelector('.close')
setTimeout(() => {    
    coverAd.style.display = 'block'
}, 5000)
close.addEventListener('click', () => {
    coverAd.style.display = 'none'    
})

//提醒登入
function remind() {
    setTimeout(() => {    
        alert('你已經看了很久了，趕快登入或註冊成為新朋友吧！')       
    }, 10000)
}
remind()


const prodList = [            
    // {
    //     id: 1,
    //     pic: './images/products/1.jpg',
    //     product: '蔓越莓薄餅',
    //     isChecked: false,
    //     price: 220,
    //     num: 3,
    //     sort: 'cookie'          
    // },
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
    // {
    //     id: 6,
    //     pic: './images/products/6.jpg',
    //     product: '香草杯子蛋糕',
    //     isChecked: false,
    //     price: 70,
    //     num: 2,
    //     sort: 'cake' 
    // },
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
    // {
    //     id: 11,
    //     pic: './images/products/11.jpg',
    //     product: '薄荷杯子蛋糕',
    //     isChecked: false,
    //     price: 70,
    //     num: 2,
    //     sort:  'cake'
    // },
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
        price: 181,
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


function render(arr) {
    const goods = document.querySelector('.goods')
    let str = ''
    arr.forEach(item => {
        const {product, pic, price} = item
        str += `
        <div class="box col-lg-3 col-md-4 col-sm-6 col-6">
                    <a class="goods" href="./products.html">
                        <div class="pic" style="background-image: url('${pic}')">
                        </div>
                        <div class="text">
                            <h6>${product}<br>
                            <span>${price}元</span></h6>
                        </div>
                        <div class="pop-up">
                            <h4 class='more'>看更多<i class="pop-up-sign bi-chevron-right"></i></h4>                     
                        </div>
                    </a>
                </div>
        `
    })
    document.querySelector('.goodlist').innerHTML = str
}
render(prodList)

//種類篩選
document.querySelector('.filter').addEventListener('click', e => {
    const {tagName, dataset} = e.target
    if (e.target.tagName === 'A') {
        let arr = prodList
        if (dataset.index === '0') {
            arr = prodList
        } else if (dataset.index === '1') {
            arr = prodList.filter(item => item.sort === 'cake')
        } else if (dataset.index === '2') {
            arr = prodList.filter(item => item.sort === 'cookie')
        } else if (dataset.index === '3') {
            arr = prodList.filter(item => item.sort === 'chocolate')
        }
        render(arr)
    }
})


//評論區
const commentsList = document.querySelector('.comments-list')
const contents = document.querySelector('#contents')
const words = document.querySelector('.words')
const commentsItem = document.querySelector('.comments-item')
const commentsText = document.querySelector('.comments-text')
const commentsTime = document.querySelector('.comments-time')
const date = new Date()
const sent = document.querySelector('.sent')
contents.addEventListener('focus', function(){
    words.style.opacity = 1    
})
contents.addEventListener('blur', function(){
    words.style.opacity = 0   
})
contents.addEventListener('input', function(){
    words.innerHTML = `${contents.value.length}/200字`
})

// 新增評論
function addComments(){
    if (contents.value.trim()) {
        let div = document.createElement('div')
        div.classList.add('comments-item')            
        div.innerHTML = `
            <div class="info"> 
                <div class="user">
                    <i class="avator bi-person-circle"></i>
                    <div class="uname">
                        <p class="username">訪客</p>
                        <p class="comments-time">${date.toLocaleString()}</p>
                    </div>
                </div>            
                <p class="comments-text">${contents.value}</p>            
            </div>
        `             
        contents.value = ''
        words.innerHTML = '0/200字'
        commentsList.insertBefore(div, commentsList.firstChild)
        localStorage.setItem('commentsList', JSON.stringify(commentsList))
        }
}

contents.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
        addComments()        
    }
})

sent.addEventListener('click', function(e){
    addComments()        
    }
)


//計算購物車勾選數量
const prodListChecked = JSON.parse(localStorage.getItem('list'))  || [] 
const num = document.querySelector('.num')
function totalChecked () {
    let numChecked = prodListChecked.reduce((sum, item) => {
        if (item.isChecked) {
            return sum += 1
        } else {
            return sum
        }
    }, 0)
    num.innerHTML = numChecked
}
totalChecked ()


// const all = new Vue ({
//     el: '.all',
//     data: {
//         prodListChecked: JSON.parse(localStorage.getItem('list'))  || []
//     },
//     computed: {
//         totalChecked () {
//             return this.prodListChecked.reduce((sum, item) => {
//                 if (item.isChecked) {
//                     return sum += 1
//                 } else {
//                     return sum
//                 }
//             }, 0)
//         }
//     }
// })
