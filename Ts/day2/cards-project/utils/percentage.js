function changePercentage(newPercentage) {
    const percentageDiv = document.querySelector(".progress-percentage");
    if (percentageDiv) {
        percentageDiv.style.width = `${newPercentage}%`;
        if (percentageDiv.lastElementChild) {
            percentageDiv.lastElementChild.innerText = `${newPercentage}%`;
        }
    }
}
export default changePercentage;
