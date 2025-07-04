def simple_notepad():
    while True:
        print("\n=== Простой блокнот ===")
        print("1. Просмотреть файл")
        print("2. Записать в файл (перезаписать)")
        print("3. Добавить текст в файл")
        print("4. Выход")
        
        choice = input("Выберите действие (1-4): ")
        
        if choice == "1":
            try:
                with open("notes.txt", "r", encoding="utf-8") as file:
                    print("\nСодержимое файла:")
                    print(file.read())
            except FileNotFoundError:
                print("Файл не найден. Сначала создайте файл (выберите 2 или 3).")


                
        elif choice == "2":
            text = input("Введите текст для записи (старое содержимое удалится):\n")
            with open("notes.txt", "w", encoding="utf-8") as file:
                file.write(text)
            print("Текст успешно записан!")
            
        elif choice == "3":
            text = input("Введите текст для добавления:\n")
            with open("notes.txt", "a", encoding="utf-8") as file:
                file.write("\n" + text)
            print("Текст успешно добавлен!")
            
        elif choice == "4":
            print("Выход из блокнота...")
            break
            
        else:
            print("Неверный ввод. Попробуйте снова.")

# Запуск блокнота
simple_notepad()