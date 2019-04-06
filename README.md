# Тестовое задание
Для соискателя на должность front-end разработчика

# Описание

### Вступление

Владелец зоопарка хочет получить приложение, с этой целью он обратился в нашу компанию.
Ваш наставник подготовил для вас архитектуру приложения.
В каталоге public имеются json файлы /json/animals.json, /json/food.json.
От вас требуется выполнить поставленный ниже ряд задач.

### Задача 1 ✔
При помощи технологии Styled-Components реализовать компонент AnimalsList.
Компонент должен представлять из себя вертикальный список, состоящий из ссылок ("react-router-dom"), ведущих на одноименные страницы.
Компонент должен принимать массив, где каждый элемент массива реализует структуру:
```javascript
{ label, link }
```

### Задача 2 ✔
Реализовать модуль Redux, который будет запрашивать список животных (/json/animals.json) и сохранять их в хранилище.

### Задача 3 ✔
Реализовать контейнер для компонента AnimalsList.
Контейнер должен принимать на вход данные, полученные из модуля Redux, в формате:
```javascript
{ name, id }
```
И передавать компоненту форматированный массив данных, которые он ожидает.

### Задача 4 ✔
В главный Layout приложения добавить готовый контейнер со список животных.
Стилизовать Layout таким образом:
- Тело компонента находится посередине экрана
- В левой части находится список животных
- В правой части находится содержимое конкретной страницы приложения

### Задача 5
Реализовать компонент Animal который будет отображать Наименование животного.
Компонент должен принимать на вход строку (наименование).

Реализовать контейнер который будет принимать на вход id животного, через модуль Redux, получать из хранилища список животных и передовать компоненту наименование животного, id которого совпал.

На странице Animal/:id получить id животного и передать в Animal контейнер.

### Задача 6
Добавить в роутер обработку 404 ошибки.

## На втором этапе тестового задания необходимо:
- Реализовать компонент ui Select (Выпадающий список), который будет иметь возможность внутренней фильтрации options по полю label, на основании введенной строки.
- Компонент должен принимать в себя массив данных формата
```javascript
{ label, value }
```
- Реализовать модуль Redux, который будет запрашивать справочник "Еды для животных" (/json/food.json)
- Реализовать компонент FoodSelect который служит обертской для ui Select и добавляет выпадающему списку заголовок: Еда для животного
- Через контейнер пробросить данные из модуля redux в Компонент FoodSelect
- Добавить на страницу Animal контейнер FoodSelect, контейнер должен размещаться под названием животного




### Стек технологий
React, Redux, Styed-Components, Axios
