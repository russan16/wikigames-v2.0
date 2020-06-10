export const dateFormat = (date) => {
    if (date) {
        const newDate = new Date(date);
        return Intl.DateTimeFormat('pt-BR').format(newDate);
    }
};

export const numericFormat = (number) => {
    if (number) {
        return Intl.NumberFormat('pt-BR', {style: "decimal"}).format(number);
    }
};