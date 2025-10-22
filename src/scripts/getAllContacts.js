import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        // 1️⃣ Зчитуємо контакти з файлу
        const contacts = await readContacts();

        // 2️⃣ Виводимо їх у консоль
        console.log("📋 Список усіх контактів:");
        console.log(contacts);

        // 3️⃣ (Не обов’язково) повертаємо масив
        return contacts;
    } catch (error) {
        console.error("❌ Помилка при отриманні контактів:", error);
    }
};

// Викликаємо функцію для перевірки
getAllContacts();