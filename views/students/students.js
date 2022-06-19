document.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = e.target.id.value;
  fetch(id)
    .then((res) => res.json())
    .then((res) => {
      if (res.status !== 404) {
        document.querySelector("#Massege").innerText = "";
        document.querySelector("#name").innerText = "name: " + res.name;
        document.querySelector("#age").innerText = "age: " + res.age;
        document.querySelector("#grades").innerText = "grades: " + res.grades;
      } else {
        document.querySelector("#Massege").innerText = res.msg;
      }
    });
});
const select = document.querySelector("#type");
select.addEventListener("change", (e) => {
  const type = e.target.value;
  switch (type) {
  }
});
