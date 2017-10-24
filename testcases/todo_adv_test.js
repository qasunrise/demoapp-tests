Feature('ToDo Tests QASunrise Advertisement');

Scenario('ToDo test QASunrise Advertisement', function* fun(I, ToDoAdv) {
  I.amOnPage('http://todomvc.com/examples/angularjs/#/');
  ToDoAdv.addNewItem('Hire automation specialists');
  ToDoAdv.addNewItem('Choose what should be automated');
  I.wait(1);
  I.doubleClick(ToDoAdv.selectors.todoNumber(2));
  ToDoAdv.clickBackspace('Choose what should be automated'.length);
  ToDoAdv.typeText('Determine what could be automated');
  I.pressKey('Enter');
  I.wait(0.3);

  I.click('#new-todo');
  ToDoAdv.typeText('Choose the correct tool for automation');
  ToDoAdv.clickBackspace('correct tool for automation'.length);
  ToDoAdv.typeText('test automation Framework');

  ToDoAdv.clickBackspace('test automation Framework'.length);
  ToDoAdv.typeText('right test cases to automate');
  I.pressKey('Enter');

  ToDoAdv.addNewItem('Write scripts');
  ToDoAdv.addNewItem('Choose where to run ready scripts');
  ToDoAdv.addNewItem('Maintenance of Scripts');
  I.wait(2);
  const count = yield* ToDoAdv.getCountOfTodos();
  for (let i = count; i > 0; i -= 1) {
    ToDoAdv.removeItemWithNumber(i);
    I.wait(0.3);
  }
  I.wait(1);
  ToDoAdv.addNewItem('OR');
  I.wait(2);
  ToDoAdv.removeItemWithNumber(1);
  I.wait(1);

  ToDoAdv.addNewItem('Just contact us');
  ToDoAdv.addNewItem('qasunrise.com');
  ToDoAdv.addNewItem('contact@qasunrise.com');
  ToDoAdv.addNewItem('+1 (307) 352-9124');
  I.wait(5);
});
