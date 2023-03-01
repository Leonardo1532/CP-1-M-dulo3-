let readXlsxFile = require('read-excel-file/node')
let validator = require('validator')


let teste1
let teste2
let teste3
let teste4

let nome
let email
let idade
let matricula

readXlsxFile('./Alunos (4).xlsx').then((rows) => {
    for (let row = 1; row <= 10; row++) {
        for (let column = 0; column <= 3; column++) {
            switch (column) {
                case 0:
                    teste1 = validator.isEmpty(rows[row][column])
                    nome = rows[row][column]
                    break;
                case 1:
                    teste2 = validator.isEmail(rows[row][column])
                    email = rows[row][column]

                    break;
                case 2:
                    if (rows[row][column] <= 0) {
                        teste3 = false
                        idade = rows[row][column]
                    } else {
                        teste3 = true
                        idade = rows[row][column]
                    }
                    break;
                case 3:
                    teste4 = validator.isAlphanumeric(rows[row][column])
                    matricula = rows[row][column]
                    break;
            }
            if (teste1 == false && teste2 == true && teste3 == true && teste4 == true && column == 3) {
                console.log(nome, "//", email, "//", idade, "//", matricula)
            }
        }
    }
})