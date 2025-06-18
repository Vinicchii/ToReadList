const closeMessage = document.getElementById("close-message");
const message = document.getElementsByClassName("message")[0];

const closePop = () => {
  message.style.display = "none";
};
setTimeout(() => {
  message.style.display = "none";
}, 3000);

setTimeout(() => {
  gsap.from("#list", {
    x: -300,
  });

  const titles = document.querySelectorAll(".title");
  let index = 0;

  function showTitle(i) {
    const current = titles[i];

    // Reset conteúdo para garantir chars corretos
    current.innerHTML = current.textContent;
    const split = new SplitType(current, { types: "chars" });

    // Posição inicial da palavra e letras
    gsap.set(current, { top: "100%", opacity: 1 });
    gsap.set(split.chars, { y: 30, opacity: 0 });

    const tl = gsap.timeline();

    // Entrada da palavra + letras
    tl.to(current, { top: "0%", duration: 0.6, ease: "power2.out" }, 0)
      .to(
        split.chars,
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.6,
          ease: "elastic.out",
        },
        0
      )
      // Pausa no topo
      .to({}, { duration: 2 })

      // Saída ANIMADA das letras (subindo e sumindo)
      .to(
        split.chars,
        {
          y: -300,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          ease: "power1.in",
        },
        "+=0.2"
      )

      // Depois que as letras saíram, sobe o container (opcional)
      .to(current, { top: "-100%", duration: 0.6, ease: "power2.in" }, "-=0.4")

      // Chama próximo item
      .add(() => {
        index = (index + 1) % titles.length;
        showTitle(index);
      });
  }

  showTitle(index);
}, 50);
