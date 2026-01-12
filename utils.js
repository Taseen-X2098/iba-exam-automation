function getCorrectOption(itemResponse) {
  const choices = itemResponse.getItem().asMultipleChoiceItem().getChoices();
  var correctAnswer;
  choices.forEach(choice => {
    if(choice.isCorrectAnswer()) {
      correctAnswer = choice.getValue();
    }
  })
  return correctAnswer;
}

function pushSorted(arr, item, compareFn) {
  function search (arr, item) {
    if (compareFn(arr[0], item) > 0) return 0;
    var i = 1;
    while(i < arr.length){
      if(compareFn(arr[i-1], item) < 0 && compareFn(arr[i], item) >= 0) return i;
      i++;
    }
    return i;
  }

  arr.splice(search(arr, item), 0, item)
}


function getSubject(itemResponseIndex) {
  if(itemResponseIndex <= 27) {
    return "math";
  }else if(itemResponseIndex <= 57) {
    return "english";
  } else {
    return "analytical";
  }
}
