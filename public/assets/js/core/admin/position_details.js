import { ethers } from "../ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "../ethers/constants.js";

const positions = document.querySelector("#positions");

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);

getPositions();

async function getPositions() {
    var allPositions = await contract.getAllPositions();
    allPositions.forEach(async (position) => {
        var positionInfo = await contract.getPosition(position);
        let card = document.createElement("div");
        card.classList.add("card", "m-2");
        card.style.width = "22rem";
        let card_body = document.createElement("div");
        card_body.classList.add("card-body");

        let card_title = document.createElement("h5");
        card_title.innerHTML = position;

        let details = document.createElement("div");
        details.classList.add("d-flex", "m-0");
        let detailLabel = document.createElement("p");
        detailLabel.classList.add("pe-1", "m-1");
        detailLabel.innerHTML = "Details:";
        let detail = document.createElement("p");
        detail.classList.add("m-1", "text-dark");
        detail.innerHTML = positionInfo["details"];
        details.appendChild(detailLabel);
        details.appendChild(detail);

        let persons = document.createElement("div");
        persons.classList.add("d-flex", "m-0");
        let personLabel = document.createElement("p");
        personLabel.classList.add("pe-1", "m-1");
        personLabel.innerHTML = "person:";
        let person = document.createElement("p");
        person.classList.add("m-1", "text-dark");
        var per_addr = positionInfo["person"]
        if (per_addr == 0) {
            per_addr = "Not Elected";
        }
        person.innerHTML = per_addr;
        persons.appendChild(personLabel);
        persons.appendChild(person);

        card_body.appendChild(card_title);
        card_body.appendChild(details);
        card_body.appendChild(persons);
        card.appendChild(card_body);

        positions.appendChild(card);
    });
}
