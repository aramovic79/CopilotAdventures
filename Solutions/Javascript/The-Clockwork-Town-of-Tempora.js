/**
 * Comparing the values of the list of times in format HH:MM with the reference value
 * and determines how many minutes is each time ahead or behid the reference time.
 * The result should be an array of integers representing the time difference in minutes. 
 * Positive values indicate the clock is ahead, and negative values indicate it's behind.
 */
function timeDifference(times, reference) {
    const ref = reference.split(':').map(Number);
    return times.map(time => {
        const t = time.split(':').map(Number);
        return (t[0] - ref[0]) * 60 + t[1] - ref[1];
    });
}


console.log(timeDifference(["12:00", "00:00", "18:00"], "12:00")); // [0, -720, 360]

// Test: node The-Clockwork-Town-of-Tempora.js