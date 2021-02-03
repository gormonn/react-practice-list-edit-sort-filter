[*Return to main repo*](https://github.com/gormonn/gormonn.github.io)

# Bugs
* [x] Не билдится проект. *На текущий момент, в зависимости **faker** присутствует [ошибка](https://github.com/Marak/faker.js/issues/1093), поэтому важно устанавить **faker@5.1.0**. Добавил его в список зависимостей.* ([ошибка исправлена](https://github.com/Marak/faker.js/issues/1093#issuecomment-771864394))

# Задание

Реализовать страницу, содержащую таблицу с перечнем товаров.

Сборку проекта необходимо совершать с помощью Webpack, при этом должна быть возможность запускать отдельно сборку для разработки и отдельно для релиза.

* [x] Использовать React/Redux

![Table](https://i.imgur.com/ZOunZ2A.png)

* [x] Данные можно хранить в файле в замоканом варианте (подгружать из файла в стор изначальные продукты, измненять данные достаточно только в сторе).
  _Использую mocker-data-generator_

* [x] Цены товаров должны храниться как числа, а не как строки; всё форматирование — знаки разделителей, знак валюты — должны происходить уже в коде.
  _Форматирование при помощи Intl.NumberFormat_

* [x] Таблица должна допускать сортировку по столбцам в прямом и обратном порядке при щелчке по заголовкам столбцов (знак в виде треугольника должен указывать направление сортировки).
* [x] _Так же добавил "сброс" сортировки, чтобы вернуть данные в изначальный порядок_

* [ ] Должна присутствовать возможность выполнять фильтрацию перечня товаров по подстроке в их наименовании, не зависимо от регистра.

* [ ] Фильтр должен синхронизироваться с url через search параметр (использовать react-router).

* [ ] Поле «Имя товара» должно быть гиперссылкой, открывающей модальное окно с подробной информацией о товаре;
* [ ] аналогичная информация отображается при нажатии кнопки “Edit”.

![Form](https://i.imgur.com/nIs7kng.png)

* [ ] Кнопка “Add new” должна позволять добавлять новые товары (стоит использовать то же окно, что и для редактирования).
* [x] В столбце с наименованием товара должно отображаться его количество — Count (на картинке оно равно 5).
* [ ] Кнопка “Delete” перед удалением товара должна выводить модальное окно (сделать его самостоятельно, встроенное в браузер не использовать) с подтверждением удаления этого конкретного товара (например, «Вы действительно хотите удалить “Товар 2”?»). При этом экран за модальным окном затемняется и его элементы становятся невосприимчивыми к пользователю.
* [ ] Проверка пользовательского ввода (т.е. «валидация») в модальном окне редактирования товара должна происходить сразу. Для валидации можно использовать библиотеку ajv.
* [ ] Некорректно заполненное поле имеет красную рамку, а справа от него отображается текст, поясняющий причину ошибки (например, "Длина поля не может превышать 15 символов");
* [ ] Признак некорректности появляется только после получения и потери полем фокуса ввода. Изначально незаполненные поля некорректными не считаются;
* [ ] При устранении ошибки индикация некорректного поля (рамка и текст) должна пропадать. Подробнее о работе конкретных полей в модальном окне можно посмотреть ниже.
* [ ] Name:  
* Поле не может быть пустым  
* Поле не может состоять только из пробелов  
* Максимальная длина 15 букв  
* [ ] Email:  
* Соответствие введённого текста формату e-mail
* [ ] Count:  
* В поле можно вводить только цифры.  
* Недопустимые символы нельзя ни вводить, ни вставлять из буфера обмена Price:  
* При редактировании значения поля его содержимое отображается и вводится как число (12123343.25)  
* При завершении редактирования (когда поле теряет фокус ввода) значение должно форматироваться как валюта США: разряды отделены запятыми, в начале стоит знак доллара (\$12,123,343.25)  
* [ ] Delivery:  
В комбобоксе есть 3 варианта выбора:
* Пусто – доставки нет, справа обе прямоугольных области прячутся  
* Страна – отображается список радиокнопок со странами, список городов прячется o Город - отображается список чекбоксов со списком городов, список стран прячется
* Пункт «Город» недоступен для выбора до тех пор, пока не выбрана страна ∙ Список городов всегда соответствует выбранной стране  
* У товара либо не должно быть доставки совсем, либо должны быть выбраны и страна, и список городов к ней. (Ситуация, когда выбрана страна, но не выбрано ни одного города недопустима).
* [ ] Кнопки Add/Update:
Выполняют полную проверку корректности заполнения формы  
* Некорректно заполненные поля должны иметь соответствующую индикацию (красная рамка и текст) вне зависимости от того, получали ли они ранее фокус ввода  
* При наличии хотя бы одной ошибки ввода товар не должен сохраниться ∙ Фокус должен переходить в первое некорректно заполненное поле
