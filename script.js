const inputText = document.getElementById('input-text');
const submitBtn = document.getElementById('submit-btn');
const hintText = document.getElementById('hint-text');

const puzzles = [
    {
        text: '海子的《面朝大海，春暖花开》中，有句诗是：“从明天起，做一个幸福的人。” 请输入“幸福的人”。',
        answer: '幸福的人',
        keyword: '幸福'
    },
    {
        text: '北岛的《波兰来客》中，有句诗是：“我在这里欢呼，飘洋过海的来客。” 请输入“飘洋过海”。',
        answer: '飘洋过海',
        keyword: '欢呼'
    },
    {
        text: '顾城的《一代人》中，有句诗是：“我们都是独行的船，各自追求自己的星辰。” 请输入“独行的船”。',
        answer: '独行的船',
        keyword: '星辰'
    }
];

let currentPuzzleIndex = 0;
let collectedKeywords = [];

function updatePuzzleText() {
    document.getElementById('puzzle-text').innerText = puzzles[currentPuzzleIndex].text;
}

function checkAnswer() {
    if (inputText.value === puzzles[currentPuzzleIndex].answer) {
        collectedKeywords.push(puzzles[currentPuzzleIndex].keyword);
        currentPuzzleIndex++;
        if (currentPuzzleIndex < puzzles.length) {
            updatePuzzleText();
            hintText.innerText = '回答正确！请继续。';
        } else {
            hintText.innerText = `恭喜你完成了所有谜题！新的诗句是：${collectedKeywords.join('，')}。`;
            submitBtn.disabled = true;
        }
    } else {
        hintText.innerText = '回答错误，请重试。';
    }
    inputText.value = '';
}

submitBtn.addEventListener('click', checkAnswer);
updatePuzzleText();
