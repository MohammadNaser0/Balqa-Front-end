/*changePassowrd(){
}
doTransfer(){
}
dropSemester(){

}
dropClass(){

}
dropOut(){

}
markObjection(){

}*/
window.dataCache = null;
export async function getData(){
    if (window.dataCache) return window.dataCache;

  try {
    const response = await fetch("Test.json");
    const data = await response.json();
    window.dataCache = data; 
    return data;
  } catch (err) {
    console.error("Error loading JSON:", err);
    return null;
  }
}
                document.addEventListener('DOMContentLoaded', getData);
export async function CalculateTotal() {
         const finance = dataCache.finance;
            const credit = parseFloat(document.getElementById('numOfCredits').value) || 0;
            let total = finance.debt + (finance.creditPrice * credit) + finance.regPrice;
            document.getElementById('total').textContent ="المبلغ المطلوب: "+ total; // Use the correct ID for an element.
        }
        window.CalculateTotal = CalculateTotal;
export async function loadData(){
        const data = await getData(); // fetch or get cached JSON
  try {
    for (let sectionKey in data) {
      const sectionData = data[sectionKey];

      // Loop through each property in that section
      for (let key in sectionData) {
        const element = document.getElementById(key);
        if (!element) continue;

        if (element.tagName === "IMG") {
          element.src = sectionData[key];
        } else {
          element.textContent += sectionData[key];
        }
      }
    }
  } catch (err) {
    console.error('Error loading JSON:', err);
  }
                }

                document.addEventListener('DOMContentLoaded', loadData);
