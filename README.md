<h1 align="center"><img src="./.github/assets/logo-text.svg"></h1>
<p align="center">
  <i align="center">
    Сайт ориентирован на ГБОУ СОШ № 501 г. Санкт-Петербург.
  </i>
</p>


<h2>👀 О проекте</h2>
<p>
  .float – это сайт, разрабатываемый учениками ГБОУ СОШ № 501 (см. выше)
  для получения реального опыта, а также для проектной
  деятельности в этой школе.
</p>

<h2>🙋‍♂️ О создателях и поддержке</h2>
<h3>🧙‍♂️ Куратор проекта</h3>
<div>
  <a href="http://www.kirov.spb.ru/sc/501/index.php?option=com_contact&task=view&contact_id=7&Itemid=30">
    <img src="./.github/assets/supervisor-yn.jpg" title="Нилова Юлия Николаевна" height="150">
  </a>
  <p>
    <a href="http://www.kirov.spb.ru/sc/501/index.php?option=com_contact&task=view&contact_id=7&Itemid=30">
      Нилова Юлия Николаевна
    </a>
  </p>
</div>
<div>
  <a href="http://www.kirov.spb.ru/sc/501/index.php?option=com_contact&task=view&contact_id=60&Itemid=31">
    <img src="./.github/assets/supervisor-ea.jpg" title="Орлова Екатерина Алексеевна" height="150">
  </a>
  <p>
    <a href="http://www.kirov.spb.ru/sc/501/index.php?option=com_contact&task=view&contact_id=60&Itemid=31">
      Орлова Екатерина Алексеевна
    </a>
  </p>
</div>

<h3>🧑‍🦽 Разработчики</h3>
<div>
  <a href="https://github.com/i1last">
    <img src="https://avatars.githubusercontent.com/u/90155905?v=4" title="Альберт" width="100" height="100">
  </a>
  <p>Рахметов Альберт Рафаилович</p>
</div>
<div>
  <a href="https://github.com/Semvt">
    <img src="https://avatars.githubusercontent.com/u/93983380?v=4" title="Семен" width="100" height="100">
  </a>
  <p>Вторушин Семён Андреевич</p>
</div>
<div>
  <a href="https://github.com/ktoyatellmepls">
    <img src="https://avatars.githubusercontent.com/u/166416596?v=4" title="Юлия" width="100" height="100">
  </a>
  <p>Санкевич Юлия Валерьевна</p>
</div>
<div>
  <a href="https://github.com/GAY-SLAVE">
    <img src="https://avatars.githubusercontent.com/u/134802217?v=4" title="Николай" width="100" height="100">
  </a>
  <p>Зубарев Николай Александрович</p>
</div>

