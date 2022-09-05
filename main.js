const byTheNumbers = document.querySelectorAll('.counter');

byTheNumbers.forEach(number => {
    number.innerText = '0';

    const updtNum = () => {
        const dataTarget = +number.getAttribute('data-target');
        console.log(typeof dataTarget, dataTarget)
        const add = +number.innerText;

        const added = dataTarget / 43;

        console.log(added);

        if(add < dataTarget) {
            number.innerText = `${Math.ceil(add + added)}`;
            setTimeout(updtNum, 1)
        } else {
            number.innerText = dataTarget
        }


    }

    updtNum()
});