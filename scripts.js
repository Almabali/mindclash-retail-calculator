function updateOutput() {
    var form = document.getElementById("calc");
    var out = form.elements["z"];
    var outKsDiff = form.elements["ksdiff"];
    var ks = parseInt(form.elements["ks"].value);
    var freeCred = parseInt(form.elements["freeCred"].value);

    var a1 = parseInt(form.elements["a1"].value);
    var a2 = parseInt(form.elements["a2"].value);
    var a3 = parseInt(form.elements["a3"].value);

    var c1 = parseInt(form.elements["c1"].value);
    var c2 = parseInt(form.elements["c2"].value);
    var c3 = parseInt(form.elements["c3"].value);

    var ao1 = parseInt(form.elements["ao1"].value);
    var ao2 = parseInt(form.elements["ao2"].value);
    var ao3 = parseInt(form.elements["ao3"].value);
    var ao4 = parseInt(form.elements["ao4"].value);
    var ao5 = parseInt(form.elements["ao5"].value);
    var ao6 = parseInt(form.elements["ao6"].value);

    var a1p = 150;
    var a2p = 60;
    var a3p = 45;

    var c1p = 41.5;
    var c2p = 30;
    var c3p = 15;

    var ao1p = 19;
    var ao2p = 25;
    var ao3p = 5;
    var ao4p = 5;
    var ao5p = 15;
    var ao6p = 3;

    var unchangingpart = c1p*c1 + c2p*c2 + c3p*c3 + ao1p*ao1+ao2p*ao2+ao3p*ao3+ao4p*ao4+ao5p*ao5+ao6p*ao6;
    var priorsum = a1p*a1+ a2p*a2 + a3p*a3 + unchangingpart;

    if (a1 >= 6) { a1p = 135};
    if (a1 >= 12) { a1p = 132};
    if (a2 >= 6) { a2p = 55};
    if (a2 >= 12) { a2p = 53};
    if (a3 >= 6) { a3p = 29};
    if (a3 >= 12) { a3p = 27};

    var postsum = a1p*a1+ a2p*a2 + a3p*a3 + unchangingpart;

    out.value = postsum;
    outKsDiff.value = postsum - ks;
    freeCred.value = priorsum - postsum;
}