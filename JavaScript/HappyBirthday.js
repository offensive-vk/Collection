/**
 * Calculates the remaining days until the next birthday and prints a message.
 *
 * @param {Date} birthDate - The birth date of the person.
 * @returns {void}
 */
function happyBirthday(birthDate) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Set the birth date to the current year
    birthDate.setFullYear(currentYear);

    // Check if today is the birthday
    if (isTodayBirthday(birthDate, currentDate)) {
        console.log("Happy Birthday! 🎉🎂");
    } else {
        // Calculate days until the next birthday
        const daysUntilBirthday = calculateDaysUntilBirthday(birthDate, currentDate);

        // Print the remaining days until the next birthday
        const remainingDaysMessage = `${daysUntilBirthday.years} years, ${daysUntilBirthday.months} months, and ${daysUntilBirthday.days} days until your next birthday.`;
        console.log(remainingDaysMessage);
    }
}
/**
 * Determines if today is the birthday based on the given birth date and current date.
 *
 * @param {Date} birthDate - The birth date of the person.
 * @param {Date} currentDate - The current date.
 * @returns {boolean} - True if today is the birthday, false otherwise.
 */
function isTodayBirthday(birthDate, currentDate) {
    return (
        birthDate.getDate() === currentDate.getDate() &&
        birthDate.getMonth() === currentDate.getMonth()
    );
}
/**
 * Calculates the number of days until the next birthday.
 *
 * @param {Date} birthDate - The birth date of the person.
 * @param {Date} currentDate - The current date.
 * @returns {Object} - An object containing the number of years, months, and days until the next birthday.
 */
function calculateDaysUntilBirthday(birthDate, currentDate) {
    let nextBirthday = new Date(currentDate);
    nextBirthday.setFullYear(currentDate.getFullYear());

    if (nextBirthday.getTime() < currentDate.getTime()) {
        // If the birthday has already occurred this year, set it to next year
        nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    const timeDifference = nextBirthday - currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);

    return { years, months, days };
}

// Example usage
const myBirthDate = new Date("2000-01-01"); // Replace with your actual birth date
happyBirthday(myBirthDate);