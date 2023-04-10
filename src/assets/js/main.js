// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    // Handle Scroll-----------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------
    const handleScroll = () => {
        const header_sc = document.getElementById('header');
        if (document.documentElement.scrollTop >= 50) {
            header_sc.classList.add('header_sticky');
        } else {
            header_sc.classList.remove('header_sticky');
        }
    }
    window.addEventListener("scroll", handleScroll);

    // Contact Tabs------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            tab.classList.add('active');
            const index = Array.from(tabs).indexOf(tab);
            tabContents[index].classList.add('active');
        });
    });

    // Change heading on click--------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------
    let project = document.getElementById('project-tab');
    let training = document.getElementById('training-tab');
    let other = document.getElementById('other-tab');

    const heading = document.getElementById('contact-heading');

    project.addEventListener('click', function () {
        heading.innerHTML = "Have a Project? We Would Love to Help";
    });
    training.addEventListener('click', function () {
        heading.innerHTML = "Achieve Your Goals with Expert Coaching";
    });
    other.addEventListener('click', function () {
        heading.innerHTML = "Reach Out to Us";
    });
});




    // document.addEventListener('DOMContentLoaded', function() {
    //     let project = document.getElementById('project-tab');
    //     let training = document.getElementById('training-tab');
    //     let other = document.getElementById('other-tab');

    // //     const pj_content = document.getElementById('project');
    // //     const tr_content = document.getElementById('training');
    // //     const oth_content = document.getElementById('other');

    //     const heading = document.getElementById('contact-heading');

    // //     const tabs = document.querySelector('.tab-btn');


    //     project.addEventListener('click', function(){
    // //         tabs.classList.remove('active');
    // //         this.classList.add('active');
    //         heading.innerHTML = "Have a Project? We Would Love to Help";
    // //         if(pj_content.style.display === 'none'){
    // //             pj_content.style.display = 'block';
    // //             tr_content.style.display = 'none';
    // //             oth_content.style.display = 'none';
    // //         }
    //     });
    //     training.addEventListener('click', function(){
    // //         tabs.classList.remove('active');
    // //         this.classList.add('active');
    //         heading.innerHTML = "Achieve Your Goals with Expert Coaching";
    // //         if(tr_content.style.display === 'none'){
    // //             pj_content.style.display = 'none';
    // //             tr_content.style.display = 'block';
    // //             oth_content.style.display = 'none';
    // //         }
    //     });
    //     other.addEventListener('click', function(){
    // //         tabs.classList.remove('active');
    // //         this.classList.add('active');
    //         heading.innerHTML = "Reach Out to Us";
    // //         if(oth_content.style.display === 'none'){
    // //             oth_content.style.display = 'block';
    // //             pj_content.style.display = 'none';
    // //             tr_content.style.display = 'none';
    // //         }
    //     });
    // });