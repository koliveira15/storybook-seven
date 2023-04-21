describe('feature-two', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mycomponentcomponent--primary'));
  it('should render the component', () => {
    cy.get('storybook-seven-my-component').should('exist');
  });
});
