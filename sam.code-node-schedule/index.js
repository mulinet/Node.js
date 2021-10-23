'use strict'
const recurerenceRule = require("./jobs/recurrence");

recurerenceRule.jobs1Start();
setTimeout(function() {recurerenceRule.jobs1stop();}, 3000);

recurerenceRule.jobs2(true);
setTimeout(function() {recurerenceRule.jobs2(false);}, 3000);

