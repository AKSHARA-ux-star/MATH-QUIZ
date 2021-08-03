player_1_name= localStorage.getItem("player_1_name");
player_2_name= localStorage.getItem("player_2_name");

player_1_score=0;
player_2_score=0;

document.getElementById("player_1_name").innerHTML=player_1_name+ "-";
document.getElementById("player_2_name").innerHTML=player_2_name+ "-";

document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;

document.getElementById("player_questions").innerHTML="Question Turn = " + player_1_name;
document.getElementById("player_answers").innerHTML="Answer turn = " + player_2_name;

function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    CharAt1=word.CharAt();
    console.log(CharAt1);

    lengthdividedby2=Math.floor(word.length/2);
    CharAt2=word.CharAt(lengthdividedby2);
    console.log(CharAt2);

    lenghtminus1=word.length-1;
    CharAt3=word.CharAt(lenghtminus1);
    console.log(lenghtminus1);

    removeCharAt1=word.replace(CharAt1, "_");
    removeCharAt2=removeCharAt1.replace(CharAt2, "_");
    removeCharAt3=removeCharAt2.replace(CharAt3, "_");

    question_word="<h4 id='word_display'>q. " + removeCharAt3 + "</h4>";
    inputbox="<br>answer: <input type='text' id='inputcheckbox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row=question_word + inputbox + checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    comsole.log("answer in lower case -" + answer);

    if (anwer == word)
    {
        player_1= player_1_score + 1;
        document.getElementById("player_1_score").innerHTML=player_1_score;
    }
    else
    {
        player_2= player_2_score + 1;
        document.getElementById("player_2_score").innerHTML=player_2_score;
    }

    if (question_turn == "player_1")
    {
        question_turn = "player_2"
        document.getElementById("player_question").innerHTML= "Question_turn - " + player_2_name;
    }
    else
    {
        question_turn = "player_1"
        document.getElementById("player_question").innerHTML= "Question_turn - " + player_1_name;
    }

    if (answer_turn == "player_1")
    {
        answer_turn = "player_2"
        document.getElementById("player_answer").innerHTML= "Answer_turn - " + player_2_name;
    }
    else
    {
        answer_turn = "player_1"
        document.getElementById("player_answer").innerHTML= "Answer_turn - " + player_1_name;
    }

    document.getElementById("output").innerHTML = "";
}