export const getFormattedDate = date => {
    if (!date) {
        return;
    }

    const {format} = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return format(date);
};

export const getIsoDate = date => {
    if (!date) {
        return;
    }

    return date.toISOString().slice(0, 10);
};

export const getDateMinusDays = (date, days) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
