const member = [];

// DOM 지정
const button = document.getElementById("addBtn");
const showBtn = document.getElementById('showBtn');
const deleteBtn = document.getElementById('deleteBtn');

// 폼 드롭다운
showBtn.onclick = function(){
    document.getElementById('formArea').classList.toggle('show');
}

//추가버튼 클릭하면 입력값 객체에 저장하고 member 배열로 전달
button.onclick = function addData(){
    const newMember = {
        name: document.getElementById('nameInput').value,
        part: document.getElementById('partInput').value,
        tech: document.getElementById('stackInput').value,
        simpleIntro: document.getElementById('introInput').value,
        intro: document.getElementById("longIntroInput").value,
        email: document.getElementById("emailInput").value,
        phone: document.getElementById("phoneInput").value,
        site: document.getElementById("websiteInput").value,
    }   

    member.push(newMember);
    console.log(member);
    render();
}

// 화면에 렌더링
function render(){
    const cardArea = document.getElementById('cardArea');
    const infoArea = document.getElementById('infoArea');

    cardArea.innerHTML = " ";
    infoArea.innerHTML = " "

    for(i of member){
        if(i.part === 'Frontend'){
            pa = 'fe'
        }else if(i.part === 'Backend'){
            pa = 'be'
        }
        else{
            pa = 'ds'
        }
        
        tech = i.tech.split(',');
        techHtml = ""
        for(let t of tech){
            techHtml += `<li>${t}</li>`;
        }
        const card = `
            <div class="card">
                <div class="stackBadge"><h4>${tech[0]}</h4></div>
                <img src="data:image/jpeg;base64,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" alt="">        
                <div class="cardBody">
                    <h3>${i.name}</h3>
                    <h5 class="${pa}">${i.part}</h5>
                    <p>${i.simpleIntro}</p>
                </div>
            </div>
        `
        const info =`
        <div class="info">
            <h2>${i.name}</h2>
            <h5 class="${pa}">${i.part}</h5>
            <p style="color: gray;">LION TRACK</p>
            <!-- 줄바꿈 처리 -->
            <br>
            <h4>자기소개</h4>
            <p>${i.intro}</p>
            <br>
            <!-- 순서 없는 목룍 -->
            <ul>
                <li>Email: ${i.email}</li>
                <li>Phone: ${i.phone}</li>
                <li>${i.email}</li>
            </ul>
            <br>
            <h4>관심 기술</h4>
            <ul>
                ${techHtml}
            </ul>
            <br>
            <h4>한 마디</h4>
            <p>${i.simpleIntro}</p>
        </div>
        `
        cardArea.insertAdjacentHTML('beforeend', card);
        infoArea.insertAdjacentHTML('beforeend', info);
    }
    document.getElementById('length').innerHTML = `총 ${member.length}명`
}

// 가장 뒤에 있는 데이터 삭제
deleteBtn.onclick = function del(){
    member.pop()
    render()
}


