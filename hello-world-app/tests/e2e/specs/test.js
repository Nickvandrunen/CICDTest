// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
  });
});

describe("About page", () => {
  it("Visits the app about url", () => {
    cy.visit("/about");
    cy.contains("h1", "This is an about page");
  });
});
