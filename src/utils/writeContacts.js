import fs from "fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
    try {
        // Перетворюємо об’єкт у JSON-рядок з відступами для читабельності
        const json = JSON.stringify(contacts, null, 2);

        // Записуємо у файл
        await fs.writeFile(PATH_DB, json, "utf-8");
    } catch (error) {
        console.error("Помилка при записі у файл:", error);
        throw error;
    }
};
