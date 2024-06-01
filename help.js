async function executeInSeries(asyncFunctions) {
    for (const asyncFunction of asyncFunctions) {
        await asyncFunction();
    }
}

// Example usage:
async function asyncFunction1() {
    console.log('Starting asyncFunction1');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async work
    console.log('Finished asyncFunction1');
}

async function asyncFunction2() {
    console.log('Starting asyncFunction2');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async work
    console.log('Finished asyncFunction2');
}

async function asyncFunction3() {
    console.log('Starting asyncFunction3');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async work
    console.log('Finished asyncFunction3');
}

const asyncFunctions = [asyncFunction1, asyncFunction2, asyncFunction3];

executeInSeries(asyncFunctions).then(() => {
    console.log('All async functions executed in series');
});
