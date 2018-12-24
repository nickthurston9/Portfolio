$('h1').slideDown(2000);

$("#ExpBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".experience").offset().top},
        'slow');
});

$("#SkillsBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".skills").offset().top},
        'slow');
});

$("#CertBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".certifications").offset().top},
        'slow');
});