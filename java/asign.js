// function getRandomAlphabet(){
//     const alphahetString = 'abcdefghijklmnopqrstvwuxyz';
//     const alphahets = alphahetString.split('');
//     console.log(alphahets);

//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
//     console.log(index);

//     const alphahet = alphahets[index];
//     // console.log(index,alphahet);
//     return alphahet ;
// }

//   ['A1','B1','C1','D1','A2','B2','C2','D2'];

// function setbackgroundId(elementID){
//     const element = document.getElementById(elementID);
//     element.classList.add('bg-orange-400');
// }

// function removebackgroundId(elementID){
//     const element = document.getElementById(elementID);
//     element.classList.remove('bg-orange-400');
// }
function getRandomAlphabet(){
    const alphahets = ['A1','B1','C1','D1','A2','B2','C2','D2'];
    
    console.log(alphahets);

    const randomNumber = Math.random()*7;
    const index = Math.round(randomNumber);
    console.log(index);

    const alphahet = alphahets[index];
    // console.log(index,alphahet);
    return alphahet ;
}
