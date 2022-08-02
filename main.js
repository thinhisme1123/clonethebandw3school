const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.modal-container')

function showBuyTickets() {
    modal.classList.add('open')
}

function hideTickets() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideTickets)
modal.addEventListener('click',hideTickets)
// ngừng việc nổi bọt của việc click vào modal, khi gặp sự kiện click vào modal-container thì sẽ ngừng và không bị close
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})
// menu close and open
const header = document.getElementById('header')
const mobileMenu = document.getElementById('mobile-menu')
// dùng biến để lưu trữ tốt hơn là đi set giá trị cứng
var clientHeight = header.clientHeight

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === clientHeight
    if(isClosed) 
    {
        header.style.height = 'auto'
    }
    else 
    {
        header.style.height = null
    }
}

// handle closing the menu list when click to any element in menu
var closeMenus = document.querySelectorAll('#nav li a[href*="#"]')
for(var i = 0;i < closeMenus.length;i++)
{
    var closeMenu = closeMenus[i]
    closeMenu.onclick = function(event) {
        var isParent = this.nextElementSibling && this[i].classList.contains('subnav')
        if(isParent)
        {
            event.preventDefauflt()
        }
        else 
        {
            header.style.height = null
        }
    }
}

// handle input search : close and open when click to search btn
const searchBtn = document.getElementById('searchAppear')
const inputSearch = document.querySelector('.input-search')

searchBtn.onclick = function() {
    // Nhầm lẫn giữa phép gán và phép so sánh
    if(inputSearch.style.display === 'none') 
    {
        inputSearch.style.display = 'block'
    }
    else 
    {
        inputSearch.style.display = 'none'
    }
}
// Ảnh tự động thay đổi
const slider = document.getElementById('slider')
var objectImg = [
    {
        heading: "New York",
        description: "The atmosphere in New York is lorem ipsum.",
        imgSrc: "./assets/image/slider/newyork.jpg"
    },
    {
        heading: "Chicago",
        description: "Thank you, Chicago - A night we won't forget.",
        imgSrc: "./assets/image/slider/chicago.jpg"
    },
    {
        heading: "Log Angeles",
        description: "We had the best time playing at Venice Beach!",
        imgSrc: "./assets/image/slider/losagerless.jpg"
    }
]
var j = 0
setInterval(() => {
    slider.innerHTML = `
    <img src="${objectImg[j].imgSrc}" alt="">
        <div class="text-content">
            <h3 class="text-heading">${objectImg[j].heading}</h3>
            <div class="text-despription">${objectImg[j].description}</div>
        </div>
    `
    j++
    if(j === 3)
    {
        j = 0
    }
}, 2000);