<h1 align="center">
    <img src="./.github/assets/logo--light.svg">
</h1>
<p align="center">
    <i align="center">Сайт ориентирован на школу ГБОУ 501 города Санкт-Петербург</i>
</p>

## О проекте
.float – это сайт, разрабатываемый учениками школы ГБОУ 501 (см. выше) для получения реального опыта создания сайта, а также для проектной деятельности в этой школе. На нём располагается следующая информация:
1. Расписание для 5-11 классов (WIP)
2. Опорные конспекты школьной программы по физике
3. Конспект школьной программы русского языка
4. Формулы, теоремы, таблицы и прочее для математики, информатики, химии и др.
5. Техники и советы для более быстрого запоминания материала
6. Различного вида утилиты для учеников (конверторы км/ч в м/с; биты в килобайты и т.д.)
7. Различного вида утилиты для преподавателей
8. И другое...

## О создателях и поддержке
### Основателями проекта; старшими разработчиками являются:
<a href="https://github.com/i1last">
    <img src="https://avatars.githubusercontent.com/u/90155905?v=4" title="Альберт" width="50" height="50">
</a>
<a href="https://github.com/Semvt">
    <img src="https://avatars.githubusercontent.com/u/93983380?v=4" title="Семен" width="50" height="50">
</a>

### Средними разработчиками являются:
<a href="https://github.com/Zlik12">
    <img src="https://avatars.githubusercontent.com/u/135515776?v=4" title="Ярослав" width="50" height="50">
</a>
<a href="https://github.com/GAY-SLAVE">
    <img src="https://avatars.githubusercontent.com/u/134802217?v=4" title="Николай" width="50" height="50">
</a>
<a href="https://github.com/andrix7777777">
    <img src="https://avatars.githubusercontent.com/u/71929141?v=4" title="Андрей" width="50" height="50">
</a>


## 🗂️ Файловая структура
```
.
├── app
│   ├── assets  # js, scss (на основе БЭМ)
│   │   ├── components
│   │   ├── general
│   │   └── important
│   ├── database  # База данных
│   │   ├── images
│   │   └── tables
│   ├── pages  # Страницы в nunjucks разметке
│   │   ├── index.njk
│   │   └── ...
│   └── templates  # Nunjucks шаблоны для страниц
│       ├── components
│       ├── svg
│       └── base-layout.njk
├── docs  # Готовый сайт
├── gulpfile.js
├── package.json
├── .gitignore
├── _pacifier  # Файл-пустышка
└── README.md
```


## 🤝 Сборка сайта
### Клонирование репозитория
```sh
$ git clone https://github.com/i1last/i1last.github.io.git
$ cd i1last.github.io
$ yarn install
```
### Доступные команды
```sh
$ yarn run watch  # собирает проект и запускает browsersync
$ yarn run build  # собирает проект
$ yarn run test  # данный таск используется для отладки и все время меняется (см. gulpfile.js)
```


## 📃 License

The project is licensed under the [GNU GPLv3](https://github.com/i1last/i1last.github.io/blob/main/LICENSE) License and is maintained by [i1last](https://github.com/i1last).
