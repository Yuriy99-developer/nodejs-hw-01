import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        // 1️⃣ Зчитуємо наявні контакти
        const contacts = await readContacts();

        // 2️⃣ Перевіряємо, чи є хоча б один контакт
        if (contacts.length === 0) {
            console.log("⚠️ Немає контактів для видалення!");
            return;
        }

        // 3️⃣ Видаляємо останній елемент
        const removedContact = contacts.pop();

        // 4️⃣ Записуємо оновлений масив у файл
        await writeContacts(contacts);

        // 5️⃣ Виводимо повідомлення
        console.log("🗑️ Останній контакт видалено!");
        console.log("❌ Видалений контакт:", removedContact);
        console.log(`📦 Залишилось контактів: ${contacts.length}`);
    } catch (error) {
        console.error("❌ Помилка при видаленні останнього контакту:", error);
    }
};

// Викликаємо функцію
removeLastContact();