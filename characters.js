export const renderCharacter({name, thumbnail, description, comics, series}) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const ulComics = document.createElement("ul");
    const ulSeries = document.createElement("ul");
    const title = document.createElement("h3");

    img.src = thumbnail;
    p.textContent = description;
    title.textContent = name;

    figure.appendChild(img);
    figure.appendChild(title);
    figure.appendChild(p);

}

//fuck this bullshit bro