const emojiBox = document.getElementById("emoji-box");
const button = document.getElementById("generate-btn");

const emojis = [
  "😀", "😎", "😂", "🥳", "🤩", "😇", "😜", "😍", "🤓", "😴", 
  "🤖", "👻", "👽", "🐶", "🐱", "🐵", "🐸", "🦊", "🐼", "🦁",
  "🌈", "🌸", "🍕", "🍩", "🍪", "⚡", "🔥", "💎", "🎵", "🎨"
];

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];

  // Animate the emoji
  emojiBox.style.opacity = 0;
  emojiBox.style.transform = "scale(0.5)";
  setTimeout(() => {
    emojiBox.textContent = randomEmoji;
    emojiBox.style.opacity = 1;
    emojiBox.style.transform = "scale(1)";
  }, 300);
});
