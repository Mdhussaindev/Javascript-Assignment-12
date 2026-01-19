// ------------------------------Chapter- 49 to 52------------------------------------

// Q1

function showData() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      document.getElementById("output").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Password: " + password;
    }

    // Q2

     function readMore() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("moreText");
      var btn = document.getElementById("btn");

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
      } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.innerHTML = "Read Less";
      }
    }

    // Q3

    var selectedRow = null;

    function addStudent() {
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var className = document.getElementById("className").value;

      var table = document.getElementById("studentTable");
      var row = table.insertRow();

      row.insertCell(0).innerHTML = name;
      row.insertCell(1).innerHTML = age;
      row.insertCell(2).innerHTML = className;
      row.insertCell(3).innerHTML =
        '<button onclick="editRow(this)">Edit</button> ' +
        '<button onclick="deleteRow(this)">Delete</button>';

      document.querySelector("form").reset();
    }

    function deleteRow(btn) {
      var row = btn.parentNode.parentNode;
      row.remove();
    }

    function editRow(btn) {
      selectedRow = btn.parentNode.parentNode;

      document.getElementById("editName").value = selectedRow.cells[0].innerHTML;
      document.getElementById("editAge").value = selectedRow.cells[1].innerHTML;
      document.getElementById("editClass").value = selectedRow.cells[2].innerHTML;

      document.getElementById("editForm").style.display = "block";
    }

    function updateStudent() {
      selectedRow.cells[0].innerHTML = document.getElementById("editName").value;
      selectedRow.cells[1].innerHTML = document.getElementById("editAge").value;
      selectedRow.cells[2].innerHTML = document.getElementById("editClass").value;

      document.getElementById("editForm").style.display = "none";
    }