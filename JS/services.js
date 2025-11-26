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
  }
}
export async function CalculateTotal() {
         const finance = data.finance;
            const credit = parseFloat(document.getElementById('numOfCredits').value) || 0;
            let total = finance.debt + (finance.creditPrice * credit) + finance.regPrice;
            document.getElementById('total').textContent ="المبلغ المطلوب: "+ total;
        }
export async function loadData(){
        const data = await getData(); 
  try {
    for (let sectionKey in data) {
      const sectionData = data[sectionKey];

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

  export async function  showUserInfo(){
       const data = await getData(); 
       try{
         let slide  = document.getElementById("slide") ,slideContent = document.getElementById("slide-content") ,userInfo =data.accessInfo;
           slide.classList.add("open");

           if (!userInfo){
              slideContent.innerHTML = `<p>Section "${userInfo}" not found.</p>`;
              return;
           }
           let html = `<h2>userInfo</h2>`;
            for (const key in userInfo) {
              html += `
                <p><strong>${key}:</strong> ${userInfo[key]}</p>
              `;
            }
          slideContent.innerHTML = html;
       }
       catch (err){
        console.error('Error loading JSON:', err);
       }
  }
document.addEventListener('DOMContentLoaded', loadData);
