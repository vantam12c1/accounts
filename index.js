import "./index.css";

const data = {
  Github: [
    {
      email: "vantam12c1",
      password: "&VanTam99",
    },
  ],
  Gitlab: [
    {
      email: "vantam12c1",
      password: "&VanTam071299",
    },
  ],
  Gmail: [
    {
      email: "vantamit99",
      password: "@VanTam071299",
    },
    {
      email: "vantam12c1",
      password: "@VanTam071299",
    },
    {
      email: "tvantam1475369",
      password: "@VanTam071299",
    },
    {
      email: "tvantam147536",
      password: "minhtam1999",
    },
    {
      email: "tvantam123",
      password: "@VanTam071299",
    },
    {
      email: "tamyasuo99",
      password: "minhtam1999",
    },
    {
      email: "tvantam1475367",
      password: "@VanTam99",
    },
  ],
  Facebook: [
    {
      email: "vantam12c1",
      password: "&VanTam071299",
    },
    {
      email: "vantamit99",
      password: "&VanTam071299",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  function contentData() {
    let html = "";
    for (let [key, value] of Object.entries(data)) {
      html += `
       <div class="section-account">
      <h3>${key}:</h3>
      <ul>
      ${value
        .map((item) => {
          return `<li>
            <span class="email">${item.email}:</span>
            <code>${item.password}</code>
          </li>`;
        })
        .join("")}
      </ul>
    </div>
      `;
    }
    return html;
  }
  function renderHtml() {
    content.innerHTML = contentData();
  }

  renderHtml();
  console.log('test deploy')
});
