import apapElements from "../../../page-objects/PageElements.cy";
import data from "../../fixtures/data.json"

describe('User navigate and interact with herokuapp', () => {
  before(() => {
    cy.visit(data.url).wait(3000);
  })

  it('User should be able to delete, type, align and change color text', () => {   
      cy.getIframe('#mce_0_ifr').clear().type(`${data.textEditable} {ctrl+a}`);
      apapElements.methods.validateURL('tinymce')
      apapElements.elements.boldButton.click();
      apapElements.elements.alignCenterButton.click();
      apapElements.methods.redColorFormat('Red'); 
      cy.log(data.textEditable);
  })

  it('User should be able to print texts from iframes', () => { 
    cy.visit(data.url2);  
    cy.getFrame('frame-left');
    
})

  


})