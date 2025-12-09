document.addEventListener("DOMContentLoaded", function () {
    function cropToAspectRatio() {
        let blackColor = getComputedStyle(document.body).getPropertyValue('--inner--background__black');

        if (tinycolor(blackColor).isLight()) {
            document.querySelectorAll('.inner--background__black').forEach(el => el.style.color = '#333');
        } else {
            document.querySelectorAll('.inner--background__black').forEach(el => el.style.color = '#fff');
        }
    }
    cropToAspectRatio();

    let topHeaderBoxLogo = document.querySelector('.topHeaderBox--logo');
    let topHeaderBoxNav = document.querySelector('.topHeaderBox--nav');

    if (topHeaderBoxLogo && getComputedStyle(topHeaderBoxLogo).flexDirection === 'column') {
        topHeaderBoxNav.style.textAlign = 'center';
        topHeaderBoxLogo.style.justifyContent = 'center';
    }

    let sectionHeaderRow = document.querySelector('.section--headerRow');
    if (sectionHeaderRow && sectionHeaderRow.classList.contains('flex-column')) {
        sectionHeaderRow.style.textAlign = 'center';
        sectionHeaderRow.style.gap = '30px';
        topHeaderBoxLogo.style.flexDirection = 'column';
    }

    if (document.querySelector('form.nerwForms')) {
        document.querySelectorAll('.benBlock').forEach(el => el.style.display = 'none');
    }

    let sectionFirstContent = document.querySelector('.section--first--content');
    let leftColBlock = document.querySelector('.leftColBlock');

    if (sectionFirstContent && getComputedStyle(sectionFirstContent).flexDirection === 'row-reverse') {
        let margin = getComputedStyle(leftColBlock).marginLeft;
        leftColBlock.style.margin = `0px ${margin} 0px 0px`;
    }

    let rnH = document.getElementById('rnH')?.className;
    let rhI = document.getElementById('rhI')?.className;

    if (rnH === '2') {
        leftColBlock.style.transform = 'none';
        sectionFirstContent.style.marginTop = '50px';
        document.querySelectorAll('.nofs').forEach(el => el.style.display = 'none');
    }

    let slidCommentsItemBox = document.querySelector('.slidComments__item--box');
    if (slidCommentsItemBox && getComputedStyle(slidCommentsItemBox).flexDirection === 'column') {
        slidCommentsItemBox.style.textAlign = 'center';
    }

    let sectionContactFlex = document.querySelector('.section--contact__flex');
    let sectionContactIframe = document.querySelector('.section--contact iframe');

    if (sectionContactFlex && (sectionContactFlex.classList.contains('flex-column') || sectionContactFlex.classList.contains('flex-column-reverse'))) {
        sectionContactFlex.style.gap = '30px';
        if (sectionContactIframe) {
            sectionContactIframe.style.height = rhI;
        }
    }
});
 