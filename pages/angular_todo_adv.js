/**
 * ToDo PageObject
 * @module angular_todo
 * @see ToDo
 */

let I;
const c = require('../constants.js');

const selectors = {
  countOfTodos: '#todo-count strong',
  allTodos: '//*[@id="filters"]//a[.="All"]',
  activeTodos: '//*[@id="filters"]//a[.="Active"]',
  completedTodos: '//*[@id="filters"]//a[.="Completed"]',
  clearCompleted: '#footer #clear-completed',
  todoNumber(number) {
    return `ul#todo-list li:nth-child(${number})`;
  },
  todoText(text) {
    return `//*[@id="todo-list"]/li[div/label[contains(text(), '${text}')]]`;
  },
};

module.exports = {
  _init() {
    // I = require('../steps_file.js')(); // eslint-disable-line global-require
    I = actor();
  },

  /** Selectors, used by that module. */
  selectors,

  addNewItem(text) {
    I.waitForElement('#new-todo');
    I.click('#new-todo');
    // I.fillField('#new-todo', text);
    this.typeText(text);
    I.pressKey('Enter');
  },

  viewAll() {
    I.waitForElement(selectors.allTodos, c.timeout);
    I.wait(0.5);
    I.click(selectors.allTodos);
  },

  viewActive() {
    I.waitForElement(selectors.activeTodos, c.timeout);
    I.wait(0.5);
    I.click(selectors.activeTodos);
  },

  viewCompleted() {
    I.waitForElement(selectors.completedTodos, c.timeout);
    I.wait(0.5);
    I.click(selectors.completedTodos);
  },

  // setCompletedItemWithNumber(number) {
  //   const todo = selectors.todoNumber(number);
  //   I.waitForElement(todo, c.timeout);
  //   I.checkOption(`${todo} .view .toggle`);
  // },

  // setActiveItemWithNumber(number) {
  //   const todo = selectors.todoNumber(number);
  //   I.waitForElement(todo, c.timeout);
  //   I.click(`${todo} .view .toggle`);
  // },

  getTextOfItemWithNumber: function* getCountOfTodos(number) {
    const todo = selectors.todoNumber(number);
    const text = yield I.grabTextFrom(`${todo} .view .ng-binding`);
    return text;
  },

  editItemWithNumber: function* editItemWithNumber(number, text) {
    const todo = selectors.todoNumber(number);
    I.waitForElement(todo, c.timeout);
    const oldText = yield I.grabTextFrom(`${todo} .view .ng-binding`);
    I.doubleClick(`${todo} .view`);
    this.clickBackspace(oldText.length);
    this.typeText(text);
    I.pressKey('Enter');
  },

  editItemWithText(oldText, newText) {
    const todo = selectors.todoText(oldText);
    I.waitForElement(todo, c.timeout);
    I.doubleClick(todo);
    this.clickBackspace(oldText.length);
    this.typeText(newText);
    I.pressKey('Enter');
  },

  removeItemWithNumber(number) {
    const todo = selectors.todoNumber(number);
    I.waitForElement(todo, c.timeout);
    I.moveCursorTo(`${todo} .view`);
    I.waitForEnabled(`${todo} .view button.destroy`, c.timeout);
    I.wait(0.5);
    I.click(`${todo} .view button.destroy`);
  },

  removeItemWithText(text) {
    const todo = selectors.todoText(text);
    I.waitForElement(todo, c.timeout);
    I.moveCursorTo(todo);
    I.waitForEnabled(`${todo}//button[contains(@class, "destroy")]`, c.timeout);
    I.wait(0.5);
    I.click(`${todo}//button[contains(@class, "destroy")]`);
  },

  checkItemWithNumber(number) {
    const todo = selectors.todoNumber(number);
    I.waitForElement(todo, c.timeout);
    I.wait(0.5);
    I.click(`${todo} .view .toggle`);
  },

  checkItemWithText(text) {
    const todo = selectors.todoText(text);
    I.waitForElement(todo, c.timeout);
    I.wait(0.5);
    I.click(`${todo}//input[@type="checkbox"]`);
  },


  checkAll() {
    I.waitForElement('#main #toggle-all', c.timeout);
    I.wait(0.5);
    I.click('#main #toggle-all');
  },

  clearCompleted() {
    I.waitForElement('#footer #clear-completed', c.timeout);
    I.wait(0.5);
    I.click('#footer #clear-completed');
  },

  getCountOfTodos: function* getCountOfTodos() {
    I.waitForElement('#todo-count', c.timeout);
    const count = yield I.grabTextFrom(selectors.countOfTodos);
    return count;
  },

  clickBackspace(count) {
    for (let i = 0; i < count; i += 1) {
      const min = 3; // ../100 of second
      const max = 10; // ../100 of second
      const rand = (Math.floor(Math.random() * (max - min)) + min) / 100;
      I.wait(rand);
      I.pressKey('Backspace');
    }
    I.wait(0.5);
  },

  typeText(text) {
    const arr = text.split('');
    for (let i = 0; i < arr.length; i += 1) {
      const min = 3; // ../100 of second
      const max = 10; // ../100 of second
      let rand = (Math.floor(Math.random() * (max - min)) + min) / 100;
      if (arr[i] === ' ' || arr[i - 1] === ' ') {
        rand += 0.2;
      }
      I.wait(rand);
      I.pressKey(arr[i]);
    }
    I.wait(0.7);
  },
};
