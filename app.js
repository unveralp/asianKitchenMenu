const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
//Button-Section
let categories=["All","Korea","Japan","China"];
categories.forEach((category,index) =>{
  let buttonDom=document.createElement("button");
  let parentOfButton=document.querySelector(".btn-container");
  buttonDom.className=`
  btn btn-outline-dark all btn-item ${category.toLowerCase()}
  `
  buttonDom.id=`${index+1}`
  buttonDom.innerHTML=category;
  parentOfButton.appendChild(buttonDom);
});
//end of the button-Section


//creating new arrays from menu!
const japan=[];
const korea=[];
const china=[];

menu.forEach((item)=>{
  if(item.category==="Korea"){
    korea.push(item);
  }else if(item.category==="Japan"){
    japan.push(item);
  }else if(item.category==="China"){
    china.push(item);
  }
});
// end of the creating new arrays

//creating clicked buttons with their classNames
let allBtn=document.querySelector(".all");
let japanBtn=document.querySelector(".japan");
let koreaBtn=document.querySelector(".korea");
let chinaBtn=document.querySelector(".china");
let bodyBtn=document.querySelector(".section-center");
// end of the clickedButtonDom


//adding events to the new buttons
 allBtn.addEventListener("click",clicked);
 japanBtn.addEventListener("click",clicked);
 koreaBtn.addEventListener("click",clicked);
 chinaBtn.addEventListener("click",clicked);

//end


//creating html according to given array
function creatingFunction(array){
  array.map(item=>{
    let div1=document.createElement("div");
    let parentOfElement=document.querySelector(".section-center");
    div1.className="menu-items col-lg-6 col-sm-12";
    parentOfElement.appendChild(div1);

    let div2=document.createElement("div");
    div2.className="menu-info";
    div1.appendChild(div2);

    let div3=document.createElement("div");
    div3.className="menu-title";
    div2.appendChild(div3);

    let div4=document.createElement("div");
    div4.className="menu-text";
    div2.appendChild(div4);

    let img=document.createElement("img");
    img.className="photo";
    img.src=item.img;
    div2.appendChild(img);

    let titleInfo=document.createElement("h4");
    titleInfo.innerHTML=item.title;
    div3.appendChild(titleInfo);
    let priceInfo=document.createElement("h4")
    priceInfo.innerHTML=item.price;
    div3.appendChild(priceInfo);

    let text=document.createElement("p");
    text.innerHTML=item.desc;
    div4.appendChild(text);
  })
}

//controlling clicked events
function clicked(){
  //deleting firstchild element if clicked one more
  while (bodyBtn.hasChildNodes()) {
   bodyBtn.removeChild(bodyBtn.firstChild);
 }
//end


 if(this.id==="1"){
  creatingFunction(menu);

}else if(this.id==="2"){
  creatingFunction(korea);

}else if(this.id==="3"){
  creatingFunction(japan);

}else{
  creatingFunction(china);
}
}

//end
