function changePercentage(newPercentage : number) : void{
    const percentageDiv = document.querySelector<HTMLSpanElement>(".progress-percentage");
    if (percentageDiv) {
        percentageDiv.style.width = `${newPercentage}%`;
        if (percentageDiv.lastElementChild) {
            (percentageDiv.lastElementChild as HTMLParagraphElement).innerText = `${newPercentage}%`;
        }
    }
}
export default changePercentage;