const userTable = document.getElementById("userTable");
const userInput = document.getElementById("userId");
const submitBtn = document.getElementById("submit-btn");
const apiFetch = {
  // Sé que no cumple SOLID)))
  async fetchData(uri) {
    try {
      const response = await fetch(uri);
      const data = await response.json();
      this.parsedJson = data;
    } catch (error) {
      console.log("Cannot fetch data:", error);
    }
  },
  findUserById(id) {
    if (userInput.value !== "") {
      user = this.parsedJson.find((item) => item.id === id);
      userTable.innerHTML = `<tr>
            <td>ID: ${user.id}</td>
            <td>Name: ${user.name}</td>
            <td>City: ${user.address.city}</td>
            </tr>`;
    } else {
      this.printData();
    }
  },
  printData() {
    if (Array.isArray(this.parsedJson)) {
      this.parsedJson.forEach((element) => {
        userTable.innerHTML += `<tr>
        <td>ID: ${element.id}</td>
        <td>Name: ${element.name}</td>
        <td>City: ${element.address.city}</td>
        </tr>`;
      });
    } else {
      userTable.innerHTML = `<tr>
        <td>ID: ${this.parsedJson.id}</td>
        <td>Name: ${this.parsedJson.name}</td>
        <td>City: ${this.parsedJson.address.city}</td>
        </tr>
        `;
    }
  },
  //   printUser(2) {
  //     const user = this.parsedJson[2];
  //     console.log(user);
  //   },
};
const uri = "https://jsonplaceholder.typicode.com/users";
const main = async () => {
  await apiFetch.fetchData("https://jsonplaceholder.typicode.com/users");
  apiFetch.printData();
};
main(uri);
submitBtn.addEventListener("click", () => {
  apiFetch.findUserById(Number(userInput.value));
  //   apiFetch.printData();
});
