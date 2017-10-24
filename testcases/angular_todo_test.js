Feature('ToDo Tests');
const url = '/';

Scenario('Create new ToDo', (I, ToDo) => {
  I.amOnPage(url);
  ToDo.addNewItem('Create new ToDo');
});

Scenario('Delete ToDo', (I, ToDo) => {
  I.amOnPage(url);
  ToDo.addNewItem('Delete ToDo 1st');
  ToDo.addNewItem('Delete ToDo 2nd');
  ToDo.removeItemWithNumber(2);
  ToDo.removeItemWithText('Delete ToDo 1st');
});

Scenario('Change ToDo', (I, ToDo) => {
  I.amOnPage(url);
  ToDo.addNewItem('ToDo 1st');
  ToDo.addNewItem('ToDo 2nd');
  ToDo.editItemWithText('ToDo 1st', 'Changed 1st');
  ToDo.editItemWithNumber(2, 'Changed 2nd');
});

Scenario('Completed ToDo', (I, ToDo) => {
  I.amOnPage(url);
  ToDo.addNewItem('ToDo 1st');
  ToDo.addNewItem('ToDo 2nd');
  ToDo.checkItemWithNumber(1);
  ToDo.checkItemWithText('ToDo 2nd');
  ToDo.viewCompleted();
  ToDo.clearCompleted();
});

Scenario('Completed all ToDo', (I, ToDo) => {
  I.amOnPage(url);
  ToDo.addNewItem('ToDo 1st');
  ToDo.addNewItem('ToDo 2nd');
  ToDo.addNewItem('ToDo 3rd');
  ToDo.addNewItem('ToDo 4th');
  ToDo.checkAll();
  ToDo.viewCompleted();
  ToDo.clearCompleted();
});

Scenario('Return ToDo from completed', (I, ToDo) => {
  I.amOnPage(url);
  ToDo.addNewItem('ToDo 1st');
  ToDo.checkItemWithNumber(1);
  ToDo.viewCompleted();
  ToDo.checkItemWithNumber(1);
  ToDo.viewActive();
});
