import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        // 1️⃣ Зчитуємо існуючі контакти
        const contacts = await readContacts();

        // 2️⃣ Створюємо один новий контакт
        const newContact = createFakeContact();

        // 3️⃣ Додаємо його до масиву
        const updatedContacts = [...contacts, newContact];

        // 4️⃣ Записуємо назад у файл
        await writeContacts(updatedContacts);

        console.log("✅ Один новий контакт успішно додано!");
        console.log("🆕 Новий контакт:", newContact);
        console.log(`📦 Загальна кількість контактів: ${updatedContacts.length}`);
    } catch (error) {
        console.error("❌ Помилка при додаванні контакту:", error);
    }
};

// Викликаємо функцію
addOneContact();
