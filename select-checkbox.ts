var manuExpanded = false;

showMultipleChoiceOptions(): void {
  var options = document.getElementById("options");
  if (!manuExpanded) {
    options.style.display = "block";
    manuExpanded = true;
  } else {
    options.style.display = "none";
    manuExpanded = false;
  }
}

clearCheckboxes() {
	var checkboxesList = Array.from(document.getElementsByTagName("input"));
	for (let item of checkboxesList) {
	  item.checked = false;
}