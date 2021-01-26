async function loadUsers() {
  // if u dont want check data using a single code below
  // return await (await fetch("data/users.json")).json()
  const response = await fetch("data/users.json");
  const users = await response.json();

  return users;
}

document.addEventListener("DOMContentLoaded", async () => {
  let users = [];
  try {
    users = await loadUsers();
  } catch (e) {
    console.log("Error!");
    console.log(e);
  }
  console.log(users);
});
