const files = {
    etp: [
        {
            name: 'ETPSuite_PH_98A',
            url: 'https://mapcoid-my.sharepoint.com/personal/oliver_panjaitan_map_co_id/_layouts/15/download.aspx?UniqueId=31e1cd1d%2D6d8e%2D4758%2D9a2e%2Ddc7fb00e76a7'
        },
        {
            name: 'ETPSuite_ID_98A',
            url: 'https://mapcoid-my.sharepoint.com/personal/oliver_panjaitan_map_co_id/_layouts/15/download.aspx?UniqueId=c86a905e%2Dd7fb%2D4723%2D954d%2D0c851a86582a'
        }
    ],
    store: [
        {
            name: 'Tomcat7',
            url: 'https://example.com/path/to/StoreSuite_A1.zip'
        },
        {
            name: '7Zip',
            url: 'https://example.com/path/to/StoreSuite_B2.zip'
        },
        {
            name: 'SQL_2022',
            url: 'https://example.com/path/to/StoreSuite_C3.zip'
        }
    ],
    databaseindo: [
        {
            name: 'DatabaseSuite_X1.zip',
            url: 'https://example.com/path/to/DatabaseSuite_X1.zip'
        },
        {
            name: 'DatabaseSuite_Y2.zip',
            url: 'https://example.com/path/to/DatabaseSuite_Y2.zip'
        },
        {
            name: 'DatabaseSuite_Z3.zip',
            url: 'https://example.com/path/to/DatabaseSuite_Z3.zip'
        }
    ],
    databaseph: [
        {
            name: 'DatabaseSuite_X1.zip',
            url: 'https://example.com/path/to/DatabaseSuite_X1.zip'
        },
        {
            name: 'DatabaseSuite_Y2.zip',
            url: 'https://example.com/path/to/DatabaseSuite_Y2.zip'
        },
        {
            name: 'DatabaseSuite_Z3.zip',
            url: 'https://example.com/path/to/DatabaseSuite_Z3.zip'
        }
    ],
    databasevn: [
        {
            name: 'DatabaseSuite_X1.zip',
            url: 'https://example.com/path/to/DatabaseSuite_X1.zip'
        },
        {
            name: 'DatabaseSuite_Y2.zip',
            url: 'https://example.com/path/to/DatabaseSuite_Y2.zip'
        },
        {
            name: 'DatabaseSuite_Z3.zip',
            url: 'https://example.com/path/to/DatabaseSuite_Z3.zip'
        }
    ],
    howto: [
        {
            name: 'HowTo_Setup.pdf',
            url: 'https://example.com/path/to/HowTo_Setup.pdf'
        },
        {
            name: 'HowTo_Install.pdf',
            url: 'https://example.com/path/to/HowTo_Install.pdf'
        }
    ]
};

function searchFiles() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const fileList = document.getElementById('file-list');
    const rows = fileList.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const fileCell = rows[i].getElementsByTagName('td')[0];
        if (fileCell) {
            const fileName = fileCell.textContent || fileCell.innerText;
            if (fileName.toUpperCase().indexOf(input) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
}

function loadFiles(category, button) {
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = '';
    files[category].forEach(file => {
        const row = document.createElement('tr');
        const fileCell = document.createElement('td');
        const actionCell = document.createElement('td');
        const downloadLink = document.createElement('a');

        fileCell.textContent = file.name;
        downloadLink.textContent = 'DOWNLOAD';
        downloadLink.href = file.url;
        downloadLink.className = 'download-link action'; // Added 'action' class here
        downloadLink.download = file.name;
        downloadLink.onclick = () => {
            displayMessage(`Start downloading ${file.name}`);
        };

        actionCell.appendChild(downloadLink);
        row.appendChild(fileCell);
        row.appendChild(actionCell);
        fileList.appendChild(row);
    });

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function displayMessage(msg) {
    const message = document.getElementById('message');
    message.textContent = msg;
    setTimeout(() => {
        message.textContent = '';
    }, 5000);
}

// Load default category
loadFiles('etp', document.querySelector('.source-etp'));
