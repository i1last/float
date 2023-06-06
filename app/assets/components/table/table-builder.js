//////////////////////////////////////////////////
//// Import this file before others table*.js ////
//////////////////////////////////////////////////
const classes = {
    timetable: [
        ['table__head'],
        ['table__data'],
        ['table__data', 'table__data--center', 'table__data--no-wrap'],
        ['table__data', 'table__data--center', 'table__data--no-wrap'],
        ['table__data']
    ],
    definitions: [
        ['table__head'],
        ['table__data'],
        ['table__data', 'table__data--long-width'],
        ['table__data', 'table__data--short-width'],
        ['table__data', 'table__data--center']
    ]
};

function createTable(tableRequest) {
    let tableParams;
    switch (tableRequest) {
        case 'timetable':
            let dayRequest = document.querySelector('.day-selector').value;
            const gradeRequest = document.querySelector('.grade-selector').value;
            const currentDay = (new Date()).toLocaleString('en-US', { weekday: 'long' }).toLowerCase();

            if (dayRequest == 'current') {
                dayRequest = (currentDay != 'sunday') ? currentDay : 'monday';
            }

            tableParams = {
                headerPath: 'timetables/header.json',
                tablePath: `timetables/${gradeRequest}/timetable.json`,
                section: dayRequest,
                classes: classes.timetable,
                grade: gradeRequest
            };
            break;
        case 'definitions':
            const sectionRequest = document.querySelector('.section-selector').value;

            tableParams = {
                headerPath: 'definitions/header.json',
                tablePath: `definitions/definitions.json`,
                section: sectionRequest,
                classes: classes.definitions,
                grade: gradeRequest
            };
            break;
    }

    let jsonTable;
    let jsonHeader;
    fetch(`/database/tables/${tableParams.tablePath}`).then((res) => res.json()).then((json) => {
        jsonTable = json;
        fetch(`/database/tables/${tableParams.headerPath}`).then((res) => res.json()).then((json) => {
            jsonHeader = json;
            document.querySelector('.js-table-container').innerHTML = (
                buildTable(jsonTable, jsonHeader, tableParams.section, tableParams.classes).outerHTML
            );
        });
    });
}

function buildTable(jsonTable, jsonHeader, section, classes) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.classList.add('table');
    table.appendChild(thead);
    table.appendChild(tbody);

    const columnOrderKey = Object.keys(jsonHeader);
    const columnOrderValue = columnOrderKey.map(x => jsonHeader[x]);

    for (const head of columnOrderValue) {
        let th = document.createElement('th');
        th.classList.add('table__head');
        th.innerText = head;
        thead.appendChild(th);
    }

    let iRow = 0;
    for (const row of jsonTable[section][1]) {
        let tr = document.createElement('tr');
        tr.classList.add('table__row');
        switch (iRow) {
            case 0:
                tr.classList.add('table__row--border-bottom');
                break;
            default:
                tr.classList.add('table__row--border-top');
        }

        let iData = 0;
        for (const data of columnOrderKey) {
            let td = document.createElement('td');

            if (classes[iData] != '') td.classList.add(...classes[iData]);
            switch (iData) {
                case 0:
                    break;
                case 1:
                    td.classList.add('table__data--border-right');
                    break;
                default:
                    td.classList.add('table__data--border-left');
            }

            td.innerText = row[data];
            tr.appendChild(td);
            iData++;
        }

        tbody.appendChild(tr);
        iRow++;
    }
    return table;
}
