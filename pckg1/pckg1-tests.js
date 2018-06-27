// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by pckg1.js.
import { name as packageName } from "meteor/notlimited-com:pckg1";

// Write your tests here!
// Here is an example.
Tinytest.add('pckg1 - example', function (test) {
  test.equal(packageName, "pckg1");
});
