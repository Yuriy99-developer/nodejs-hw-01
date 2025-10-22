import fs from "fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
        // Зчитуємо вміст файлу як текст
        const data = await fs.readFile(PATH_DB, "utf-8");

        // Якщо файл порожній — повертаємо порожній масив
        if (!data) {
            return [];
        }

        // Перетворюємо JSON-рядок у масив об'єктів
        return JSON.parse(data);
    } catch (error) {
        // Якщо файлу ще не існує — створюємо його з порожнім масивом
        if (error.code === "ENOENT") {
            await fs.writeFile(PATH_DB, JSON.stringify([]));
            return [];
        }

        console.error("Помилка при читанні файлу:", error);
        throw error;
    }
};
