const sqAll = (num) => {
    return num
        .toString()
        .split('')
        .reduce((acc, number) => {
            return acc + Math.pow(number, 2);
        }, 0);
};

const isCool = (num) => {
    let result = sqAll(num);

    while ((result !== 1) && (result !== 4)) {
        result = sqAll(result);
    }

    return result === 1;
};

const addAllCool = (toNumber) => {
    let num = 1;
    let result = 0;

    while (num <= toNumber) {
        const cool = isCool(num);

        if (cool) {
            result += num;
        }

        num += 1;
    }

    return result;
};

export {
    addAllCool,
    isCool,
};
