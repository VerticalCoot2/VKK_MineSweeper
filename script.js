var akLogika = [];
let o, s, h, diff;
let osszAkna = 0; //display
let maxAkna = 0; //real akna count;
let aknaDisplay;

let win = false;


document.addEventListener("DOMContentLoaded", function ()
{
    aknaDisplay = document.getElementById("cunciMokus");
    aknaDisplay.innerHTML = "Aknák: &#10005";
    aknaDisplay.addEventListener("click", function () { alert("Ne nyomkodj!!");});

    document.getElementById("general").addEventListener("click", function ()
    {
        akLogika = [];
        o = document.getElementById("oszlop").value;//😘
        s = document.getElementById("sor").value;//😘
        h = document.getElementById("PATYAAAA");//😘
        diff = document.getElementById("dif").value;

        //console.log(s + " " + o + " " + h);
        akGeneral(s, o, h, diff);
        aknaDisplay.innerHTML = "Aknák: " + osszAkna;
    });

    document.getElementById("reveal").addEventListener("click", reveal);
});




function akGeneral(sor, oszlop, hova, diff)
{

    //let t = document.getElementById("PATYAAAA");
    hova.innerHTML = "";
    for (let i = 0; i < sor; i++)
    {
        let sorElem = document.createElement("div");
        sorElem.classList.add("sor");
        akLogika.push([]);
        for (let j = 0; j < oszlop; j++)
        {
            let oszlopElem = document.createElement("div");
            oszlopElem.classList.add("oszlop");
            oszlopElem.setAttribute("id", i + "-" + j);
            //oszlopElem.classList.add(i + j);
            oszlopElem.dataset.x = i;
            oszlopElem.dataset.y = j;
            oszlopElem.addEventListener("contextmenu", function (event)
            {
                event.preventDefault();
                return false;
            });//az nem ér
            oszlopElem.addEventListener("mousedown", csigabiga);
            sorElem.appendChild(oszlopElem);
            akLogika[i].push(0);
        }
        hova.appendChild(sorElem);
    }
    logika(akLogika, diff) // százalék!!
}

function nulaaaaaa(a, x, y)
{
    if ((x > 1 || x < s-1) && (y > 1 || y < o-1))
    {
        felcsap(document.getElementById((x - 1) + "-" + (y - 1)));
        felcsap(document.getElementById((x + 0) + "-" + (y - 1)));
        felcsap(document.getElementById((x + 1) + "-" + (y - 1)));

        felcsap(document.getElementById((x - 1) + "-" + y));
        felcsap(document.getElementById((x + 1) + "-" + y));

        felcsap(document.getElementById((x - 1) + "-" + (y + 1)));
        felcsap(document.getElementById((x + 0) + "-" + (y + 1)));
        felcsap(document.getElementById((x + 1) + "-" + (y + 1)));
        /*for(let i = x -1 > 0 ? x-1 : 0; i < akLogika-length - 1 > x ? x +2 : akLogika.length - 1; i++)
        {
            for(let j = y - 1 >= 0 ? y-1 : 0; j < akLogika[0].length - 1 > y ? y + 2 : akLogika[0].length - 1; j++)
            {
                felcsap(document.getElementById((i) + "-" + (j)));
            }
        }*/
    }
    else
    {
        alert("Studium general");
    }
}

function felcsap(a)
{   
    console.log(a);
    if(!(a.innerHTML == "&#128681" || a.innerHTML == "🚩")) 
    {
        a.style.color = "white";
        a.style.border = "1px, solid white";
        a.innerHTML = akLogika[a.dataset.x][a.dataset.y];
        if (akLogika[a.dataset.x][a.dataset.y] == "💣")
        {
            a.style.backgroundColor = "red";
            reveal(win);
            alert("nop!");
        } else if (akLogika[a.dataset.x][a.dataset.y] != 0)
        {
            a.style.backgroundColor = "gray";
        }
        else
        {
            a.style.backgroundColor = "darkgray";
            nulaaaaaa(a, a.dataset.x, a.dataset.y);
        }
    }
}

