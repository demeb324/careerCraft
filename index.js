// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM her
    const about = document.getElementById("AB");
    const impact = document.getElementById("IC");
    const petition = document.getElementById("petition")
    const DButton = document.getElementById("theme-button");
    const HBUtton1 = document.getElementById("HB1");
    const HBUtton2 = document.getElementById("HB2");
    const signButton = document.getElementById("sign-now-button");
    const themeImage = document.getElementById("header-img");    

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeImage.src = "img/hurry.png";
        themeImage.alt = "Dark Mode Image";

        about.style.borderColor = "skyblue";

        impact.style.borderColor = "skyblue";

        petition.style.borderColor = "skyblue";

        DButton.style.backgroundColor = "black";
        DButton.style.color = "white";
        DButton.style.borderColor = "white";
        DButton.innerHTML = "Light Mode";

        HB1.style.backgroundColor = "black";
        HB1.style.color = "skyblue";
        HB1.style.borderColor = "skyblue";
       
        HB2.style.backgroundColor = "black";
        HB2.style.color = "skyblue";
        HB2.style.borderColor = "skyblue";

        signButton.style.backgroundColor = "black";
        signButton.style.color = "skyblue";
        signButton.style.borderColor = "skyblue";
    } else {
        themeImage.src = "img/busMan.png";
        themeImage.alt = "Light Mode Image";

        about.style.borderColor = "black";

        impact.style.borderColor = "black";

        petition.style.borderColor = "black";
        DButton.style.backgroundColor = "black";
        DButton.style.color = "skyblue";
        DButton.style.borderColor = "black";
        DButton.innerHTML = "Dark Mode";

        HB1.style.backgroundColor = "beige";
        HB1.style.color = "black";
        HB1.style.borderColor = "black";

        HB2.style.backgroundColor = "beige";
        HB2.style.color = "black";
        HB2.style.borderColor = "black";

        signButton.style.backgroundColor = "beige";
        signButton.style.color = "black";
        signButton.style.borderColor = "black";
    }
}   


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// Query for the button with the id 'sign-now-button'
const signNowButton = document.getElementById("sign-now-button");

// Define the addSignature function
const addSignature = (person) => {
    // Get the input values
    const nameInput = person.name.value;
    const stateInput = person.state.value;

    // Create a new paragraph element for the signature
    const newSignature = document.createElement("p");
    newSignature.textContent = `🖊️ ${nameInput} from ${stateInput} supports this.`;

    // Find the signatures section and append the new signature
    const signaturesSection = document.querySelector(".signatures");
    signaturesSection.appendChild(newSignature);
};

// Add a click event listener to the 'sign-now-button'
//signNowButton.addEventListener("click", addSignature);

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

    let containsErrors = false;
  
    let petitionInputs = document.getElementById("sign-petition").elements;

    let person = {
        name: petitionInputs[0],
        email: petitionInputs[1],
        state: petitionInputs[2]
    };

    if (person.name.value.length < 2) {
        containsErrors = true;
        person.name.classList.add('error');
    }
    else {
        person.name.classList.remove('error');
    }
    if (person.email.value.length < 2) {
        containsErrors = true;
        person.email.classList.add('error');
    }
    else {
        person.email.classList.remove('error');
    }
    if (person.state.value.length < 2) {
        containsErrors = true;
        person.state.classList.add('error');
    }
    else {
        person.state.classList.remove('error');
    }


    if (containsErrors == false) {
        addSignature(person);
        toggleModal(person);
        person.name.value = "";
        person.email.value = "";
        person.state.value = "";
        containsErrors = false;
    }
  }
  
  signNowButton.addEventListener('click', validateForm);



  let animation = {
    revealDistance: 150,
    intialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
  };

  const revealableContainers = document.querySelectorAll(".revealable");

  const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            /* add the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.add("active");
          } else {
            /* remove the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.remove("active");

          }
    }
  }

  window.addEventListener('scroll', reveal)

  const toggleModal = (person) => {
    let modal = document.getElementById("thanks-modal");
    let modalContent = document.getElementById("modal-text-container");
    
    modal.style.display = "flex";

    modalContent.textContent = "Thank you " + person.name.value + " representitive of " + person.state.value + " for supporting our cause!!!";

    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
    }, 4000);
    
    let intervalId = setInterval(scaleImage, 500);

  }

  let scaleFactor = 1;
  const modalImage = document.getElementById("ty-img");

  const scaleImage = () => {
    if (scaleFactor == 1) {
        scaleFactor = 0.8;
    }
    else {
        scaleFactor = 1;
    }
    modalImage.style.transform =  `scale(${scaleFactor})`;
  }