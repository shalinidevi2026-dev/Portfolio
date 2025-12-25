// Animate skill bars when About section comes into view
const skills = document.querySelectorAll('.skill-level');

function animateSkills() {
    const section = document.getElementById('about');
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos - 100) {
        skills.forEach(skill => {
            skill.style.width = skill.getAttribute('style').replace('width:0','width:'+skill.style.width);
        });
        window.removeEventListener('scroll', animateSkills);
    }
}

window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        if(skill.style.width === "0px" || !skill.style.width) {
            skill.style.width = skill.getAttribute('style').match(/width:\d+%/)[0].split(':')[1];
        }
    });
    animateSkills();
});
