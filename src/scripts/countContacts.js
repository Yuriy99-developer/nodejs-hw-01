import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        // 1️⃣ Зчитуємо контакти
        const contacts = await readContacts();

        // 2️⃣ Рахуємо кількість
        const count = contacts.length;

        // 3️⃣ Виводимо результат
        console.log(`📊 Кількість контактів у базі: ${count}`);

        // 4️⃣ (Не обов’язково) повертаємо кількість
        return count;
    } catch (error) {
        console.error("❌ Помилка при підрахунку контактів:", error);
    }
};

// Викликаємо функцію
countContacts();
