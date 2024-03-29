const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

function fib(n) {
    if (n <= 1) {
        return 1;
    }
    return fib(n - 2) + fib(n - 1);
}

suite
    .add('fib(10)', () => {
        fib(11);
    })
    .add('fib(20)', () => {
        fib(21);
    })
    .add('fib(30)', () => {
        fib(31);
    })
    .on('cycle', event => {
        // Output benchmark result by converting benchmark result to string
        console.log(String(event.target));
    })
    .run();