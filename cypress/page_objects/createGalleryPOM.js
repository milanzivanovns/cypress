
class CreateGallery {
   
  get addImageBtn() {
      return cy.get("button").eq(-3);
    }
  
    get imageUrlInput() {
      cy.get(".input-group");
    }
  
    get createGalleryUpBtn() {
      return this.imageUrlInput.find("button").first();
    }
  
    get createGalleryDownBtn() {
      return this.imageUrlInput.find("button").last();
    }
  }
  
  export const createGallery = new CreateGallery();