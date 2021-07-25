function printPage() {
    const mDate = document.querySelector('#printDate');
    const mTite = document.querySelector('#printTitle');
    const mUrl = document.querySelector('#printUrl');
    const mPage = document.querySelector('#printPage');

    mDate.innerHTML = GetDateWithoutTime();
    mTite.innerHTML = document.title;
    mUrl.innerHTML = document.URL;
    mPage.innerHTML = '1/1';

    window.print();
}

function GetDateWithoutTime() {
    var today = new Date();
    var date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    return date;
}
