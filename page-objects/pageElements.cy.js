const apapPage = {
  elements: {
    // --- HOME PAGE ELEMENTS ---
    get boldButton() {
      return cy.get("[aria-label='Bold']");
    },
    get alignCenterButton() {
      return cy.get("[aria-label='Align center']");
    },

  },
  methods: {
    validateURL,
    redColorFormat
  },
};

function validateURL(include) {
  cy.url().then((url) => {
    cy.log(url);
  });
  cy.url().should("include", `/${include}`);
}   

function redColorFormat(option) {
  cy.get('.tox-mbtn__select-label').contains("Format").click();
  cy.get('.tox-collection__item-label').contains("Text color").click();
  cy.get('[data-mce-color="#E03E2D"]').should('have.attr', 'title',`${option}`).click();    
}


export default apapPage;