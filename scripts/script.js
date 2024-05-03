// this will make the nave bar to have a black background when the use sctoll the page
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav-bar");
    if (window.pageYOffset > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
// const service = document.querySelector(".desktop-service");
// const serviceSub = document.querySelector("#desktop-service-sub");
// // this will make the service sub menu to show when user hovers on it
// service.addEventListener("mouseover", () => {
//     serviceSub.style.opacity = "100%";
//     serviceSub.style.display = "block";
// });
// // this will make the service sub menu to disapear when user remove the mouse on it

// service.addEventListener("mouseout", () => {
//     serviceSub.style.opacity = "0%";
//     serviceSub.style.display = "none";
// });

// const blog = document.querySelector(".desktop-blog");
// const blogSub = document.querySelector("#desktop-blog-sub");
// // this will make the blog sub menu to show when user hovers on it
// blog.addEventListener("mouseover", () => {
//     blogSub.style.opacity = "100%";
//     blogSub.style.display = "block";
// });
// // this will make the blog sub menu to disapear when user remove the mouse on it
// blog.addEventListener("mouseout", () => {
//     blogSub.style.opacity = "0%";
//     blogSub.style.display = "none";
// });

const filters = document.querySelectorAll(".filter");
const about = document.querySelector(".about");
const experience = document.querySelector(".experience");
const education = document.querySelector(".education");
const skill = document.querySelector(".skill");
// loop through the filters and get them one by one
filters.forEach((filter) => {
    filter.addEventListener("click", (e) => {
        if (e.target.innerHTML === "ABOUT") {
            about.style.display = "block";
            experience.style.display = "none";
            education.style.display = "none";
            skill.style.display = "none";
            aboutBtn.style.backgroundColor = "rgb(201, 243, 29)";
            aboutBtn.style.color = "rgb(29, 29, 29)";
        } else if (e.target.innerHTML === "EXPERIENCE") {
            experience.style.display = "block";
            education.style.display = "none";
            skill.style.display = "none";
            about.style.display = "none";
            aboutBtn.style.backgroundColor = "rgb(29, 29, 29)";
            aboutBtn.style.color = "rgb(255, 255, 255)";
        } else if (e.target.innerHTML === "EDUCATION") {
            education.style.display = "block";
            experience.style.display = "none";
            skill.style.display = "none";
            about.style.display = "none";
            aboutBtn.style.backgroundColor = "rgb(29, 29, 29)";
            aboutBtn.style.color = "rgb(255, 255, 255)";
        } else if (e.target.innerHTML === "SKILLS") {
            skill.style.display = "block";
            education.style.display = "none";
            experience.style.display = "none";
            about.style.display = "none";
            aboutBtn.style.backgroundColor = "rgb(29, 29, 29)";
            aboutBtn.style.color = "rgb(255, 255, 255)";
        } else {
            return;
        }
        console.log(filter.innerHTML);
    });
});

const aboutBtn = document.querySelector(".aboutbtn");
// this will execute all the task that should br done once the page loads
window.addEventListener("load", () => {
    // thia make the about filter background color to be focus by defult
    filters.forEach((filter) => {
        if (filter.innerHTML === "ABOUT") {
            filter.style.backgroundColor = "rgb(201, 243, 29)";
            filter.style.color = 'rgb(29, 29, 29)'
        }
    });
    // this makes the about to show by defult when the page is refreshed
    about.style.display = "block";
});

const showContactBr = document.getElementById('show-contact')
const closeContactBar = document.getElementById('close-contact')
const contactSideBar = document.querySelector('.contact-side-bar')

showContactBr.addEventListener('click', () => {
    contactSideBar.style.right = '0'
    // closeContactBar.style.display = 'block'
})

closeContactBar.addEventListener('click', () => {
    contactSideBar.style.right = '-100%'
    // closeContactBar.style.display = 'none'
})

const menu = document.querySelector('.mobile-nav-list')
const openmenuBtn = document.querySelector('#mobile-show-menu')
const closeMenuBtn = document.querySelector('#mobile-close-menu')
const mediaQuery = window.matchMedia('(min-width: 1024px)');

// function mediaScreen(){
//     mediaQuery.addEventListener('change', (e) => {
//         // Get the navigation bar element
//         const nav = document.querySelector('nav');

//         // Check if the page has been scrolled
//         if (e.matches) {
//             // Add the "scrolled" class to the navigation bar
//             closeMenuBtn.style.display = 'none'
//             openmenuBtn.style.display = 'none'
//         } else {
//             // Remove the "scrolled" class from the navigation bar
//             closeMenuBtn.style.display = 'block'
//             openmenuBtn.style.display = 'block'
//         }
//     });
// }
function openMenu(){
    menu.classList.toggle('show')
}
openmenuBtn.addEventListener('click',openMenu)
// function closemenu(){
//     menu.classList.toggle('show')
//     closeMenuBtn.style.display = 'none'
//     openmenuBtn.style.display = 'block'
//     mediaScreen()
// }
// closeMenuBtn.addEventListener('click',closemenu)

// const showModal = ()=>{
//     const modal = document.createElement( 'div' );
//     modal.classList.add("modal");
//     document.body.appendChild(modal);
//     const modalContainer = document.createElement( 'div' );
//     modalContainer.classList.add("modal-container");
//     modal.appendChild(modalContainer);
//     const prevBtn = document.createElement('i')
//     prevBtn.classList.add('fa-solid', 'fa-caret-left','prev-btn')
//     modalContainer.appendChild(prevBtn)
//     const imageContainer = document.createElement('div')
//     imageContainer.classList.add('image-container')
//     const closeModal = document.createElement( 'i' )
//     closeModal.classList.add('fa-solid', 'fa-xmark', 'close-modal')
//     imageContainer.appendChild(closeModal)
//     const modalImage = document.createElement( 'img' )
//     modalImage.classList.add('modal-image')
//     const nextBtn = document.createElement('i')
//     prevBtn.classList.add('fa-solid', 'fa-caret-right', 'next-btn')
//     modalContainer.appendChild(nextBtn)
// }
// // const showImage = () => {
// //     // modalImage.src = images[currentImageIndex]
// //     // modal.style.display = 'block'
// // }
// const productCard = document.querySelectorAll('.product-card')
// const images = []
// productCard.forEach((card,index)=>{
//     const image = card.querySelector('img')
//     images.push(image.src)
//     image.addEventListener('click',()=>{
//         showModal()
//         // currentImageIndex  = index;
//         // showImage()
//     })
// })
// modalImage.src = images[currentImageIndex];
// let modalImage;
// const showModal = () => {
//     const modal = document.createElement('div');
//     modal.classList.add("modal");
//     document.body.appendChild(modal);

//     const modalContainer = document.createElement('div');
//     modalContainer.classList.add("modal-container");
//     modal.appendChild(modalContainer);

//     const prevBtn = document.createElement('i');
//     prevBtn.classList.add('fa-solid', 'fa-caret-left', 'prev-btn');
//     modalContainer.appendChild(prevBtn);

//     const imageContainer = document.createElement('div');
//     imageContainer.classList.add('image-container');
//     modalContainer.appendChild(imageContainer);

//     const closeModal = document.createElement('i');
//     closeModal.classList.add('fa-solid', 'fa-xmark', 'close-modal');
//     imageContainer.appendChild(closeModal);

//     const modalImage = document.createElement('img');
//     modalImage.classList.add('modal-image');
//     imageContainer.appendChild(modalImage);

//     const nextBtn = document.createElement('i');
//     nextBtn.classList.add('fa-solid', 'fa-caret-right', 'next-btn');
//     modalContainer.appendChild(nextBtn);

//     // Add event listeners for close, previous, and next buttons
//     closeModal.addEventListener('click', () => closeModalHandler(modal));
//     prevBtn.addEventListener('click', showPrevImage);
//     nextBtn.addEventListener('click', showNextImage);

//     // Initial index for modal image
//     currentImageIndex = images.indexOf(event.target.src);
//     modalImage.src = images[currentImageIndex];
// }
// // currentImageIndex = images.indexOf(event.target.src);

// const closeModalHandler = (modal) => {
//     modal.remove();
// }

// const showPrevImage = () => {
//     currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//     modalImage.src = images[currentImageIndex];
// }

// const showNextImage = () => {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     console.log('yes')
//     modalImage.src = images[currentImageIndex];
// }

// const productCard = document.querySelectorAll('.product-card');
// const images = [];

// productCard.forEach((card, index) => {
//     const image = card.querySelector('img');
//     images.push(image.src);
//     image.addEventListener('click', showModal);
// });
let modalImage; // Declare modalImage as a global variable
let currentImageIndex; // Declare currentImageIndex as a global variable

const showModal = () => {
    const modal = document.createElement('div');
    modal.classList.add("modal");
    document.body.appendChild(modal);

    const modalContainer = document.createElement('div');
    modalContainer.classList.add("modal-container");
    modal.appendChild(modalContainer);

    const prevBtn = document.createElement('i');
    prevBtn.classList.add('fa-solid', 'fa-caret-left', 'prev-btn');
    modalContainer.appendChild(prevBtn);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    modalContainer.appendChild(imageContainer);

    const closeModal = document.createElement('i');
    closeModal.classList.add('fa-solid', 'fa-xmark', 'close-modal');
    imageContainer.appendChild(closeModal);

    modalImage = document.createElement('img'); // Assign to global variable modalImage
    modalImage.classList.add('modal-image');
    imageContainer.appendChild(modalImage);

    const nextBtn = document.createElement('i');
    nextBtn.classList.add('fa-solid', 'fa-caret-right', 'next-btn');
    modalContainer.appendChild(nextBtn);

    // Add event listeners for close, previous, and next buttons
    closeModal.addEventListener('click', () => closeModalHandler(modal));
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Initial index for modal image
    currentImageIndex = images.indexOf(event.target.src);
    modalImage.src = images[currentImageIndex];
}

const closeModalHandler = (modal) => {
    modal.remove();
}

const showPrevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
}

const showNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex];
}

const productCard = document.querySelectorAll('.product-card');
const images = [];

productCard.forEach((card, index) => {
    const image = card.querySelector('img');
    images.push(image.src);
    image.addEventListener('click', showModal);
});






