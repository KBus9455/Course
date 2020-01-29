let x = 0; //INDEKS AKTYWNEGO ELEMENTU Z TABLICY
const colorImg = document.querySelector('.color');
const grayImg = document.querySelector('.gray');
const Name = document.querySelector('.team h1');
const Profession = document.querySelector('.team h2');

const colorImgTab = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImgTab = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const Names = ['Anna Baugart', 'Filip Jakubiak', 'Paweł Feliksiak'];
const Professions = ['Front End Developer', 'Project Manager', 'Senior Web Developer'];

function change() {
    x++;
    if (x == 3) {
        x = 0;
    }

    colorImg.src = colorImgTab[x];
    grayImg.src = grayImgTab[x];
    Name.textContent = Names[x];
    Profession.textContent = Professions[x];
}

setInterval(change, 4000)