// const prodList = [            
//     {
//         id: 1,
//         pic: './images/products/1.jpg',
//         product: '蔓越莓薄餅',
//         isChecked: false,
//         price: 220,
//         num: 0,
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
//     }
// ]



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


