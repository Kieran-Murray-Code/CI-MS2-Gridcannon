

let generalCardProperties = {
    suit: "",
    value: 0,
    canBeMoved: "false"
}

let royalCardProperties = {
    armor : 0,
    health : 0
}

function moveCard(){
    return{
        moveCard: ()=> console.log("the card moved")
    }
}

function placeCard(){
    return{
        placeCard: ()=> console.log("the card placed")
    }
}

function selectCard(){
    return{
        selectCard: ()=> console.log("the card was selected")
    }
}


function numberCard(){
    return{
        ...generalCardProperties,
        ...moveCard(),
        ...placeCard(),
        ...selectCard()
    }
}

function royalCard(){

    return{
        ...generalCardProperties,
        ...royalCardProperties,
        ...moveCard(),
        ...placeCard(),
        ...selectCard()
    }
}

function aceCard(){
    return{
        ...generalCardProperties,
        ...moveCard(),
        ...placeCard(),
        ...selectCard()
    }
}

function jokerCard(){
    return{
        ...generalCardProperties,
        ...moveCard(),
        ...placeCard(),
        ...selectCard()
    }
}

