// Desafio prático

var per_hour = parseFloat(prompt("Vamos fazer alguns cálculos, primeiro, quanto você ganha por hora?"))

var work_hour = parseFloat(prompt("Quantas horas você trabalhou no mês?"))

var gross_pay = per_hour * work_hour

if (isNaN(gross_pay) || gross_pay < 0) {
  console.log("Por favor, insira valores válidos.")
} else {

var IRdiscount = gross_pay * 0.11
var INSSdiscount = gross_pay * 0.08
var Sindicatodiscount = gross_pay * 0.05

var net_pay = gross_pay - IRdiscount - INSSdiscount - Sindicatodiscount;

console.log(`Seu salário bruto é R$${gross_pay}`)

console.log(`Você pagou um total de R$${INSSdiscount} ao INSS`)

console.log(`Você pagou um total de R$${Sindicatodiscount} ao Sindicato`)

console.log(`Seu valor total de descontos é R$${IRdiscount + INSSdiscount + Sindicatodiscount}`)

console.log(`Seu salário líquido é R$${net_pay}`)

}