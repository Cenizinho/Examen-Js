let salarioAnual
{
    salarioAnual = 21600/12
}
console.log('su salario mensual sera ' + salarioAnual)


let salarioMensual
{
    salarioMensual = 1500*12
}
console.log('su salario anual sera ' + salarioMensual)




function PromedioNotas(_A,_B,_C) 
{
    let Nota1 = _A
    return Nota1 
    

    let Nota2 = _B
    return Nota2


    let nota3 = _C
    return nota3

}
let NumeroDeNota1
NumeroDeNota1 = prompt('Que te sacaste en tu primera nota')


let NumeroDeNota2
NumeroDeNota2 = prompt('Que te sacaste en tu segunda nota')


let NumeroDeNota3
NumeroDeNota3 = prompt('Que te sacaste en tu tercera nota')

alert(PromedioNotas (NumeroDeNota1 /3 + NumeroDeNota2 /3 + NumeroDeNota3 /3))
