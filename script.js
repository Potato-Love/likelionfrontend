const member = [];

let button = document.getElementById("addBtn");
const  showBtn = document.getElementById("showBtn"); 

showBtn.onclick = function(){ document.getElementById('formArea').classList.toggle('show');}

button.onclick = function addData(){
    const newMember = {
        name: document.getElementById('nameInput').value,
        part: document.getElementById('partInput').value,
        tech: document.getElementById('stackInput').value,
        simpleIntro: document.getElementById('introInput').value,
    }

    member.push(newMember);
    console.log(member);
    render();
}

function render(){
    const cardArea = document.getElementById('cardArea');
    cardArea.innerHTML = " ";
    
        for(let i of member){
            let pa = '';
            if(i.part === "Frontend"){
                pa = "fe"
            }
            else if (i.part === "Backend"){
                pa = "be"
            }
            else{
                pa = "ds"
            };


        const card = 
            `            
            <div class="card">
                <!-- 기술 스택 뱃지 -->
                <div class="stackBadge"><h4>${i.tech}</h4></div>
                <!-- 이미지 -->
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SlFwLLZVeaJABjtGlD0IedS9eojJFVsJtA&s" alt="">
                <!-- 이미지 제외한 텍스트 영역(이미지빼고 패딩 적용 목적) -->
                <div class="cardBody">
                    <h3>${i.name}</h3>
                    <h5 class="${pa}">${i.part}</h5>
                    <p>${i.simpleIntro}</p>
                </div>
            </div>
            `;

        cardArea.insertAdjacentHTML('beforeend', card);
    }
}