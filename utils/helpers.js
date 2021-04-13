module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short'
      });
    },
};