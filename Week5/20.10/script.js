const books = [
    {
        nameOfBook:"Twilight Eyes",
        nameOfAuthor:"Dean Koontz",
        uRLOfCover:"https://https://www.deankoontz.com/book/twilight-eyes-expanded-version/.photos/200/301",
        iRead:true
    },
    {
        nameOfBook:"1984",
        nameOfAuthor:"George ORWELL",
        uRLOfCover:"https://en.wikipedia.org/https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kobo.com%2Fch%2Ffr%2Febook%2Fgeorge-orwell-1984-4&psig=AOvVaw2vPzNSEmR6rIn9AKgBObd5&ust=1697884102787000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiS4Ke1hIIDFQAAAAAdAAAAABAF/Nineteen_Eighty-Four#/media/File:1984_first_edition_cover.jpg",
        iRead:true
    },
    {
        nameOfBook:"Les Miserables",
        nameOfAuthor:"Victor Hugo",
        uRLOfCover:"https://tr.wikipedia.org/wiki/Sefiller#/media/Dosya:Ebcosette.jpg",
        iRead:true
    },
    {
        nameOfBook:"Crime and Punishment ",
        nameOfAuthor:" Fyodor Dostoyevsky",
        uRLOfCover:"https://tr.wikipedia.org/wiki/Su%C3%A7_ve_Ceza#/media/Dosya:Cover_of_the_first_edition_of_Crime_and_Punishment.jpg",
        iRead:false
    }
    ];
    const ul = document.getElementById("booklist");
    books.forEach (book => {
        const li = document.createElement("li");
        const generalInfo_PTag = document.createElement("p");
        const title_StrongTag = document.createElement("strong");
        const cover_ImgTag = document.createElement("img");
        // I have read ${nameOfAuthor}'s book named <strong> ${nameOfBook} <strong> ---- then maybe if I read it; i can change color of sentence.
        title_StrongTag.textContent = book.nameOfBook;
        cover_ImgTag.src=book.uRLOfCover;
        generalInfo_PTag.textContent=`I have read ${book.nameOfAuthor}'s book named `
        if (book.iRead) {
            generalInfo_PTag.textContent=`I have read ${book.nameOfAuthor}'s book named `
            generalInfo_PTag.style.color="blue";
         } else {
            generalInfo_PTag.textContent=`I have not read ${book.nameOfAuthor}'s book named `
            generalInfo_PTag.style.color="brown";
         }
        generalInfo_PTag.appendChild(title_StrongTag);
        li.appendChild(generalInfo_PTag);
        li.appendChild(cover_ImgTag);
        ul.appendChild(li);
    });
