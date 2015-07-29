var customMatchers = {};

customMatchers.toBeOfType = function(util, customEqualityTesters){
  return {
    compare: function(actual, expected){
      var result = {},
          actualType = typeof actual;

      result.pass = util.equals(actualType, expected, customEqualityTesters);

      if (result.pass){
        result.message = "Expected " + actual + " to be of type " + actualType;
      } else {
        result.message = actual + " is not of type " + expected;
      }

      return result;
    }
  }
};

module.exports = customMatchers;
