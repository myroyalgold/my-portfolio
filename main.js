// Animation text in home
// Initialize Typed.js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Data Analyst", "Database Administrator", " "],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  onComplete: function(self) {
    // Clear additional text when all strings are typed out
    const additionalText = document.querySelector('.additional-text');
    additionalText.innerHTML = "";
  },
  onStringTyped: function(index, self) {
    const additionalText = document.querySelector('.additional-text');
    additionalText.innerHTML = ""; // Clear previous content

    // Create a paragraph element
    const paragraph = document.createElement('p');

    // Depending on the index, set the text content
    if (self.strings[index] === "Frontend Developer") {
      paragraph.textContent = "I am a Frontend Developer specializing in creating interactive and user-friendly interfaces.";
    } else if (self.strings[index] === "Data Analyst") {
      paragraph.textContent = "As a Data Analyst, I analyze data to uncover insights that drive business decisions.";
    }
   else if (self.strings[index] === "Database Administrator") {
    paragraph.textContent = "As a Database administrator,I manages and maintains an organization’s databases .";
    }
    else {
    }

    // Append the paragraph to the additionalText container
    additionalText.appendChild(paragraph);
  }
});
  


// menu icon
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


