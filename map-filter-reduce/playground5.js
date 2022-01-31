const lista = [
    {
        name: 'sabão em pó',
        preco: 30
    },
    {
        name: 'chocolate',
        preco: 12
    },
    {
        name: 'refrigerante',
        preco: 8
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log(prev);
        console.log(current);
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));