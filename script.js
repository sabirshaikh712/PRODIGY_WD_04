document.addEventListener("DOMContentLoaded", () => {

    window.scrollToSection = function (id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.clientHeight;

            if (pageYOffset >= top && pageYOffset < top + height) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    const skills = ["HTML", "CSS", "JavaScript", "Python"];
    let skillIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const skillSpan = document.getElementById("skills");

    function typeEffect() {
        const currentSkill = skills[skillIndex];

        if (!deleting) {
            skillSpan.textContent = currentSkill.slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentSkill.length) {
                setTimeout(() => deleting = true, 1000);
            }
        } else {
            skillSpan.textContent = currentSkill.slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                skillIndex = (skillIndex + 1) % skills.length;
            }
        }
        setTimeout(typeEffect, deleting ? 80 : 120);
    }

    typeEffect();
});
