const textBase1 = [, , , ,];
const textBase2 = [5, 10, 15, 20, 25];
const textBase3 = [8, 16, 24, 32, 40];

const coneValue = ({ index, value }) => {
    const tBPositonOne = textBase1[index];
    const tBPositonTwo = textBase2[index];
    const tBPositonThree = textBase3[index];
// [0],[1]
    value = [
        [0, 0, 0, 0,],
        [],
        [],
        [],
    ]
        

    return (
        <div
            value={[12, 15, 18, 21, 24]}
            value2={[, , , , ]}
            value3={[, , 3, 4, 5]}
        >
        <p>	Para cada penalidade do inimigo-alvo, aumenta em 12% o Dano causado pelo usuário, podendo acumular até 3 vez(es). 
            O efeito também se aplica ao Dano Contínuo.</p>

        </div>

    )
}

