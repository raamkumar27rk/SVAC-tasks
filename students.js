document.addEventListener("DOMContentLoaded", () => {
  // student records container selector
  const recordsContainer = document.getElementById("records-container");

  // Read students data from localStorage
  let students = JSON.parse(localStorage.getItem("students")) || [];

  // function to save student data list to localStorage
  function saveStudentsToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
  }

  // function to render students data list
  const renderStudents = () => {
    recordsContainer.innerHTML = "";
    // iterate over student data list & create a table row for each data & appent it to student records container
    students.forEach((student, index) => {
      const studentRow = document.createElement("tr");
      studentRow.innerHTML = `
                <td>${student.name}</td>
                <td>${student.id}</td>
                <td>${student.email}</td>
                <td>${student.contact}</td>
                <td>
                    <button type="button" onclick="editStudent(${index})">Edit</button>
                    <button type="button" onclick="deleteStudent(${index})">Delete</button>
                </td>
            `;
      recordsContainer.appendChild(studentRow);
    });
  };

  // function to edit student data
  window.editStudent = (index) => {
    const student = students[index];
    localStorage.setItem("editStudent", JSON.stringify({ ...student, index }));
    window.location.href = "index.html";
  };

  // function to delete student data
  window.deleteStudent = (index) => {
    students.splice(index, 1);
    saveStudentsToLocalStorage();
    renderStudents();
  };

  // Render students data in UI
  renderStudents();
});
