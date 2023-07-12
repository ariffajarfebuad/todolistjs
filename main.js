// Mendapatkan elemen-elemen yang diperlukan dari DOM
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Menambahkan task baru ke daftar
function addTask() {
  var task = taskInput.value;
  
  if (task !== "") {
    // Membuat elemen li baru untuk task
    var li = document.createElement("li");
    li.textContent = task;

    // Menambahkan event listener untuk menandai task sebagai selesai
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

    // Menambahkan elemen li ke dalam ul
    taskList.appendChild(li);

    // Mengosongkan input
    taskInput.value = "";
  }
}
