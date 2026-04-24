const socket = io();
const editor = document.getElementById("editor");

editor.addEventListener("keyup", () => {
    socket.emit("text-change", editor.value);
});

socket.on("text-change", (data) => {
    editor.value = data;
});