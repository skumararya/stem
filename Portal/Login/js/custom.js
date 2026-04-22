$(function () {
    new WOW().init();
});

     

// redirect based on login js

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function(event){
      event.preventDefault();

      const form = event.target;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "student" && password === "student") {
        window.location.href = "../Dashboard/student/dashboard.html";
      } else if (username === "teacher" && password === "teacher") {
        window.location.href = "../Dashboard/teacher/dashboard.html";
      }else if (username === "stem" && password === "stem") {
        window.location.href = "../Dashboard/teacher/dashboard-steam.html";
      }
	  else if (username === "dps" && password === "dps") {
        window.location.href = "../Dashboard/teacher/school-dashboard.html";
      }
	  else {
        alert("Invalid credentials");
      }
    });
  });

// Edn redirect based on login js