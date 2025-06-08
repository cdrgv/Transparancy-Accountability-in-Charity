let head=document.getElementById("head")
let string1=['W','e','l','c','o','m','e',' ','t','o',' ','C','h','a','r','i','t','y']
string1.forEach((element,index) => {
    setTimeout(()=>{
    head.innerHTML+=element
    },90*index)
});

let images=["https://i.pinimg.com/736x/90/cf/73/90cf73b22eff2ddfef7a05ea8065df4f.jpg","https://w7.pngwing.com/pngs/963/617/png-transparent-charitable-organization-charity-donation-foundation-health-care-chare-love-text-logo.png","https://www.dextratechnologies.com/theme/image/Products/Charity%20Firm%20Management%20Software.webp"]
let index=0;
setInterval(()=>{
    index=(index+1)%images.length;
    document.getElementById("image").src=images[index];
},3000)

let list=document.getElementById("lists")
let quotes=["Charity begins with the heart, but it thrives with honesty.",
    "Give not just with your hand, but with a clear conscience and open book.",
    "The purest gift is one that leaves no doubt—only hope and truth in its wake.",
    "Every coin given carries a story; let that story be one of trust, truth, and transformation.",
    "When charity is transparent, it becomes more than a donation—it becomes a promise kept.",
    "It’s not how much we give, but how responsibly we deliver that defines our humanity."
]

let index1=0;
setInterval(()=>{
    if((index1+1)%quotes.length!=0){
        index1=(index1+1)%quotes.length;
        const items=document.createElement("li");
        items.innerHTML=quotes[index1]
        list.appendChild(items)
    }
},1500)

function animateValue(id, start, end) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let timer = setInterval(function () {
        current += increment;
        obj.innerText = current.toLocaleString(); 
        if (current == end) {
            clearInterval(timer);
        }
    }, 0.1);
}

animateValue("donors", 0, 2500);     
animateValue("donations", 0, 25000); 