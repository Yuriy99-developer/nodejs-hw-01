import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (count = 5) => {
    try {
        // 1️⃣ Зчитуємо існуючі контакти
        const contacts = await readContacts();

        // 2️⃣ Створюємо нові контакти
        const newContacts = Array.from({ length: count }, () => createFakeContact());

        // 3️⃣ Об'єднуємо старі та нові
        const updatedContacts = [...contacts, ...newContacts];

        // 4️⃣ Записуємо назад у файл
        await writeContacts(updatedContacts);

        console.log(`✅ Успішно додано ${count} нових контактів!`);
        console.log(`📦 Загальна кількість контактів: ${updatedContacts.length}`);
    } catch (error) {
        console.error("❌ Помилка при генерації контактів:", error);
    }
};

// Викликаємо функцію для тесту (наприклад, 5 контактів)
generateContacts(5);
