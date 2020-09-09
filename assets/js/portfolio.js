var portfolio = $("#portfolio");

function createCard(data) {
    let cardContainer = $("<section>").addClass("col py-1");
    let card = $("<div>").addClass("card h-100");
    let cardImg = $("<img>").addClass("card-img-top").attr("alt", data.name);

    if (data.image.type === "local") {
        cardImg.attr("src", `./assets/images/${data.image.src}`);
    } else {
        cardImg.attr("src", data.image.src);
    }

    let cardBody = $("<div>").addClass("card-body");
    let cardTitle = $("<h5>").text(data.name).addClass("card-title");
    let cardText = $("<p>").text(data.description);

    cardBody.append(cardTitle, cardText);

    let cardFooter = $("<div>").addClass("card-footer");
    data.links.forEach(e => {
        let link = $("<a>").addClass("btn, btn-dark");
        link.text(e.name);
        link.attr("src", e.src);
        cardFooter.append(link);
    });

    card.append(cardImg, cardBody, cardFooter);
    cardContainer.append(card);
    portfolio.append(cardContainer);
}

