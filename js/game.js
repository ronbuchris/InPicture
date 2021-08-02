'use strict';

var gCurrQuestIdx;

var gQuests;

function initGame() {
  var elBtn = document.querySelector('.finish');
  elBtn.style.display = 'none';
  gCurrQuestIdx = 0;
  gQuests = createQuests();
  renderQuest(gCurrQuestIdx);
}

function createQuests() {
  return [
    { id: 1, opts: ['TLV', 'NYC', 'LDN'], correctOptIndex: 0 },
    { id: 2, opts: ['LDN', 'NYC', 'TLV'], correctOptIndex: 1 },
    { id: 3, opts: ['NYC', 'TLV', 'LDN'], correctOptIndex: 2 },
  ];
}

function renderQuest(idxQuest) {
  var strHTML = '';
  if (gCurrQuestIdx <= gQuests.length - 1) {
    strHTML += `<div class="quest quest' ${idxQuest + 1}'">`;
    for (var i = 0; i < gQuests[idxQuest].opts.length; i++) {
      strHTML += `<button class="answers" onclick="checkAnswer(${i})">${gQuests[idxQuest].opts[i]}</button>`;
    }
    strHTML += `</div>\n <img class="img" src= "img/${idxQuest + 1}.jpg" >`;
  } else {
    strHTML += `<div class="victory">think about it...</div><img class="img" src= "img/${
      gCurrQuestIdx + 1
    }.jpg" >`;
    var elBtn = document.querySelector('.finish');
    elBtn.style.display = 'block';
  }
  var elPics = document.querySelector('.pics');
  elPics.innerHTML = strHTML;
}

function checkAnswer(optIdx) {
  if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
    gCurrQuestIdx++;
    renderQuest(gCurrQuestIdx);
  }
}