function csigabiga()
{
    let a = this;
    if (event.button == 0 && !(a.innerHTML == "&#128681" || a.innerHTML == "🚩"))
    {        
        a.style.color = "white";
        a.style.border = "1px, solid white";
        a.innerHTML = akLogika[a.dataset.x][a.dataset.y];
        if (akLogika[a.dataset.x][a.dataset.y] == "💣") {
            a.style.backgroundColor = "red";
            reveal(win);
            alert("nop!");
        } else if (akLogika[a.dataset.x][a.dataset.y] != 0) {
            a.style.backgroundColor = "gray";
        }
        else {
            a.style.backgroundColor = "darkgray";
            //nulaaaaaa(a, a.dataset.x, a.dataset.y);
        }
    }
    if (event.button == 2 && (a.innerHTML == "" || a.innerHTML == "&#128681" || a.innerHTML == "🚩"))
    {
        if (osszAkna > 0)
        {
            if (a.innerHTML == "&#128681" || a.innerHTML == "🚩")
            {
                a.innerHTML = "";
                a.style.backgroundColor = "white";
                a.style.border = "1px, solid black";
                osszAkna++;
                if (akLogika[a.dataset.x][a.dataset.y] == "💣")
                {
                    maxAkna++;
                }
            }
            else
            {
                a.innerHTML = "&#128681";
                a.style.backgroundColor = "green";
                a.style.border = "1px, solid white";
                osszAkna--;
                if (akLogika[a.dataset.x][a.dataset.y] == "💣")
                {
                    maxAkna--;
                }

                if (maxAkna == 0)
                {
                    win = true;
                    reveal(win);
                    alert("Nyertél!");
                }
            }
            console.log(osszAkna);
            aknaDisplay.innerHTML = ("Aknák: " + osszAkna);
        }
        else
        {
            alert("Nincs több akna jelződ");
        }
    }
}

function forditas()
{
    let terulet = document.getElementById("PATYAAAA");
    for (let i = 0; i < terulet.children.length; i++)
    {
        for (let j = 0; j < terulet.children[i]; j++)
        {
            if (akLogika[i][j] == "💣")
            {
                terulet.children[i].style.backgroundColor = "red";
            } else if (akLogika[i][j] != 0)
            {
                terulet.children[i].style.backgroundColor = "gray";
            }
            else
            {
                terulet.children[i].stylele.backgroundColor = "darkgray";
            }
            terulet.children[i].style.color = "white";
            terulet.children[i].style.border = "1px, solid white";
            terulet.children[i].removeEventListener("click", csigabiga);
            terulet.children[i].innerHTML = akLogika[i][j];
        }
    }
}

function logika(akL, arany)
{
    let x = akL.length;
    let y = akL[0].length;
    let akna = Math.floor(x * y * arany / 100);

    let db = 0;

    while (db < akna)
    {
        let hx = Math.floor(Math.random() * x);
        let hy = Math.floor(Math.random() * y);
        if (akL[hx][hy] != "💣")
        {
            akL[hx][hy] = "💣";
            db++;
        }
    }

    for (let i = 0; i < x; i++)
    {
        for (let j = 0; j < y; j++)
        {
            if (akL[i][j] != "💣")
            {
                akL[i][j] = korulotte(i, j, akL, x, y)
            }
        }
    }
    console.log(akL);
    osszAkna = akna;
    maxAkna = akna;
    aknaDisplay.innerHTML = "Aknák: " + osszAkna;
}

function korulotte(x, y, akL, mx, my)
{
    let db = 0;
    for (let i = (x > 0 ? x - 1 : 0); i < (x == mx - 1 ? 1 + x : 2 + x); i++) //feltételes értékadó utasítás
    {
        for (let j = (y > 0 ? y - 1 : 0); j < (y == my - 1 ? 1 + y : 2 + y); j++) //feltételes értékadó utasítás
        {
            if (akL[i][j] == "💣")
                db++;
        }
    }
    return db;
}

function reveal(win)
{
    for (let i = 0; i < s; i++)
    {
        for (let j = 0; j < o; j++)
        {
            let patyu_a_pityu = document.getElementById(i + "-" + j);
            if (akLogika[i][j] == "💣")
            {
                if (win)
                {
                    patyu_a_pityu.style.backgroundColor = "green";
                }
                else
                {
                    if (patyu_a_pityu.innerHTML == "&#128681" || patyu_a_pityu.innerHTML == "🚩")
                    {
                        patyu_a_pityu.style.backgroundColor = "purple";
                    }
                    else
                    {
                        patyu_a_pityu.style.backgroundColor = "red";
                    }
                }
            }
            else if (akLogika[i][j] != 0)
            {
                patyu_a_pityu.style.backgroundColor = "gray";
            }
            else
            {
                patyu_a_pityu.style.backgroundColor = "darkgray";
            }
            patyu_a_pityu.style.color = "white";
            patyu_a_pityu.style.border = "1px, solid white";
            patyu_a_pityu.removeEventListener("mousedown", csigabiga);
            patyu_a_pityu.innerHTML = akLogika[i][j];
        }
    }
}