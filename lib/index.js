module.exports = {};
module.exports.wordhandlers = {};
module.exports.tokenisers = {};
module.exports.similaritymetrics = {};
module.exports.similaritymetrics.costfunctions = {};
module.exports.wordhandlers.DummyStopTermHandler = require("./wordhandlers/DummyStopTermHandler");
module.exports.wordhandlers.GenericGazeteerTermHandler = require("./wordhandlers/GenericGazeteerTermHandler");
module.exports.wordhandlers.AbstractWordHandler = require("./wordhandlers/AbstractWordHandler");
module.exports.wordhandlers.GenericStopTermHandler = require("./wordhandlers/GenericStopTermHandler");
module.exports.tokenisers.TokeniserQGram2Extended = require("./tokenisers/TokeniserQGram2Extended");
module.exports.tokenisers.TokeniserQGram2 = require("./tokenisers/TokeniserQGram2");
module.exports.tokenisers.TokeniserQGram3Extended = require("./tokenisers/TokeniserQGram3Extended");
module.exports.tokenisers.TokeniserCVSBasic = require("./tokenisers/TokeniserCVSBasic");
module.exports.tokenisers.TokeniserWhitespace = require("./tokenisers/TokeniserWhitespace");
module.exports.tokenisers.AbstractTokeniser = require("./tokenisers/AbstractTokeniser");
module.exports.tokenisers.TokeniserQGram3 = require("./tokenisers/TokeniserQGram3");
module.exports.similaritymetrics.MatchingCoefficient = require("./similaritymetrics/MatchingCoefficient");
module.exports.similaritymetrics.SmithWatermanGotohWindowedAffine = require("./similaritymetrics/SmithWatermanGotohWindowedAffine");
module.exports.similaritymetrics.AbstractStringMetric = require("./similaritymetrics/AbstractStringMetric");
module.exports.similaritymetrics.SmithWatermanGotoh = require("./similaritymetrics/SmithWatermanGotoh");
module.exports.similaritymetrics.Jaro = require("./similaritymetrics/Jaro");
module.exports.similaritymetrics.Hirschberg = require("./similaritymetrics/Hirschberg");
module.exports.similaritymetrics.costfunctions.SubCost5_3_Minus3 = require("./similaritymetrics/costfunctions/SubCost5_3_Minus3");
module.exports.similaritymetrics.costfunctions.SubCost01 = require("./similaritymetrics/costfunctions/SubCost01");
module.exports.similaritymetrics.costfunctions.SubCost1_Minus2 = require("./similaritymetrics/costfunctions/SubCost1_Minus2");
module.exports.similaritymetrics.costfunctions.AffineGap1_1Over3 = require("./similaritymetrics/costfunctions/AffineGap1_1Over3");
module.exports.similaritymetrics.costfunctions.AffineGap5_1 = require("./similaritymetrics/costfunctions/AffineGap5_1");
module.exports.similaritymetrics.MongeElkan = require("./similaritymetrics/MongeElkan");
module.exports.similaritymetrics.JaroWinkler = require("./similaritymetrics/JaroWinkler");
module.exports.similaritymetrics.JaccardSimilarity = require("./similaritymetrics/JaccardSimilarity");
module.exports.similaritymetrics.CosineSimilarity = require("./similaritymetrics/CosineSimilarity");
module.exports.similaritymetrics.Soundex = require("./similaritymetrics/Soundex");
module.exports.similaritymetrics.QGramsDistance = require("./similaritymetrics/QGramsDistance");
module.exports.similaritymetrics.Levenshtein = require("./similaritymetrics/Levenshtein");
module.exports.similaritymetrics.ChapmanMatchingSoundex = require("./similaritymetrics/ChapmanMatchingSoundex");
module.exports.similaritymetrics.BlockDistance = require("./similaritymetrics/BlockDistance");
module.exports.similaritymetrics.ChapmanOrderedNameCompoundSimilarity = require("./similaritymetrics/ChapmanOrderedNameCompoundSimilarity");
module.exports.similaritymetrics.ChapmanLengthDeviation = require("./similaritymetrics/ChapmanLengthDeviation");
module.exports.similaritymetrics.DamerauLevenshtein = require("./similaritymetrics/DamerauLevenshtein");
module.exports.similaritymetrics.ChapmanMeanLength = require("./similaritymetrics/ChapmanMeanLength");
module.exports.similaritymetrics.OverlapCoefficient = require("./similaritymetrics/OverlapCoefficient");
module.exports.similaritymetrics.NeedlemanWunch = require("./similaritymetrics/NeedlemanWunch");
module.exports.similaritymetrics.EuclideanDistance = require("./similaritymetrics/EuclideanDistance");
module.exports.similaritymetrics.DiceSimilarity = require("./similaritymetrics/DiceSimilarity");
module.exports.similaritymetrics.SmithWaterman = require("./similaritymetrics/SmithWaterman");
module.exports.similaritymetrics.LevenshteinLite = require("./similaritymetrics/LevenshteinLite");
module.exports.similaritymetrics.NeedlemanWunchLite = require("./similaritymetrics/NeedlemanWunchLite");