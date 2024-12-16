const body = document.body
const setRandom = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const red2 = Math.floor(Math.random() * 255);
    const green2 = Math.floor(Math.random() * 255);
    const blue2 = Math.floor(Math.random() * 255);

    body.style.background = `linear-gradient(to right, rgb(${red}, ${green}, ${blue}), rgb(${red2}, ${green2}, ${blue2}))`;
};