describe("Login Page", () => {
  it("displays error message when login fails", () => {
    cy.server();
    cy.route({
      method: "POST",
      url: "/api/login",
      status: 401,
      response: { message: "password and user don't match" },
    });

    cy.visit("/login");
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("incorrect-password");
    cy.get('input[type="submit"]').click();
    cy.get(".alert-danger").should("contain", "password and user don't match");
  });

  it("displays spinner when making a login request", () => {
    cy.server();
    cy.route({
      method: "POST",
      url: "/api/login",
      status: 200,
      response: {},
    });

    cy.visit("/login");
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("correct-password");
    cy.get('input[type="submit"]').click();
    cy.get(".MuiCircularProgress-root").should("be.visible");
  });

  it("redirects to home page when login succeeds", () => {
    cy.server();
    cy.route({
      method: "POST",
      url: "/api/login",
      status: 200,
      response: {},
    });

    cy.visit("/login");
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("correct-password");
    cy.get('input[type="submit"]').click();
    cy.location("pathname").should("eq", "/");
  });

  it("has working links to register student and company pages", () => {
    cy.visit("/login");
    cy.get('[to="/registerStudent"]').click();
    cy.url().should("include", "/registerStudent");
    cy.go("back");
    cy.get('[to="/registerCompany"]').click();
    cy.url().should("include", "/registerCompany");
  });

  it("should show an error message if the email and password do not match", () => {
    cy.visit("/login");
    cy.get('input[name="email"]').type("incorrect@email.com");
    cy.get('input[name="password"]').type("incorrectPassword{enter}");
    cy.get(".alert-danger").should("contain", "password and user don't match");
  });

  it("should log in the user if the email and password match", () => {
    cy.visit("/login");
    cy.get('input[name="email"]').type("correct@email.com");
    cy.get('input[name="password"]').type("correctPassword{enter}");
    cy.wait(3000); // wait for the response from the API
    cy.url().should("not.include", "/login");
  });
});
