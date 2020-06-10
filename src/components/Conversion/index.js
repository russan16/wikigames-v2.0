export const dateFormat = (date) => {
    if (date) {
        const newDate = new Date(date);
        return Intl.DateTimeFormat('pt-BR').format(newDate);;
    }
}