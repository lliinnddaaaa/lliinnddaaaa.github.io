// Create Twitter object
let Twitter = function (handle, image, bio, site, link, name, region) {
    this.handle = handle; //handle
    this.image = image; //link to profile image
    this.bio = bio; //bio
    this.site = site; //site in bio
    this.link = link; //link to Twitter profile
    this.name = name; //name
    this.region = region; //based on AFSCME conventions: East, Central, South, West
    console.log('Twitter object instantiated');
}

//----- CREATING NEW TWITTERS & ADDING TO LIST -----

let afscme = new Twitter('@afscme',
    'https://pbs.twimg.com/profile_images/984143749319143425/xisHad3e_400x400.jpg',
    'America\'s communities never rest. That\'s why people who work in public service never quit.',
    'afscme.org',
    'https://twitter.com/AFSCME',
    'AFSCME',
    'US');

let dc37 = new Twitter('@DistCouncil37',
    'https://pbs.twimg.com/profile_images/1324874230/62906_141089842603077_131724126872982_225902_3371084_n_400x400.jpg',
    'DC 37 is New York City\'s largest public employee union, representing 125,000 members and 50,000 retirees.',
    'dc37.net',
    'https://twitter.com/DistCouncil37',
    'DC37, AFSCME',
    'East');

let local3299 = new Twitter('@AFSCMELocal3299',
    'https://pbs.twimg.com/profile_images/988563541727703040/5wiVSUDn_400x400.jpg',
    'The University of California\'s Largest Employee Union, representing more than 25,000 Service and Patient Care Technical workers.',
    'afscme3299.org',
    'https://twitter.com/DistCouncil37',
    'AFSCME Local 3299',
    'West');

let council61 = new Twitter('@afscme_c61',
    'https://pbs.twimg.com/profile_images/922938964415090688/1EtJZgad_400x400.jpg',
    'AFSCME Council 61 represents state, county, city, school, and private sector employees across IA, MO, & KS.',
    'afscmecouncil61.org',
    'https://twitter.com/afscme_c61',
    'AFSCME Council 61',
    'Central');

let hope123 = new Twitter('@HOPELocal123',
    'https://pbs.twimg.com/profile_images/884568754381770752/Le5vLCSh_400x400.jpg',
    'The official page for the Houston Organization of Public Employees Local 123. We represent the 13,000 City of Houston Municipal Employees.',
    'hopetx.org',
    'https://twitter.com/HOPELocal123',
    'HOPE Local 123',
    'South');

let wfsec28 = new Twitter('@wfsec28',
    'https://pbs.twimg.com/profile_images/901181962391437312/gZTPguEb_400x400.jpg',
    'Washington Federation of State Employees, AFSCME Council 28, AFL-CIO | Follow us on FB http://www.facebook.com/wfsec28',
    'WFSE.org',
    'https://twitter.com/wfsec28',
    'AFSCME Council 28 (WFSE)',
    'West');

let council31 = new Twitter('@afscme31',
    'https://pbs.twimg.com/profile_images/1429508306/AFSCME_BlockLogo-1Color_400x400.jpg',
    'AFSCME Council 31 is a leading voice for Illinois working families, and the state\'s largest union of public service workers.',
    'afscme31.org',
    'https://twitter.com/afscme31',
    'AFSCME Council 31',
    'Central');

let csealocal1000 = new Twitter('@CSEALocal1000',
    'https://pbs.twimg.com/profile_images/898254326790934528/i6jOs0DY_400x400.jpg',
    'We are workers who join together in solidarity to have clout at the negotiating table, in the political arena and in our communities.',
    'cseany.org',
    'https://twitter.com/csealocal1000',
    'CSEALocal1000',
    'East');

let twitterList = [];
twitterList.push(afscme, dc37, local3299, council61, hope123, wfsec28, council31, csealocal1000)

$(document).ready(function () {

    //----- RENDERING TWITTERS -----

    let count = 1; //keep track of item number in list
    twitterList.forEach(t => {
        $('.twitterList').append(`<div id='profile-${count}' class='profile profile-${t.region}'>`)
        $(`#profile-${count}`).append(`<img class='profpic' src='${t.image}'>
        <h2 class='name'>${t.name}</h2>
        <span class='handle'>${t.handle}</span><br>
        <span class='region'><i class="fas fa-map-marker-alt"></i> ${t.region}</span><br>
        <span class='site'><i class="fas fa-link"></i><a href='https://www.${t.site}' target='_blank'> ${t.site}</a></span><br><br>
        <span class='bio'>${t.bio}</span><br></p>
        <p><br><a href='${t.link}' target='_blank' class='link'>TWITTER</a></p>`)
        $('.twitterList').append(`</div>`)
        count++;
    })

    let filters = []

    $('.js-region-button').on('click', function (event) {
        const value = event.target.value

        $(this).toggleClass('filtered')

        if ($(this).hasClass('filtered')) {
            filters.push(value)
        } else {
            filters = filters.filter(f => f !== value)
        }

        $('.profile').addClass("nodisplay").removeClass("displayProfile")

        filters.forEach(filter => {
            $('.profile-' + filter).addClass("displayProfile")
        })
    })

    $('.js-reset-button').on('click', function () {
        $('.profile').addClass('displayProfile')
        $('.js-region-button').removeClass("filtered")
        filters = []
    })



    //----- RENDERING FORM -----

    $('#formTrigger').on('click', function () {
        $('#updatesForm').toggleClass('displayForm')
    })

    $('.exitButton').on('click', function () {
        $('#updatesForm').toggleClass('displayForm')
        $('.thanks').css('display', 'none')
    })

    $('.submit-button').on('click', function () {
        $('.thanks').css('display', 'block')
    })
})