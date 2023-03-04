function createTable(json, section, tableDataClasses) {
  let array = Object.keys(json.header);

  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let divContainer = document.createElement('div');
  let divTitle = document.createElement('div');
  let divContent = document.createElement('div');

  divTitle.innerText = json[section][0];

  table.appendChild(thead);
  table.appendChild(tbody);
  divContainer.appendChild(divTitle);
  divContainer.appendChild(divContent);
  divContent.appendChild(table);

  table.classList.add('timetable', 'table');
  divTitle.classList.add('title');
  divContainer.classList.add('table-container');
  divContent.classList.add('table-container__content');
  divContainer.id = section;

  thead.innerHTML = `
  <th class="table__heading">${json.header[array[0]]}</th>
  <th class="table__heading">${json.header[array[1]]}</th>
  <th class="table__heading">${json.header[array[2]]}</th>
  <th class="table__heading">${json.header[array[3]]}</th>
  <th class="table__heading">${json.header[array[4]]}</th>`;

  for (const item of json[section][1]) {
    let tr = document.createElement('tr');

    tr.innerHTML += `
    <td class="${tableDataClasses[0]}">${item[array[0]]}</td>
    <td class="${tableDataClasses[1]}">${item[array[1]]}</td>
    <td class="${tableDataClasses[2]}">${item[array[2]]}</td>
    <td class="${tableDataClasses[3]}">${item[array[3]]}</td>
    <td class="${tableDataClasses[4]}">${item[array[4]]}</td>`;

    tbody.appendChild(tr);
  }

  document.querySelector('.tables').appendChild(divContainer);
}

function generateTables(json, sections, tableDataClasses) {
  let i = 0;
  const sectionsLength = sections.length;

  for (const section of sections) {
    createTable(json, section, tableDataClasses);
    i++;
    if (sectionsLength > 1 && i != sectionsLength) {
      document
        .querySelector('.tables')
        .appendChild(document.createElement('hr'));
    }
  }
}

const tableRequest = document.currentScript.getAttribute('table');
const sectionRequest = document.currentScript.getAttribute('section');

fetch(`/assets/data/${tableRequest}.json`)
  .then((res) => res.json())
  .then((json) => {
    let sections;

    if (sectionRequest == 'all') {
      sections = Object.keys(json).slice(1);
    } else if (sectionRequest == 'current') {
      const currentDayOfWeek = new Date().getDay();
      console.log(currentDayOfWeek)
      const currentHour = new Date().getHours();
      const days = [
        "monday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
      ];

      if (currentHour >= 17) {
        sections = [days[currentDayOfWeek + 1]];
      } else {
        sections = [days[currentDayOfWeek]];
      }
    } else {
      if (json[sectionRequest] === undefined) {
        console.error('sectionRequest Error: section is undefined');
      } else {
        sections = [sectionRequest];
      }
    }

    let tableDataClasses;
    switch (tableRequest) {
      case 'timetable':
        tableDataClasses = ['table__heading', '', 'table__data-center', 'table__data-center', '']
        break;
      case 'definitions':
        tableDataClasses = ['table__heading', '', '', '', 'table__data-center']
        break;
    }

    generateTables(json, sections, tableDataClasses);
  });
