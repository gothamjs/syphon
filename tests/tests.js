module("Syphon Get");

test("Checkboxes not checked must return false", 1, function() {

  syphon = new Syphon();
  datas = syphon.get('#checkboxes-not-checked-false');

  deepEqual(datas.vehicle, false);

});

test("Radios not checked must return false", 1, function() {

  syphon = new Syphon();
  datas = syphon.get('#radios-not-checked-false');

  deepEqual(datas.vehicle, false);

});

test("Can read all html basic types", 5, function() {

  syphon = new Syphon();
  datas = syphon.get('#all-html-basic-types');

  deepEqual(datas.textarea, 'textarea');
  deepEqual(datas.text, 'text');
  deepEqual(datas.password, 'password');
  deepEqual(datas.checkbox, 'checkbox3');
  deepEqual(datas.radio, 'radio2');

});

test("Can read extra html5 types", 7, function() {

  syphon = new Syphon();
  datas = syphon.get('#extra-html5-types');

  deepEqual(datas.color, '#000000');
  deepEqual(datas.range, '5');
  deepEqual(datas.number, '4');
  deepEqual(datas.date, '2015-03-03');
  deepEqual(datas.month, '2015-03');
  deepEqual(datas.week, '2015-W10');
  deepEqual(datas.time, '23:01');

});

test("Select multiples with some values checked must return an array", 3, function() {

  syphon = new Syphon();
  datas = syphon.get('#select-multiples');

  deepEqual(datas.cars[0], 'volvo');
  deepEqual(datas.cars[1], 'saab');
  deepEqual(datas.cars[2], 'opel');

});

test("Select multiples with no selected values must return false", 1, function() {

  syphon = new Syphon();
  datas = syphon.get('#select-multiples-no-selected');

  deepEqual(datas.cars, false);

});

test("Don't find the form must return an empty object", 1, function() {

  syphon = new Syphon();
  datas = syphon.get('#this-selector-doesnt-exist');

  deepEqual(datas, {});

});

module("Syphon exclude");

test("Must exclude strong", 3, function() {

  syphon = new Syphon();
  datas = syphon.exclude(['strong']).get("#exclude-strong")

  deepEqual(datas.lvl, "25");
  deepEqual(datas.name, "Peter");
  deepEqual(datas.strong, undefined);

});

test("Exclude without params must work", 1, function() {

  syphon = new Syphon();
  datas = syphon.exclude().get('#exclude-no-params');

  deepEqual(datas.type, "zombie");

});

test("Arguments way must work too", 3, function() {

  syphon = new Syphon();
  datas = syphon.exclude('tweet', 'name').get('#arguments-way');

  deepEqual(datas.shared, "yes");
  deepEqual(datas.tweet, undefined);
  deepEqual(datas.name, undefined);

});
