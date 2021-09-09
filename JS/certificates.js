const parseDate = date => {
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December'];
    return `${months[date.getMonth()]}, ${date.getFullYear()}`
}

const showCertificate = certificate => {
    const nameNode = document.querySelector('#certificate-name');
    const thumbnailNode = document.querySelector('#certificate-thumb');
    const detailsNode = document.querySelector('#certificate-details');
    const linksNode = document.querySelector('#certificate-links');

    nameNode.textContent = certificate.title;
    thumbnailNode.src = certificate.thumbnail;
    thumbnailNode.alt = certificate.title;

    detailsNode.innerHTML = `
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="font-weight-bold">ID: </span>${certificate.id}</li>
            <li class="list-group-item"><span class="font-weight-bold">Provider: </span>${certificate.provider}</li>
            <li class="list-group-item"><span class="font-weight-bold">Date: </span>${parseDate(new Date(certificate.date))}</li>
        </ul>
    `

    linksNode.innerHTML = `
        <a href="${certificate.link}" download target="_blank" class="btn btn-danger">Download PDF</a>
        ${certificate.url? `<a href="${certificate.url}" target="_blank" class="btn btn-warning">View at ${certificate.provider}</a>`: ''}
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    `

    $('#certificateModal').modal('show')
}

const topCertificates = [
    {
        title: 'Full Stack Web Developer Nanodegree',
        provider: 'Udacity',
        thumbnail: 'certificates/full-stack-nanodegree-udacity/full-stack-nanodegree-udacity-1.jpg',
        link: 'certificates/full-stack-nanodegree-udacity/full-stack-nanodegree-udacity.pdf',
        id: '6GSPMVJJ',
        url: 'https://confirm.udacity.com/6GSPMVJJ',
        date: new Date(2019, 11)
    },
    {
        title: 'Android Development Track Completion',
        provider: 'Million Arab Coders',
        thumbnail: 'certificates/android-completion-mac/android-completion-mac-1.jpg',
        link: 'certificates/android-completion-mac/android-completion-mac.pdf',
        id: 'PHJNXGAR',
        date: new Date(2019, 8)
    },
    {
        title: 'Python for Data Science and AI',
        provider: 'IBM & Coursera',
        thumbnail: 'certificates/python-data-science-ibm/python-data-science-ibm-1.jpg',
        link: 'certificates/python-data-science-ibm/python-data-science-ibm.pdf',
        id: 'U3M4BHJZR62Z',
        url: 'https://www.coursera.org/verify/U3M4BHJZR62Z',
        date: new Date(2020, 6)
    }
]

let allCertificates = [
    {
        title: 'Full Stack Web Developer Nanodegree',
        provider: 'Udacity',
        thumbnail: 'certificates/full-stack-nanodegree-udacity/full-stack-nanodegree-udacity-1.jpg',
        link: 'certificates/full-stack-nanodegree-udacity/full-stack-nanodegree-udacity.pdf',
        id: '6GSPMVJJ',
        url: 'https://confirm.udacity.com/6GSPMVJJ',
        date: new Date(2019, 11)
    },
    {
        title: 'Android Development Track Completion',
        provider: 'Million Arab Coders',
        thumbnail: 'certificates/android-completion-mac/android-completion-mac-1.jpg',
        link: 'certificates/android-completion-mac/android-completion-mac.pdf',
        id: 'PHJNXGAR',
        date: new Date(2019, 8)
    },
    {
        title: 'Python for Data Science and AI',
        provider: 'IBM & Coursera',
        thumbnail: 'certificates/python-data-science-ibm/python-data-science-ibm-1.jpg',
        link: 'certificates/python-data-science-ibm/python-data-science-ibm.pdf',
        id: 'U3M4BHJZR62Z',
        url: 'https://www.coursera.org/verify/U3M4BHJZR62Z',
        date: new Date(2020, 6)
    },
    {
        title: 'Android Development Track Participation',
        provider: 'Million Arab Coders',
        thumbnail: 'certificates/android-participation-mac/android-participation-mac-1.jpg',
        link: 'certificates/android-participation-mac/android-participation-mac.pdf',
        id: '2EH4VFRN',
        date: new Date(2019, 7)
    },
    {
        title: 'Data Analysis Track Participation',
        provider: 'Million Arab Coders',
        thumbnail: 'certificates/data-analysis-participation-mac/data-analysis-participation-mac-1.jpg',
        link: 'certificates/data-analysis-participation-mac/data-analysis-participation-mac.pdf',
        id: 'AYXPZ53Q',
        date: new Date(2020, 0)
    },
    {
        title: 'Front-End Development Track Completion',
        provider: 'Million Arab Coders',
        thumbnail: 'certificates/front-end-completion-mac/front-end-completion-mac-1.jpg',
        link: 'certificates/front-end-completion-mac/front-end-completion-mac.pdf',
        id: 'DS7A9V3E',
        date: new Date(2019, 8)
    },
    {
        title: 'Front-End Development Track Participation',
        provider: 'Million Arab Coders',
        thumbnail: 'certificates/front-end-participation-mac/front-end-participation-mac-1.jpg',
        link: 'certificates/front-end-participation-mac/front-end-participation-mac.pdf',
        id: 'KSVFP9UJ',
        date: new Date(2019, 8)
    },
    {
        title: 'Full Stack Development Track Completion',
        provider: 'Million Arab Coders',
        thumbnail: 'certificates/full-stack-completion-mac/full-stack-completion-mac-1.jpg',
        link: 'certificates/full-stack-completion-mac/full-stack-completion-mac.pdf',
        id: 'VRPQRKAL',
        date: new Date(2019, 7)
    },
    {
        title: 'Full Stack Development Track Participation',
        provider: 'Million Arab Coders',
        thumbnail: 'certificates/full-stack-participation-mac/full-stack-participation-mac-1.jpg',
        link: 'certificates/full-stack-participation-mac/full-stack-participation-mac.pdf',
        id: 'XD2SRJ5D',
        date: new Date(2019, 7)
    },
    {
        title: 'Connect - Intro to Programming Nanodegree',
        provider: 'Udacity',
        thumbnail: 'certificates/intro-programming-nanodegree-udacity/intro-programming-nanodegree-udacity-1.jpg',
        link: 'certificates/intro-programming-nanodegree-udacity/intro-programming-nanodegree-udacity.pdf',
        id: 'GRG2QTP',
        url: 'https://confirm.udacity.com/GRG2QTP',
        date: new Date(2019, 6)
    },
    {
        title: 'Advanced Web Development Nanodegree',
        provider: 'Udacity',
        thumbnail: 'certificates/advanced-web-nanodegree/advanced-web-nanodegree-1.jpg',
        link: 'certificates/advanced-web-nanodegree/advanced-web-nanodegree.pdf',
        id: 'RCPGJDGL',
        url: 'https://confirm.udacity.com/RCPGJDGL',
        date: new Date(2020, 7)
    }
]

