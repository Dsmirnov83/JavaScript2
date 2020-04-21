
const goods = [
  { foto: 'Img/shot.jpeg', title: 'Shirt', price: 150 },
  { foto: 'Img/soks.jpeg', title: 'Socks', price: 50 },
  { foto: 'Img/jaket.jpg', title: 'Jacket', price: 350 },
  { foto: 'Img/shoes.jpg', title: 'Shoes', price: 250 },
];

const renderGoodsItem = (foto, title, price) => {
  return `<div class="goods-item"><img class="tradeimg" src="${foto}" alt=""><h3>${title}</h3><p>${price}</p> <button class="cart-button1" type="button">В корзину</button> </div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.foto, item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);