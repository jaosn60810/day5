(function createDropDownMenu() {
  let select = document.getElementById('peopleNumber');
  for (let i = 1; i <= 10; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
  }
})();
