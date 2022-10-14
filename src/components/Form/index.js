import React, {useState} from 'react';
import * as C from './styles';

const Form = () => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);
    const handleSave = () => {
        if(!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        }else if(amount < 1){
            alert("O valor tem que er positivo!");
            return;
        }
    }
    return(
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onchange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} type="number" onchange={(e) => setAmount(e.target.value)} />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input type="radio" id="rIncome" defaultChecked name="group1" onchange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input type="radio" id="rExpenses" name="group1" onchange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                <C.Button onclick={handleSave}>ADICIONAR</C.Button>
            </C.Container>
        </>
    )
}

export default Form;