// Script example for ScriptAPI
// Author: Jacob Rus <https://github.com/jrus>
// Project: https://github.com/JaylyDev/ScriptAPI

import random from "./index";

// set the PRNG’s seed, so that the precise sequence of numbers can be
// regenerated. When the class is first constructed, the PRNG is seeded
// with `+new Date`
random.seed(12345)

// choose a floating point number in the range [0, 1)
random.random()

// choose a floating point number in the range [1.5, 10)
random.uniform(1.5, 10)

// choose an integer N in the range 2 <= N < 50, by 2
random.randrange(2, 50, 2)

// or choose an integer N in the range 0 <= N < 45
random.randrange(45)

// choose an integer N in the range 5 <= N <= 18, endpoint included
random.randint(5, 18)

// randomly choose an element of an array
array = 'abcdefg'.split('')
random.choice(array)

// choose 4 elements from the array, ordered, chosen without replacement
random.sample(array, 4)

// randomly shuffle the array, in place
random.shuffle(array)

// choose a random number from the standard normal distribution
random.gauss()

// choose a random number from the normal distribution with mean 5 and
// standard deviation 5
random.gauss(5, 5)

// choose from the triangular distribution on range [10, 20) with
// mode (peak) 18
random.triangular(10, 20, 18)

// choose from the triangular distribution on range [0, 1) with mode 0.5
random.triangular()

// choose from the log normal distribution. the log of this distribution
// is the normal distibution with mean 5 and standard deviation 5
random.lognormvariate(5, 5)

// choose from the Von Mises distribution, an analog of the normal distribution
// wrapped around a circle, with mean angle π, and concentration parameter π/2
random.vonmisesvariate(Math.PI, Math.PI/2)

// other distributions:
//   - expovariate
//   - gammavariate
//   - betavariate
//   - paretovariate
//   - weibullvariate

// it’s possible to save and restore the state of the PRNG, allowing the same
// set of random numbers to be generated in the same order:
some_state = random.getstate()

a = random.random()
for (let index = 0; index < 1000; index++) {
  random.random();
}

random.setstate(some_state)

random.random() == a

// * * * * * * * * * * * * *

// If the built-in PRNG doesn’t meet your needs, it is easy to
// override with your own PRNG. But this module also ships with
// a couple of alternatives.
import {BaseRandom, BuiltinRandom, HighQualityRandom} from "./index";

// First, `BuiltinRandom` generates random numbers approximately 10
// times as fast as `Random`. It calls the built-in `Math.random`
// function twice to construct a random number between 0 and 1
// with a full 52 bits of entropy. Unfortunately, typical JavaScript
// engines have PRNGs with rather poor performance on statistical
// tests of randomness, and this class also does not support setting
// a custom seed or saving/restoring the PRNG state.
random = new BuiltinRandom();
random.random()

// The other PRNG provided has a much longer period and should pass
// more rigorous statistical tests, at the cost of running roughly 8–10
// times slower:
random = new HighQualityRandom();
random.random()

// It is also quite straight-forward to implement a better custom PRNG:
class XKCDRandom extends BaseRandom {
    // http://xkcd.com/221/
    _randint32() { return 4 };
    _seed(j) { return  void 0;}; // ignore j 
    _getstate() { return  void 0; };
    _setstate() { return void 0; };
}

class DilbertRandom extends BaseRandom {
    // http://dilbert.com/fast/2001-10-25/
    _randint32() { return  9; };
    _seed(j) { return  void 0; }; // ignore j 
    _getstate() { return void 0; };
    _setstate() { return void 0; };
}