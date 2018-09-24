const actions = require('../base/actions');

/**
 * @description Page Object for Sign in Page.
 */
function signinPage() {
  // Web elements for Sign in
  this.signinButton = element(by.css('.login'));
  this.emailTextField = element(by.id('email_create'));
  this.createButton = element(by.id('SubmitCreate'));
  this.validEmail = element(by.id('email'));
  this.nameTextField = element(by.id('customer_firstname'));
  this.lnameTextField = element(by.id('customer_lastname'));
  this.passwd = element(by.id('passwd'));
  this.submitButton = element(by.id('submitAccount'));
  this.gender = element(by.id('uniform-id_gender1'));
  this.datos = element.all(by.css('.required form-group'));

  //this.passwordTextField = element(by.id('password'));
  //this.loginButton = element(by.css('.sel_login'));

  /**
   * @description Function used to enter fields for Sign in then submit
   * @method enterUserCredentials
   * @param {String} email
   * @param {String} name
   * @param {String} lastname
   * @param {String} password
   * @param {String} datox   */
  this.signIn = (email, name, lastname, password, datox) => {
    actions.clickToElement(this.signinButton);
    actions.enterText(this.emailTextField, email);
    actions.clickToElement(this.createButton);
    actions.isElementDisplayed(this.validEmail);
    actions.enterText(this.datos, datox);
    actions.enterText(this.nameTextField, name);
    actions.enterText(this.lnameTextField, lastname);
    actions.enterText(this.passwd, password);
    //actions.hoverElement(this.gender);
    //actions.clickToElement(this.gender);
    actions.clickToElement(this.submitButton);
  };
}
module.exports = new signinPage();
