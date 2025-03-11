import ReminderDatabase from "./reminder";

const reminderDatabase = new ReminderDatabase();

// Creating reminders (storing the generated IDs)
const id1 = reminderDatabase.createReminder("Meeting", "Discuss the project", new Date().toISOString());
const id2 = reminderDatabase.createReminder("Shopping", "Buy groceries", new Date().toISOString());
const id3 = reminderDatabase.createReminder("Gym", "Workout", new Date().toISOString());
console.log(reminderDatabase.getAllReminders());
// Output: An array of reminders with generated IDs

console.log(reminderDatabase.getReminder(id1));
// Output: The reminder with the generated id1

console.log(reminderDatabase.exists(id2));
// true

console.log(reminderDatabase.removeReminder(id2));
// true

console.log(reminderDatabase.getAllReminders());
// Only contains the remaining reminders

console.log(reminderDatabase.updateReminder(id1, "Meeting", "Discuss the project", new Date().toISOString()));
// true

console.log(reminderDatabase.getAllReminders());
// Updated list of reminders

console.log(reminderDatabase.updateReminder(id2, "Shopping", "Buy groceries", new Date().toISOString()));
// false (id2 was removed earlier)

//marking 1st reminder completed
reminderDatabase.markedAsCompleted(id1);

//marking 1st reminder incompleted
reminderDatabase.markAsIncompleted(id3);

//getting all reminders marked as completed
reminderDatabase.getCompletedReminders();

//getting all reminders marked as incompleted
reminderDatabase.getIncompletedReminders(); 

//getting all reminders due by today
reminderDatabase.getAllRemindersDueByToday();