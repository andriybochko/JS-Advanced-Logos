let getId = x => document.getElementById(x);

let newShop = (function(){
    let balance = 1000;
    let sum = 0;

    let products = {
        beer: {
            price: 30,
            count: 100
        },
    
        wine: {
            price: 150,
            count: 50
        },
    
        pepsi: {
            price: 20,
            count: 80
        }
    }

    return {
        buy: function(count, prod){
            if(count > products[prod].count){
                alert(`Лишилося ${prod}  ${products[prod].count} штук`)
                return false;
            }
            else{
                products[prod].count -= count;
                balance += count * products[prod].price;
                sum += count * products[prod].price;
                return true;
            }
        },
        getProd: function(prod){
            return `На складі лишилося ${products[prod].count} штук ${prod}`
        },
        getBalance: () => `${balance} грн`,
        getSum: () => `Всього: ${sum} гривень`,
        resetCheck: () => sum = 0,
        showAll: () => products,
        showProduct: (prod) => `${products[prod].count} шт.`
    }
}());

(function(shop){

    getId('beer').value = shop.showProduct('beer');
    getId('wine').value = shop.showProduct('wine');
    getId('pepsi').value = shop.showProduct('pepsi');
    getId('balance').value = shop.getBalance();
            
    getId('add').addEventListener('click', ()=>{
        let count = getId('count').value;
        let productName = document.querySelector('input[type="radio"]:checked').value;
        let name = document.querySelector('input[type="radio"]:checked').parentElement.innerText;
        
        console.log(shop.getProd(productName));

        if(shop.buy(count, productName)){
            if(count != "" && count>0){
            getId('all').innerHTML += `${name}: ${count} шт. <br>`;
            }
        }
        else{
            getId('all').innerHTML += "";
        }
    })

    getId('buy').addEventListener('click', ()=>{
        if(getId('all').innerHTML != "") {
            getId('check').innerHTML = getId('all').innerHTML+shop.getSum();
            getId('all').innerHTML = "";
            shop.resetCheck();
            getId('beer').value = shop.showProduct('beer');
            getId('wine').value = shop.showProduct('wine');
            getId('pepsi').value = shop.showProduct('pepsi');
            getId('balance').value = shop.getBalance();
        }
    })
        
    console.log(shop.showAll());
    console.log(shop.getBalance());

}(newShop))
    