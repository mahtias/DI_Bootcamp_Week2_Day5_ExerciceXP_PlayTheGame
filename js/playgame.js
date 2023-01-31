


// Exercice 1 :  Jeu De Devinettes


/*
Jetez un oeil à votre fichier html, vous devriez avoir un bouton avec un événement "onclick". Cet événement est égal à la fonction playTheGame()
 . Cela signifie que lorsque vous cliquerez sur le bouton, la fonction playTheGame() sera appelée.
 */

 /*Dans le fichier JS, créez une fonction appelée playTheGame() qui ne prend aucun paramètre.
Dans la fonction, commencez par demander à l'utilisateur s'il souhaite jouer au jeu (Astuce : utilisez la confirm()fonction intégrée).

Si la réponse est fausse, alertez « Pas de problème, au revoir ».

Si sa réponse est vraie, suivez ces étapes :
Demandez à l'utilisateur d'entrer un nombre entre 0 et 10 (Astuce : utilisez la prompt()fonction intégrée). Vous devez ensuite vérifier la validité du numéro d'utilisateur :

Si l'utilisateur n'a pas saisi de numéro (c'est-à-dire s'il a saisi un autre type de données), l'alerte « Désolé, pas un numéro, au revoir ».
Si l'utilisateur n'a pas saisi de chiffre entre 0 et 10, l'alerte « Désolé, ce n'est pas un bon chiffre, au revoir ».
Sinon (c'est-à-dire qu'il a entré un nombre entre 0 et 10 ), créez une variable nommée computerNumberoù la valeur est un nombre aléatoire entre 0 et 10 (Astuce : utilisez la Math.random()fonction intégrée).

*/
// function playTheGame() {
//     let isUserReady = confirm( " Do you want to play ? ")
//     if ( isUserReady ) {
//         alert( "No problem, Goodbye ")
//         return
//     }
//     console.log( "We are playing this game")
// }

function playTheGame(){

    // let isUserReady = confirm( " souhaitez vous jouer à un jeux ? ")
    let isUserReady = confirm( "Do you wan to play ?")
    if ( !isUserReady ) return alert( "no probme, Goodbye" )

    let computerNumber = generateRandomNumber()

    let answer = prompt("Enter à number")
    let numberOfTries = 0

    while ( Number(answer) != computerNumber) {

        // console.log(Number(answer));
       
        numberOfTries = numberOfTries +1
       
        if (numberOfTries === 3) return alert ( "Sorry,too many TransitionEvent. The number was "  +  computerNumber)
        
        if (!isOnlyNumbers(answer)) return alert("sorry not a good number, Goodbye")
        
        if (!isBetweenZeroAndTen(Number(answer))) return alert( "sorry it's not a good number, Goodbye ")

        let biggerOrSmaller = (Number(answer) > computerNumber) ? "bigger" : "smaller"

        alert("your number is " + biggerOrSmaller + " than the coputer's, guess again")

        answer = prompt("enter another number")
    }

     let finalMessage =   `WINNER !  The number was indeed ${ computerNumber}. you found in ${numberOfTries + 1} tries.`
    alert(finalMessage)
}

function isOnlyNumbers(str) {
    let regex = new RegExp (/^[0-9]*$/)
    return regex.test(str)
}
function isBetweenZeroAndTen(numero) {
    return numero >= 0 && numero <= 10

}
function generateRandomNumber () {
    return Math.floor(Math.random() *11 )
}

function compareNumbers(userNumber, computerNumber) {
    if ( userNumber === computerNumber) {
        alert(WINNER)
        return
    }
    if (userNumber > compareNumbers){
        alert ("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau")
    }

}
    // if ( !isUserReady ) { // le ! permet de donner un e reponse "non"

    //     alert(" Pas de problème, au revoir ")
    //     return
    // }

    // const computerNumber = generateRandomNumber ()
    
    // let answer = prompt( "Entrer numero ")

    // while (Number(answer) != computerNumber) {

    //     if ( !onlyNumber (answer)) {
    //         alert( "Desolé c'est pas un numero , à bientot ")
    //         return
    //     }
    
    //     if ( !betweenZeroAndTen (Number(answer))) {
    //         alert(" Désolé, pas le bon numéro, au revoir")
    //         return
    //     }

    //     console.log(Number(answer), computerNumber)
    //     answer = prompt( "Entrer numero ")
    // }


    // console.log("felicitation vous avez trouvé le bon numero")
    // console.log("computerNumber : " + computerNumber)
    // console.log( " Nous jouons aux jeux " )
// }




/*
Si sa réponse est vraie, suivez ces étapes :
Demandez à l'utilisateur d'entrer un nombre entre 0 et 10 (Astuce : utilisez la prompt()fonction intégrée). Vous devez ensuite vérifier la validité du numéro d'utilisateur :

Si l'utilisateur n'a pas saisi de numéro (c'est-à-dire s'il a saisi un autre type de données), l'alerte « Désolé, pas un numéro, au revoir ».
Si l'utilisateur n'a pas saisi de chiffre entre 0 et 10, l'alerte « Désolé, ce n'est pas un bon chiffre, au revoir ».
Sinon (c'est-à-dire qu'il a entré un nombre entre 0 et 10 ),
 créez une variable nommée computerNumberoù la valeur est un nombre aléatoire entre 0 et 10 
 (Astuce : utilisez la Math.random()fonction intégrée). Assurez-vous que le nombre est arrondi.

*/



