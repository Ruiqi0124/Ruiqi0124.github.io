let preButton = document.querySelector("button.pre");
let nextButton = document.querySelector("button.next");
let theTxt = document.querySelector('h1');
nextButton.addEventListener('click', next);
preButton.addEventListener('click', pre);


let i = 0
function next(){
    i = i+1
    if (i === 1){
    theTxt.textContent = "The medium is the message emphasizes the importance of the medium form, that is, the medium itself. The other dimension opposite to form is content. Take the mobile phone as an example. Mobile phone itself is a form of media, and the things we watch through mobile phones, such as news, pictures, videos, etc., are all media content."
    }
    else if (i === 2){theTxt.textContent ="When other scholars are concerned about the impact of mobile phone content on audience perceptions, attitudes, and behaviors, McLuhan pays more attention to the overall impact of the mobile phone itself on people and society, such as the emergence of mobile phones and people’s Content acquisition is more fragmented, which leads to fragmentation of thinking, and the development of the entire society is shifting toward mobile. Another example is the Internet. We can perceive the huge impact of the Internet on our lives and all aspects of society, but are these effects caused by various scattered contents on the Internet? Certainly not, these influences are exerted by the Internet itself"
    }
    else if (i === 3){theTxt.textContent ="This is the difference between content and form. If the content brings about a short-term attitude change, the form is more a long-term macro change. McLuhan pointed out that the advent of printing led to the development of rational civilization in the West, and the advent of television brought about great changes in people and society. It is the form rather than the content that dominates all of this. Therefore, the media itself brings profound changes to social changes -the medium is the message."
    }
    else if (i === 4){theTxt.textContent ="McLuhan’s Media is Message emphasizes the important determinative role of media forms in the development of people and society. In the communication field that focuses on content as the main orientation, McLuhan let people start Pay attention to the influence of the media form itself. As far as communication studies are concerned, McLuhan opened up the media turn of communication studies, so that communication studies would not fall into the narrow framework of effect research, and laid a theoretical foundation for the emergence of the media environment school and established the legality of the discipline. Today, McLuhan’s accurate foresight and profound insights are full of explanatory power to the characteristics of the Internet era, allowing us to have a deeper understanding of the nature of media in a media society."}
    else if (i > 4){i = 4}
    console.log(i)
}
function pre(){
    i = i-1
    if (i === 1){
    theTxt.textContent = "The medium is the message emphasizes the importance of the medium form, that is, the medium itself. The other dimension opposite to form is content. Take the mobile phone as an example. Mobile phone itself is a form of media, and the things we watch through mobile phones, such as news, pictures, videos, etc., are all media content."
    }
    else if (i === 2){theTxt.textContent ="When other scholars are concerned about the impact of mobile phone content on audience perceptions, attitudes, and behaviors, McLuhan pays more attention to the overall impact of the mobile phone itself on people and society, such as the emergence of mobile phones and people’s Content acquisition is more fragmented, which leads to fragmentation of thinking, and the development of the entire society is shifting toward mobile. Another example is the Internet. We can perceive the huge impact of the Internet on our lives and all aspects of society, but are these effects caused by various scattered contents on the Internet? Certainly not, these influences are exerted by the Internet itself"
    }
    else if (i === 3){theTxt.textContent ="This is the difference between content and form. If the content brings about a short-term attitude change, the form is more a long-term macro change. McLuhan pointed out that the advent of printing led to the development of rational civilization in the West, and the advent of television brought about great changes in people and society. It is the form rather than the content that dominates all of this. Therefore, the media itself brings profound changes to social changes -the medium is the message."
    }
    else if (i === 4){theTxt.textContent ="McLuhan’s Media is Message emphasizes the important determinative role of media forms in the development of people and society. In the communication field that focuses on content as the main orientation, McLuhan let people start Pay attention to the influence of the media form itself. As far as communication studies are concerned, McLuhan opened up the media turn of communication studies, so that communication studies would not fall into the narrow framework of effect research, and laid a theoretical foundation for the emergence of the media environment school and established the legality of the discipline. Today, McLuhan’s accurate foresight and profound insights are full of explanatory power to the characteristics of the Internet era, allowing us to have a deeper understanding of the nature of media in a media society."}
    else if (i > 4){i = 4}
    else if (i === 0){theTxt.textContent = "Medium is Message"}
    else if (i < 0){i = 0}
    console.log(i)
}