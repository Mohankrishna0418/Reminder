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

    
}
export default ReminderDatabase;
