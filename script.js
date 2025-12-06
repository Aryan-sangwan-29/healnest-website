const body = document.body;
let darkBtn = document.createElement("button");
darkBtn.innerText = "Dark Mode";
darkBtn.className = "btn";
darkBtn.style.position = "fixed";
darkBtn.style.right = "20px";
darkBtn.style.bottom = "20px";
darkBtn.style.zIndex = "999";
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        darkBtn.innerText = " Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        darkBtn.innerText = " Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    darkBtn.innerText = " Light Mode";
}



document.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✔️ Form submitted successfully!");
});
const registerForm = document.querySelector(".register-section form");

if (registerForm) {
    registerForm.addEventListener("submit", () => {
        const inputs = registerForm.querySelectorAll("input, select");
        let user = {};

        inputs.forEach((input) => {
            if (input.type !== "checkbox") {
                user[input.placeholder] = input.value;
            }
        });

        localStorage.setItem("HealNestUser", JSON.stringify(user));
        alert(" Registration Successful!");
    });

    
}

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
    if (link.href.includes(window.location.pathname)) {
        link.classList.add("active");
    }
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


const tipsContainer = document.querySelector(".tipscontainer");

if (tipsContainer) {
    const extraTips = [
        { title: "Avoid Screens Before Sleep", para: "Reduce blue light to improve sleep quality." },
        { title: "Walk After Meals", para: "Improves digestion and reduces sugar spikes." }
    ];

    extraTips.forEach(tip => {
        let div = document.createElement("div");
        div.className = "tip";
        div.innerHTML = `<h3>${tip.title}</h3><p>${tip.para}</p>`;
        tipsContainer.appendChild(div);
    });
}

document.querySelectorAll("input[type='email']").forEach(emailInput => {
    
    let error = document.createElement("p");
    error.innerText = "❗ Please include '@' in your email";
    error.style.color = "red";
    error.style.fontSize = "14px";
    error.style.marginTop = "-10px";
    error.style.marginBottom = "10px";
    error.style.display = "none";
    error.style.fontWeight = "600";

    emailInput.parentNode.insertBefore(error, emailInput.nextSibling);

    emailInput.addEventListener("input", () => {
        if (!emailInput.value.includes("@")) {
            error.style.display = "block";
        } else {
            error.style.display = "none";
        }
    });
});
if (window.location.pathname.includes("tips")) {
    const tips = [
        "Drink warm water in the morning.",
        "Walk 8,000 steps daily.",
        "Avoid using phone first 20 mins after waking up.",
        "Eat slowly for better digestion.",
        "Keep your room ventilated.",
        "Laugh for at least 2 minutes daily!"
    ];

    let randomTip = document.createElement("div");
    randomTip.className = "tip";
    randomTip.style.background = "#dfffe7";
    randomTip.style.marginBottom = "20px";
    randomTip.innerHTML = `<h3>✨ Today's Tip</h3><p>${tips[Math.floor(Math.random()*tips.length)]}</p>`;

    document.querySelector(".content").prepend(randomTip);
}