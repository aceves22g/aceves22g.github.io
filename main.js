let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #000000;'>|</span>",
});
 
typewriter
  .pauseFor(1700)
  .typeString('<span style="color: #A025F0;">Amante del anime y el aprendizaje de nuevas ideas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
