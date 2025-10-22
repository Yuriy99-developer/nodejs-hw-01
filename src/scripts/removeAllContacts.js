import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        // 1️⃣ Створюємо порожній масив
        const emptyContacts = [];

        // 2️⃣ Записуємо у файл
        await writeContacts(emptyContacts);

        // 3️⃣ Повідомлення для користувача
        console.log("🗑️ Усі контакти успішно видалено!");
    } catch (error) {
        console.error("❌ Помилка при видаленні всіх контактів:", error);
    }
};

// Викликаємо функцію
removeAllContacts();