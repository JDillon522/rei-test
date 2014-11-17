var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Barkley REI Frontend Test' });
});

router.get('/test1', function(req, res) {
  res.render('test1', { title: 'Test 1 - Use the hCalendar Microformat' });
});

router.get('/test2', function(req, res) {
  res.render('test2', { title: 'Test 2 - Write semantic markup' });
});

router.get('/test3', function(req, res) {
  res.render('test3', { title: 'Test #3 - Basic jQuery' });
});

router.get('/test4', function(req, res) {
  res.render('test4', { title: 'Test #4 - Basic JavaScript' });
});

router.get('/test5', function(req, res) {
  res.render('test5', { title: 'Test #5 - Implement Flexslider' });
});

router.get('/test6', function(req, res) {
  res.render('test6', { title: 'Test #6 - Responsive' });
});

router.get('/test7', function(req, res) {
  res.render('test7', { title: 'Test #7 - Make a jQuery Plugin' });
});

router.get('/homework', function(req, res) {
  res.render('homework', { title: 'Responsive Time Square', noNav: true });
});

module.exports = router;
