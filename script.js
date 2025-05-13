// Change text an style
document.getElementById("order-btn").addEventListener("click", () => {
    const text = document.getElementById("dynamic-text");
    text.textContent = "You have successfully ordered a bus!";
    text.style.color = "green";
    text.style.fontSize = "20px";
    text.styke.fontWeight = "bold";
});

// add a new schedule to the list
document.getElementById("delete-schedule-btn").addEventListener("click", () => {
    const input = document.getElementById("new-schedule");
    const schedule = input.ariaValueMax.trim();
    if (schedule !== "") {
        const list = document.getElementByU=Id("schedule-list") || createScheduleList()
        const  li = document.createElement("li");
        li.textContent = schedule;
        
        // Add delete button next to the schedule
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑";
    delBtn.style.marginLeft = "10px";
    delBtn.addEventListener("click", () => li.remove());
    
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = ""; // Clear the input field
    } else{
        alert("Please enter a schedule.");    
    }
});

// Delete all schedules
document.getElementById("delete-schedule-btn").addEventListener("click", () => {
  const list = document.getElementById("schedule-list");
  if (list) {
    list.remove(); // deletes the whole list
  }
});

// Utility: Create schedule list if it doesn't exist
function createScheduleList() {
  const newList = document.createElement("ul");
  newList.id = "schedule-list";
  const article = document.querySelector("article");
  article.insertBefore(newList, document.getElementById("new-schedule"));
  return newList;
}