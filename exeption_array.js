// Напишите функцию, которая создаёт массив email-адресов,
// не попавших в чёрный список. В качестве аргументов функция должна принимать:
//  массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.


let defaultArray = ['0@i.ru', '1@i.ru', '2@i.ru', '3@i.ru', '4@i.ru', '5@i.ru', '6@i.ru', '7@i.ru', '8@i.ru'],
    exeptionsArray = ['0@i.ru', '3@i.ru', '8@i.ru'],
    trueArray = [];

function checkArrayExeptions(defaultArray, exeptionsArray) {

    for (let j = 0; j < defaultArray.length; j++) {
        let defaultItem = defaultArray[j]

        for (let i = 0; i < exeptionsArray.length; i++) {

            if (exeptionsArray.includes(defaultItem)) break
            else if (defaultItem !== exeptionsArray[i] && i === exeptionsArray.length - 1) {
                trueArray.push(defaultItem);
                break
            } else if (defaultItem !== exeptionsArray[i] && i < exeptionsArray.length - 1)
                continue
        }
    }
    console.log(trueArray)
}

checkArrayExeptions(defaultArray, exeptionsArray);