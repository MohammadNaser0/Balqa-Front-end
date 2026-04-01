export async function changePassowrd(){
  alert("قريباً");
}
export async function doTransfer(){
  alert("تم نقلك")
}
export async function dropSemester(){
  prompt("أكتب رقمك الوطني لإسقاط الفصل:");
}

export async function dropClass(){
  prompt("أكتب رقم المادة لإسقاطها:");

}
export async function dropOut(){
  prompt("أكتب رقمك الوطني لإسقاط الفصل:");
}
export async function markObjection(){
 prompt("أكتب رقم المادة للإعتراض عليها: ");
}
export async function delaySemester(){
  prompt("تم تأجيل فصلك.")
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
        } 
        else if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.value = sectionData[key]; 
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
    const modal = document.getElementById('userInfo');
    modal.showModal();
  }
  
    export async function  showCardSubmition(){
    const cardModal = document.getElementById('userCard');
    cardModal.showModal();
  }

  export async function toggleEmailPwd() {
    const pwdInput = document.getElementById('studentEmailPwd');
    pwdInput.type = pwdInput.type === 'password' ? 'text' : 'password';
  }
    export async function toggleMoodlePwd() {
    const pwdInput = document.getElementById('moodlePwd');
    pwdInput.type = pwdInput.type === 'password' ? 'text' : 'password';
  }
document.addEventListener('DOMContentLoaded', loadData);