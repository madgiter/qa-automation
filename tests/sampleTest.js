const data = require('../test_data/data');
const page = require('../page_objects/page')
const signinPage = require('../page_objects/signinPage');
//const tasksPage = require('../page_objects/tasksPage');

beforeAll(function () {
  page.openUrl()
})

describe("SignIn into the Site", function() {
    it("Enter application", function() {
        signinPage.signIn(data.email, data.name, data.lastname, data.password, data.datox);
        //expect(tasksPage.isAgendaViewDisplayed()).toBe(true);
    });

    /*it("Create a task", function() {
        tasksPage.createTask(data.taskName);
        expect(tasksPage.getLastTaskText()).toEqual(data.taskName);
    });

    it("Update a task", function() {
        tasksPage.updateTask(data.taskUpdate);
        expect(tasksPage.getLastTaskText()).toEqual(data.taskUpdate);
    });

    it("Delete a task", function() {
        const initialListLength = tasksPage.getTasksCount();
        tasksPage.deleteTask();
        expect(tasksPage.getTasksCount()).not.toEqual(initialListLength);
    });
    */
});
