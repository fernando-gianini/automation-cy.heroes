class likeHeroPage {

    selectorList() {
        const selector = {
            verificLike: '[data-cy="fans"]',
            likebutton: '[data-cy="like"]'
        }

        return selector

    }
    verificAmountLikes () {
        cy.get(this.selectorList().verificLike).eq(1).invoke('text').then((textBefore) => {const countBefore = parseInt(textBefore, 10)})
        cy.wrap(countBefore).as('countBefore')
    }
    clickLikeButton () {
        cy.get(this.selectorList().likebutton).eq(1).click({force : true})
    }
    confirmLike(){
        cy.get(this.selectorList().verificLike).eq(1).invoke('text').should((textAfter) => {const countAfter = parseInt(textAfter, 10); expect(countAfter).to.eq(countBefore + 1);
        });
    };
}

export default likeHeroPage