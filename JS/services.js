export async function changePassowrd(){
  alert("قريباً");
}
export async function doTransfer(){
  alert("تم نقلك")
}
export async function dropSemester(){
  prompt("أكتب رقمك الوطني لإسقاط الفصل");
}

export async function dropClass(){
  prompt("أكتب رقم المادة لإسقاطها ");

}
export async function dropOut(){
  prompt("أكتب رقمك الوطني لإسقاط الفصل");
}
export async function markObjection(){
 prompt("أكتب رقم المادة للإعتراض عليها ");
}
window.data = null;
export async function getData(){
    if (window.dataCache) return window.data;

  try {
    const response = await fetch("Test.json");
    const data = await response.json();
    window.data = data; 
    return data;
  } catch (err) {
    console.error("Error loading JSON:", err);
    return null;
  }
}
export async function CalculateTotal() {
         const finance = data.finance;
            const credit = parseFloat(document.getElementById('numOfCredits').value) || 0;
            let total = finance.debt + (finance.creditPrice * credit) + finance.regPrice;
            document.getElementById('total').textContent ="المبلغ المطلوب: "+ total; // Use the correct ID for an element.
        }
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

  export function showUserInfo(){

  }
document.addEventListener('DOMContentLoaded', loadData);
