JavaScript port of the [SimMetrics Java library](http://sourceforge.net/projects/simmetrics/) plus more.
===

This is a further fork from msamblet's version, which is a fork from novacrazy's version. I'm focused on a few additional things:
- Make this library produce the same values as the java version (important!) So far this means better results for
	- ChapmanMatchingSoundex
	- Levenshtein
	- MongeElkan
	- SmithWatermanGotoh
- Automated testing
- Work with node.js
- Adding SmithWatermanGotoh metrics support.

##Use
```
npm install
npm install -g mocha
```
and then to run all the tests:
```
mocha
```

##ToDo
1. The following metrics still seem to generate different answers than the java version, and need to be corrected.
   - EuclideanDistance
   - MatchingCoefficient
   - MongeElkan
   - OverlapCoefficient
   - QGramsDistance
2. You can use this as an npm package now (`npm install github.com/lawrenae/simmetrics`), but I'd like to clean it up and submit it to npmjs.org

##Original Author:

	"author": {
		"name": "Aaron Trent",
		"email": "novacrazy@gmail.com",
		"url": "www.novacrazy.com"
	}

##General Description
Hand-optimized and re-factored to provide clean and fast string similarity algorithms for JavaScript developers.

Although this is designed for Node.js, I will provide a browser version sometime in the future (or if anyone would like to contribute one).

So far, nearly all parts of the library have been ported. Algorithms left to be added are:

- TagLink
- TagLinkToken

I should have those up very soon.

###A note I should make:
I did not include the original timing tests for each one. I think they are unnecessary. However, as they can be useful sometimes, I will include them sometime as seperate modules which can be merged into the algorithms.

##Soundex Notes
Soundex works as an object created by new, in which case the normal soundex function is called as `instance.soundex(input[, length]);` OR you can simply call the Soundex function directly as `Soundex(input[, length]);`

Also, it does not include the hyphen between the leading letter and the soundex numbers.
