document.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    password: e.target.password.value,
    role: e.target.teacher.checked ? "teacher" : "admin",
  };

  fetch("http://localhost:3000/signin", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
});
