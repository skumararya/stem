// Active Page and SubMenu Open click JS Start //
function setActiveSidebar() {
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();
  document.querySelectorAll(".main-menu a[href]").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    // normalize href
    const linkPage = href.split("/").pop().toLowerCase();
    if (linkPage === currentPage) {
      link.classList.add("active");
      let li = link.closest("li");
      while (li) {
        li.classList.add("active-parent", "showMenu");
        li = li.parentElement.closest("li");
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", setActiveSidebar);
// Active Page and SubMenu Open click JS End //
// Tabs Active click JS Start //
$(document).ready(function () {
  const steps = $(".step");
  const progressSteps = $(".progress_holder");
  // Initial setup
  steps.hide().removeClass("current");
  $("#step1").show().addClass("current");
  progressSteps.removeClass("activated_step completed_step");
  progressSteps.eq(0).addClass("activated_step");
  function updateProgress(stepIndex) {
    progressSteps.removeClass("activated_step completed_step");
    progressSteps.each(function (index) {
      if (index < stepIndex) {
        $(this).addClass("completed_step");
      }
      else if (index === stepIndex) {
        $(this).addClass("activated_step");
      }
    });
  }
  // NEXT BUTTON
  $(".nextStep").click(function () {
    let current_fs = $(this).closest(".step");
    let next_fs = current_fs.next(".step");
    if (!next_fs.length) return;
    current_fs.hide().removeClass("current");
    next_fs.fadeIn(150).addClass("current");
    let stepIndex = steps.index(next_fs);
    updateProgress(stepIndex);
  });
  // PREVIOUS BUTTON
  $(".prevStep").click(function () {
    let current_fs = $(this).closest(".step");
    let prev_fs = current_fs.prev(".step");
    if (!prev_fs.length) return;
    current_fs.hide().removeClass("current");
    prev_fs.fadeIn(150).addClass("current");
    let stepIndex = steps.index(prev_fs);
    updateProgress(stepIndex);
  });
});
// Tabs Active click JS End //
// data table jss 
$(function () {
  // Destroy existing instance if any
  if ($.fn.DataTable.isDataTable('#example')) {
    $('#example').DataTable().destroy();
  }
  // Initialize DataTable
  var table = $('#example').DataTable({
    paging: true,
    fixedHeader: false,
    dom: 
      // Row 1 → table
      '<"row"<"col-12 table-responsive"t>>' +
      // Row 2 → info + pagination
      '<"row mt-2 paging"<"col-sm-6 col-12"i><"col-sm-6 col-12"p>>'
  }); 
  // Force redraw with column adjustment on resize and zoom-like events
  var resizeTimeout;
  function refreshTable() {
    table.columns.adjust();
    table.draw(false); // redraw without resetting pagination
  }
  $(window).on('resize orientationchange', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      refreshTable();
    }, 300);
  });
  // Also monitor zoom-like keyboard shortcuts (Ctrl +/-)
  $(window).on('keydown', function (e) {
    // Ctrl + or Ctrl -
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        refreshTable();
      }, 300);
    }
  });
  // Optional: Adjust on visibility change (tab switch)
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
      refreshTable();
    }
  });
});
// Edn data table js 

// Password eye toggle
$(".toggle-password").click(function () {
  var input = $($(this).attr("toggle"));
  if (input.attr("type") === "password") {
    input.attr("type", "text");
    $(this).text("lock_open");   // show unlock icon
  } else {
    input.attr("type", "password");
    $(this).text("lock");        // show lock icon
  }
});

// Toggle submenus on anchor click
document.addEventListener("click", function (e) {
  const toggle = e.target.closest(".menu-toggle");
  if (!toggle) return;
  e.preventDefault();
  const parentLi = toggle.closest("li");
  const parentUl = parentLi.parentElement;
  // Close other open menus at same level
  parentUl.querySelectorAll(":scope > li.showMenu").forEach(li => {
    if (li !== parentLi) {
      li.classList.remove("showMenu");
    }
  });
  // Toggle current menu
  parentLi.classList.toggle("showMenu");
});

// Sidebar toggle
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");

// Function to close all submenus
function closeAllSubmenus() {
  document.querySelectorAll("li.showMenu").forEach(li => {
    li.classList.remove("showMenu");
  });
}

// Close sidebar by default on mobile
function checkMobileSidebar() {
  if (window.innerWidth <= 768) {
    sidebar.classList.add("close");
    closeAllSubmenus(); // ✅ Always close submenus on load if mobile
  } else {
    sidebar.classList.remove("close");
    closeAllSubmenus(); // ✅ Also close submenus on desktop load
  }
}

// Run on load
window.addEventListener("load", checkMobileSidebar);

// Optional: Also handle resize
window.addEventListener("resize", checkMobileSidebar);

// Toggle sidebar on menu button click
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  closeAllSubmenus(); // ✅ Close submenus on both open and close
});

// Edn map tooltip data show on click js 
