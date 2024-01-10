export const getFormattedDate = date => {
    const {format} = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return format(date);
};
