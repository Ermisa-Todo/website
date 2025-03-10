document.addEventListener("mousemove", function (event) {
  const cursor = document.querySelector(".cursor");
  cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

const images = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

images.forEach((img) => observer.observe(img));

document.getElementById("contactForm")
document.addEventListener("submit", async function (event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      let successMessage = document.getElementById("successMessage");
      successMessage.classList.add("show");
      form.reset();

      setTimeout(() => {
        successMessage.classList.remove("show");
      }, 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  });
