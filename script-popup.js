const dataPopup = [
    {
        "name": "Jennifer",
        "img": "assets/img/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "assets/img/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "assets/img/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "assets/img/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "assets/img/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "assets/img/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "assets/img/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "assets/img/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

const petsBlock = document.querySelector('.carousel');
const popupWindow = document.querySelector('.popup_block');
const popupText = document.querySelector('.popup_text');
const popupImg = document.querySelector('.popup_img');
const petName = document.querySelector('.popup_h3');
const petType = document.querySelector('.popup_h4');
const petDesc = document.querySelector('.popup_h5');
const petListDesc = document.querySelectorAll('.popup_list_item');
const closeBtn = document.querySelector('.popup_close_btn');
const popupBlock = document.querySelector('.popup');


petsBlock.addEventListener('click', (e) => {
    let targetClick = e.target.closest('div.our_friends_card');
    const petNameForId = targetClick.querySelector('.our_friends_name').textContent;
    document.body.classList.add('popup_lock');
    popupWindow.classList.remove('popup_closed');
    console.log(petNameForId);
    const petForPopup = definePetForPopup(petNameForId);
    popupImg.src = petForPopup[0].img;
    petName.textContent = petForPopup[0].name;
    petType.textContent = `${petForPopup[0].type} - ${petForPopup[0].breed}`;
    petDesc.textContent = petForPopup[0].description;
    petListDesc[0].textContent = `Age: ${petForPopup[0].age}`;
    petListDesc[1].textContent = `Inoculations: ${petForPopup[0].inoculations}`;
    petListDesc[2].textContent = `Diseases: ${petForPopup[0].diseases}`;
    petListDesc[3].textContent = `Parasites: ${petForPopup[0].parasites}`;
});

function definePetForPopup(petNameForId) {
    const result = dataPopup.filter(el => el.name == petNameForId);
    return result;
};

closeBtn.addEventListener('click', (e) => {
    document.body.classList.remove('popup_lock');
    popupWindow.classList.add('popup_closed');
});

popupWindow.addEventListener('click', (e) => {
    const noCloseArea = e.target.closest('div.popup');
    if (!noCloseArea) {
        document.body.classList.remove('popup_lock');
        popupWindow.classList.add('popup_closed');
    }
});








