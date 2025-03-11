type Reminder = {
    isCompleted: boolean;
    id: string;
    title: string;
    description: string;
    date: string;
};

class ReminderDatabase {
    private reminders: Map<string, Reminder>;

    constructor() {
        this.reminders = new Map<string, Reminder>();
    }

    createReminder(title: string, description: string, date: string): string {
        const id = crypto.randomUUID(); // Generate a unique ID
        const reminder: Reminder = {
            id, title, description, date,
            isCompleted: false
        };
        this.reminders.set(id, reminder);
        return id; // Return the generated ID
    }

    exists(id: string): boolean {
        return this.reminders.has(id);
    }

    getAllReminders(): Reminder[] {
        return Array.from(this.reminders.values());
    }

    getReminder(id: string): Reminder | null {
        return this.reminders.get(id) || null;
    }

    removeReminder(id: string): boolean {
        return this.reminders.delete(id);
    }

    updateReminder(id: string, title: string, description: string, date: string): boolean {
        if (!this.reminders.has(id)) {
            return false;
        }
        const reminder: Reminder = {
            id, title, description, date,
            isCompleted: false
        };
        this.reminders.set(id, reminder);
        return true;
    }
    
    //mark reminder as completed
    markedAsCompleted(id: string): void{
        if(!this.reminders.has(id)){
            console.log("\nReminder not found\n");
            return;
        }
        const existingReminder = this.reminders.get(id)!;
        existingReminder.isCompleted = true;
        this.reminders.set(id, existingReminder);
        console.log('\nReminder marked as completed\n');
    }

    //mark reminder as incompleted
    markAsIncompleted(id: string): void{
        if(!this.reminders.has(id)){
            console.log("\nReminder not found\n");
            return;
        }
        const existingReminder = this.reminders.get(id)!;
        existingReminder.isCompleted = false;
        this.reminders.set(id, existingReminder);
        console.log('\nReminder marked as incompleted\n');
    }

    //get all reminders marked as completed
    getCompletedReminders(): void{
        console.log('\nCompleted Reminders\n');
        this.reminders.forEach((reminder) => {
            if(reminder.isCompleted){
                console.log(reminder);
            }
        });
    }
    
    //get all reminders marked as incompleted
    getIncompletedReminders(): void{
        console.log('\nIncompleted Reminders\n');
        this.reminders.forEach((reminder) => {
            if(!reminder.isCompleted){
                console.log(reminder);
            }
        });
    }

    //get all reminders due by today
    getAllRemindersDueByToday(): void{
        console.log('\nReminders due by today\n');
        this.reminders.forEach((reminder) => {
            if(new Date(reminder.date).getDate() === new Date().getDate()){
                console.log(reminder);
            }
        });
    }
}
export default ReminderDatabase;
