const form = document.querySelector('#searchForm'); //to search searchForm use hash# for id name
/*const res = document.querySelector('#rrr'); //for fetching price
const vol = document.querySelector('#vvv'); //for fetching volume
I am going to fetch the whole table
*/
const res = document.querySelector('#TableResult');
var upd;


form.addEventListener('submit', (e) => { //this functionn will work at submit button
    e.preventDefault(); //this will prevent refreshing
    if (upd) {
        clearTimeout(upd);
    }
    const ctype = form.elements.coinType.value; //ctype is cointype variable 
    fetchPrice(ctype); //instead of output console.log(ctype); here i had fetch the cointype 
});

const fetchPrice = async(ctype) => { //we had passed the ctype using async
    //to fetch api i hadd dloaded axios from github
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`); //we use APIs to fetch data
    //whenever we use async to fetch API we use await cuz we do wait for the API to get fetch
    //since we don't want only 1 type of coin detail so we will use ctype variable inside slant comma`this is besides 1`
    // console.log(r.data.coin.price);
    //this data.coin.price is to fetch coin price from console window by right clicking on website and click on inspect ther go to data then to coin then to price 
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change = r.data.coin.change;
    const base = r.data.coin.name;
    const target = 'USD';
    //at base   r.data.coin.name;
    //target = 'USD';
    //remove the time thing  const time= r.data.ticker
    //remove the time tab

    //    res.innerHTML = `${price}` //either i can push code here in here or i can directly push value
    //this will show the price of the particular coin 

    //but this looks bbad so now I need bootstrap

    /*res.innerHTML = `${price}`;
    vol.innerHTML = `${volume}`;
    I will use innerHTML to put whole HTML code of table here*/
    res.innerHTML = `<tr style="background-color:blue; color:white; font-weight: 700">
    <td>Property</td>
    <td>Value</td>
</tr>
<tr>
    <td>${base}</td>
    <td id="rrr">${price} ${target} </td>
</tr>
<tr>
    <td>Volume</td>
    <td id="vvv">${volume}</td>
</tr>`
        //to update time 

    upd = setTimeout(() => fetchPrice(ctype), 10000)
        //30000ms=30sec API that I had used is limited till 30 sec 



}