// Shuffle Certificates
allCertificates.sort(() => Math.random() - 0.5);

topCertificatesNode = document.querySelector('#top-certificates-list');
certificateSlider = document.querySelector('#certificate-slider');

if (topCertificatesNode) {
    html = '';
    for (certificate of topCertificates) {
        html += `
        <div class="col-sm-6 col-xl-4" data-aos="zoom-in-up" data-aos-offset="300">
            <div class="card mb-4 scale-on-hover" onclick='showCertificate(${JSON.stringify(certificate)});'>
                <img class="card-img-top" src="${certificate.thumbnail}" alt="${certificate.title}">
                <div class="card-body">
                    <h5 class="card-title">${certificate.title}</h5>
                    <p class="card-text">This Certificate was issued by ${certificate.provider} in ${parseDate(certificate.date)}.</p>
                    <p class="btn btn-outline-secondary btn-sm">Details</p>
                </div>
            </div>
        </div>
        `
    }
    topCertificatesNode.innerHTML = html
}

if (certificateSlider) {
    const indicators = certificateSlider.querySelector('.carousel-indicators');
    const listbox = certificateSlider.querySelector('.carousel-inner');
    const certificates = document.querySelector('#certificates')
    for (let i = 0; i < allCertificates.length; i++) {
        let activeClass = i == 0? 'active' : ''
        indicators.insertAdjacentHTML('beforeend', `<li data-target="#certificate-slider" data-slide-to="${i}" class="${activeClass}"></li>`)
        listbox.insertAdjacentHTML('beforeend', `
        <div class="carousel-item ${activeClass} p-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-5 col-sm-4">
                    <img src="${allCertificates[i].thumbnail}" class="w-100 thumbnail">
                </div>
                <div class="col-md-7 col-sm-8">
                    <h2>${allCertificates[i].title}</h2>
                    <p>Issued by ${allCertificates[i].provider} in ${parseDate(allCertificates[i].date)}.</p>
                    ${allCertificates[i].url ? `<a href="${allCertificates[i].url}" target="_blank" class="btn btn-secondary">See at ${allCertificates[i].provider}</a>` : ''}
                </div>
            </div>
        </div>
        `)
        certificates.insertAdjacentHTML('beforeend', `
        <div class="col-md-6 col-xl-4">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-4 col-md-12 d-flex align-items-center">
                        <img src="${allCertificates[i].thumbnail}" class="card-img" alt="${allCertificates[i].title}">
                    </div>
                    <div class="col-8 col-md-12">
                        <div class="card-body">
                            <h5 class="card-title">${allCertificates[i].title}</h5>
                            <p class="card-text">Issued by ${allCertificates[i].provider} in ${parseDate(allCertificates[i].date)}.</p>
                            <button onclick='showCertificate(${JSON.stringify(allCertificates[i])})' class="btn btn-outline-secondary btn-sm">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}

document.write(`
<div class="modal fade" id="certificateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="certificate-name">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div>
                    <img id="certificate-thumb" class="w-100">
                </div>
                <div id="certificate-details"></div>
            </div>
            <div class="modal-footer" id="certificate-links"></div>
        </div>
    </div>
</div>
`)
$('#certificateModal').modal('hide');