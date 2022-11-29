/// <reference types="Cypress"/>

describe('Test alerts', function(){
it('Test case 1', function (){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#name').type('Jelena');
   cy.get('#alertbtn').click();

   //kako validirati text iz alerta, s'obzirom da ga Cypress uvek automatski potvrdi i to ne moze da se menja

    //kako se uporedjuju 2 stringa, tako sto se alert pokrene preko on metode

    //preko cy.on(window:value),(str)=>{expect(str).to.equal('String')}

   // cy.on('window:alert', (str)=>{expect(str).to.equal('adasfdasa')}) moze i include moze i equal

    cy.on('window:alert', (str)=>{expect(str).to.include('Hello')})
  
    cy.get('[value="Confirm"]').click(); //bez ovog dela kao da ne pokrece sledeci red i ne prijavljuje da je nesto palo

    cy.on('window:confirm', (str)=>{expect(str).to.include('Are you sure')})










})})