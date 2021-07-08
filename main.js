var button = document.getElementById('display'),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = count;
};
