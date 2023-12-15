const prodList = [            
    {
        id: 1,
        pic: './images/products/1.jpg',
        product: '蔓越莓薄餅',
        isChecked: false,
        price: 220,
        num: 0,
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

function render(arr) {
    const goods = document.querySelector('.goods')
    let str = ''
    arr.forEach(item => {
        const {product, pic, price} = item
        str += `
        <div class="select col-lg-3 col-md-6">
                    <a class="goods-item" href="#">
                        <div class="pic" style="background-image: url('${pic}')"></div>
                        <div class="text">
                            <h6>${product}</h6>
                            <p>$${price}</p>
                        </div>
                        <i class="buy-btn bi-cart-plus"></i>
                        <div class="buy">
                            <i class='num-tag'>購買數量</i>  
                            <i class="bi-dash-square"></i><span class='num'>1</span><i class="bi-plus-square"></i>
                            <button class="buy-now">加入購物車</button>
                        </div>
                    </a>
                </div>
        `
    })
    document.querySelector('.goodlist').innerHTML = str
}
render(prodList)

//添加購物車功能
// function del (id) {
//     prodList = prodList.filter(item => item.id !== id)
// }
// function add (id) {
//     const prod = this.prodList.find(item => item.id === id)
//     prod.num++
// }
// function sub (id) {
//     const prod = this.prodList.find(item => item.id === id)
//     prod.num--            
// }



//價格篩選
document.querySelector('.filter').addEventListener('click', e => {
    const {tagName, dataset} = e.target
    if (e.target.tagName === 'A') {
        let arr = prodList
        if (dataset.index === '1') {
            arr = prodList.filter(item => item.price > 0 && item.price <= 200)
        } else if (dataset.index === '2') {
            arr = prodList.filter(item => item.price > 200 && item.price <= 800)
        } else if (dataset.index === '3') {
            arr = prodList.filter(item => item.price > 800)
        }
        render(arr)
    }
})

//購買
const buyBtns = document.querySelectorAll('.buy-btn')
buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(1111)
        e.target.nextElementSibling.style.bottom = '0px'

    })
})

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
