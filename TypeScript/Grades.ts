/**
 * You are given an array of objects representing students. Each student has a name (string) and an array of grades (numbers). Write a TypeScript function that takes an array of students and returns an object containing the average grade for each student. The result should be an object where the keys are student names, and the values are their average grades.
 */
interface Student {
    name: string;
    grades: number[];
}

function calculateAverageGrades(students: Student[]): Record<string, number> {
    const averageGrades: Record<string, number> = {};

    students.forEach(student => {
        const { name, grades } = student;

        if (grades.length === 0) {
            averageGrades[name] = 0;
        } else {
            const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);
            const average = totalGrades / grades.length;
            averageGrades[name] = average;
        }
    });

    return averageGrades;
}

// Example usage:
const students: Student[] = [
    { name: "Student1", grades: [90, 85, 92] },
    { name: "Student2", grades: [88, 91, 87] },
    // Add more students as needed
];

const averageGrades = calculateAverageGrades(students);
console.log(averageGrades);