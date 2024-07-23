export function renderSelect(dataArray, elementLink) {
    //console.log(dataArray, elementLink);
    const sortedDataArray = dataArray.sort();
    sortedDataArray.forEach(data => {
        const optionEement = `<option value="${data}">${data}</option>`;
        elementLink.insertAdjacentHTML('beforeend', optionEement);
    });
}