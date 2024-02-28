const loadAi=async ()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const aiAll = data.data.tools;
    // console.log(aiAll);
    displayAi(aiAll);
}
const displayAi=ai=>{
ai.forEach(eachAiElement => {
    console.log(eachAiElement);
    const aiDiv=document.createElement("div");
    const aiUniverseShow=document.getElementById('aiUniverseShow');
    aiDiv.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="${eachAiElement.image}" alt="AI Hubs" /></figure>
    <div class="card-body flex flex-col gap-5">
      <h2 class="card-title text-2xl font-bold">Features</h2>
      <p>1: ${eachAiElement.features[0]}</p>
      <p>2: ${eachAiElement.features[1]}</p>
      <p>3: ${eachAiElement.features[2]}</p>
      <hr>
      <div class="card-actions flex justify-between">
        <div class="flex flex-col gap-4">
         <p class="text-2xl font-semibold">${eachAiElement.name}</p>
        <p class="text-2xl font-semibold">${eachAiElement.published_in}</p>
        </div>
        <button class="btn btn-circle">
        <img src="./img/Vector (1).png" alt="" srcset="">
      </button>
      
      </div>
    </div>
  </div>
    `
    aiUniverseShow.appendChild(aiDiv)
});

}
loadAi()