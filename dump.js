
// $('.regionButton').on('click', function () {
//     console.log($(this).val())
//     let filterCount = 1;
//     twitterList.forEach(t => {
//         if (t.region !== $(this).val()) {
//             $(`#profile-${filterCount}`).toggleClass('nodisplay')
//         }
//         filterCount++;
//     })
//     $(this).toggleClass('filtered')
// })




// let results = [];
// $(this).toggleClass('filtered')

// if (!clicked.includes($(this).val())) {
//     clicked.push($(this).val())
// }

// clicked.forEach(c => {
//     console.log(clicked)
//     twitterList.forEach(t => {
//         if (t.region === c && !results.includes(c)) {
//             results.push($(this).val())
//         }
//     })
// })

// results.forEach(r => {
//     let filterCount = 1;
//     $(`#profile-${filterCount}`).toggleClass('nodisplay')
//     filterCount++;
// })


$('.regionButton').on('click', function () {
    twitterList.forEach(t => {
        let filterCount = 1;
        $(`#profile-${filterCount}`).css("display: none")
        filterCount++;
    })

    twitterList.forEach(t => {
        if ($(this).val() === 'East') {
            $(`#profile-3`).toggleClass('nodisplay')
            $(`#profile-4`).toggleClass('nodisplay')
            $(`#profile-5`).toggleClass('nodisplay')
        }
        if ($(this).val() === 'West') {
            $(`#profile-2`).toggleClass('nodisplay')
            $(`#profile-4`).toggleClass('nodisplay')
            $(`#profile-5`).toggleClass('nodisplay')
        }
        if ($(this).val() === 'Central') {
            $(`#profile-2`).toggleClass('nodisplay')
            $(`#profile-3`).toggleClass('nodisplay')
            $(`#profile-5`).toggleClass('nodisplay')
        }
        if ($(this).val() === 'South') {
            $(`#profile-2`).toggleClass('nodisplay')
            $(`#profile-3`).toggleClass('nodisplay')
            $(`#profile-4`).toggleClass('nodisplay')
        }
        $(`#profile-1`).toggleClass('nodisplay')

    })
    $(this).toggleClass('filtered')



})


if (value === "Reset") {
    $('.profile').addClass('displayProfile')
    $('.js-region-button').removeClass("filtered")
}



//----- HANDLING FILTERS -----
let filterButtons = ['#eastButton', '#westButton', '#centralButton', '#southButton'];
    // filterButtons.forEach(f => {
    //     filterRegion(f);
    // })

    // function filterRegion(rbutton) {
    //     //only display a region's twitters when region's filter is on
    //     $(rbutton).on('click', function () {
    //         $(this).toggleClass('filtered')

    //         //clear all the Twitter accounts in view
    //         $('.profile').toggleClass("nodisplay")

    //         //only display region's twitters
    //         let count = 1
    //         twitterList.forEach(t => {
    //             if (t.region === $(this).val()) {
    //                 $(`#profile-${count}`).toggleClass("displayProfile")
    //             }
    //             count++;
    //         })

    //         // filterButtons.forEach(f => {
    //         //     if (f !== rbutton) {
    //         //         $(f).prop('disabled', function (i, v) { return !v; });
    //         //     }
    //         // })
    //     })

    // }