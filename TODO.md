* [x] - sorting bug. Сортировка может происходить в неправильном порядке, из-за того, что в tableReducer 2 поля: sortField и sortDirection. Как воспроизвести: чередовать сортировку.
* [x] - Т.к. запрос - это история асинхронная, нужно использовать middleware: redux-thunk или redux-saga
* [x] Не билдится проект. *На текущий момент, в зависимости **faker** присутствует [ошибка](https://github.com/Marak/faker.js/issues/1093), поэтому важно устанавить **faker@5.1.0**. Добавил его в список зависимостей.* ([ошибка исправлена](https://github.com/Marak/faker.js/issues/1093#issuecomment-771864394))
* [x] - Сделать eject
* [ ] - Убрать ненужные зависимости, оставшиеся после eject from cra

# Для себя:
* [ ] - добавить плагин [babel-plugin-typescript-to-proptypes](https://github.com/milesj/babel-plugin-typescript-to-proptypes). Позволяет генерить PropTypes из интерфейсов TypeScript
* [ ] - Вникнуть в [react-flip-toolkit](https://github.com/aholachek/react-flip-toolkit)