<h2>📂 Файловая структура</h2>
<h3>Расположение файлов</h3>

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
└── README.md
```

<h3>Принцип расположения файлов</h3>
<h4>В качестве первого примера используем navigate-menu: <code>app/assets/components/navigate-menu/</code></h4>

```
navigate-menu/
├── __go-back.scss
├── __item.scss
├── __link.scss
├── __list.scss
├── navigate-menu-parser.js
└── navigate-menu.scss
```
<p>
  Так как сайт использует методологию БЭМ, структура файлов
  пытается следовать методологии. Каждый блок выносится в
  отдельную директорию, а каждый элемент выносится в отдельный
  файл, лежащий в директории своего блока. Такой способ хранения
  файлов улучшает читабельность каждого элемента, соответственно
  дебажить его становится проще.
</p>
<p>
  С модификаторами ситуация несколько другая. Если модификатор
  содержит маленькое количество свойств и (или) этих модификаторов
  мало, то они хранятся в файле своего блока или элемента
  (<a href="./app/assets/components/navigate-menu/navigate-menu.scss">как в данном случае</a>).
  <br>
  [<code>.block--mod &#129042; block.scss</code>;
  <code>.element--mod &#129042; __element.scss</code>].
</p>

<h4>Второй пример. Рассмотрим более сложную структуру</h4>

```
slide/
├── __description/
│   ├── __description.scss
│   ├── --fz.scss
│   └── --maw.scss
├── __image/
│   ├── __image.scss
│   └── --wh.scss
├── ...
├── __content.scss
├── __download.scss
└── slide.scss
```
<p>
  Данная ситуация сложнее предыдущей. Здесь следует выносить
  каждый модификатор в отдельный файл, и, чтобы они не
  перемешивались между собой, их нужно вносить в отдельную
  директорию своего элемента.
</p>
<p>
  Название директории данного элемента, как и название
  директории блока, соответствует названию этого элемента.
</p>
<p>
  Также стоит отметить, что название модификаторов использует
  сокращения EMMET. Так, например, модификатор размера шрифта
  (<code>font-size</code>) будет называется <code>...--fz...</code>.
</p>

<h2>⛏️ Сборка сайта</h2>
<h3>Клонирование репозитория</h3>

```sh
$ git clone https://github.com/i1last/float.git
$ cd float
$ yarn install
```

<h3>Доступные команды</h3>

```sh
$ yarn run watch  # собирает и открывает проект в режиме dev
$ yarn run build  # собирает проект в режиме product
$ yarn run test  # данный таск используется для отладки (см. gulpfile.js)
```
<h3>Работа с gulpfile.js</h3>
<p>
  <code>gulpfile.js</code> содержит в себе следующие функции:
  svgCompile, rastrCompile, scssCompile, jsCompile,
  njkCompile, filesTransfer
</p>
<details><summary>Подробнее о каждой функции</summary>
    <ol>
    <li><code>svgCompile</code> &#8211; берет все *.svg из <code>app/database/pages/**</code>, сжимает, и возвращает в <code>docs/database/pages/</code> (директории-родители сохраняются).</li>
    <li><code>rastrCompile</code> &#8211; берет все файлы (*.*) из <code>app/database/images/**</code>, сжимает, и возвращает в <code>docs/database/images/</code> (директории-родители сохраняются).</li>
    <li><code>scssCompile</code> &#8211; в первую очередь берет все *.scss из <code>app/assets/important/*</code>, а после остальные из <code>app/assets/**</code>, компилирует и возвращает файлом <code>main.min.css</code> вместе с sourcemap в <code>docs/assets/css/</code></li>
    <li><code>jsCompile</code> &#8211; берет все *.js из <code>app/assets/**</code>, преобразовывает (без конкатенации в один файл) и возвращает их в <code>docs/assets/js/</code> (директории-родители НЕ сохраняются). Каждый файл возвращается вместе со своим sourcemap.</li>
    <li><code>njkCompile</code> &#8211; берет все *.njk из <code>app/pages/**</code>, преобразовывает и возвращает их в <code>docs/</code> (директории-родители сохраняются).</li>
    <li><code>filesTransfer</code> &#8211; берет все файлы из <code>app/pages/**</code> и <code>app/database*/**</code> (кроме *.njk, *.js и *.scss) и возвращает их в <code>docs/</code> (директории-родители сохраняются).</li>
    </ol>
</details>
<p>
  Лайв-просмотр сайта на локальной машине осуществляется с
  помощью browsersync. После каждой функции страница в
  браузере будет обновлена.
</p>
<p>
  В режиме <code>yarn run watch</code> gulp.watch отслеживает
  изменения файлов в режиме реального времени. При изменении
  файла gulp.watch запускает функцию, которая обрабатывает
  именно тот тип файлов, который был изменен (т.е. при изменении
  .scss файла сайт не будет билдиться с нуля, будут обработаны
  лишь *.scss файлы). Однако будьте внимательны, gulp.watch
  не очищает папку <code>docs/</code>, поэтому со временем там
  могут собраться файлы, который будут нарушать работу сайта.
  Рекомендуется время от времени удалять папку <code>docs/</code>
  и заново запускать билд сайта.

</p>
<h3>📃 License</h3>
<p>
  The project is licensed under the
  <a href="https://github.com/i1last/i1last.github.io/blob/main/LICENSE">GNU GPLv3</a>
  License and is maintained by
  <a href="https://github.com/i1last">i1last</a>.
</p>
