// Chart Configuration
const chartConfig = {
    distance_time_uniform: {
        type: 'line',
        data: {
            labels: ['0','1','2','3','4','5','6','7','8','9','10'],
            datasets:[{label:'Uniform Motion',data:[0,10,20,30,40,50,60,70,80,90,100],borderColor:'#00d4ff',backgroundColor:'rgba(0,212,255,0.1)',borderWidth:3,fill:true,tension:0.3,pointRadius:4,pointBackgroundColor:'#00d4ff',pointBorderColor:'#fff',pointBorderWidth:2}]
        },
        options: {
            responsive:true,maintainAspectRatio:false,
            plugins:{legend:{labels:{color:'#e0e0e0',font:{size:12}}}},
            scales:{x:{title:{display:true,text:'Time (s)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(0,212,255,0.1)'}},y:{title:{display:true,text:'Distance (m)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(0,212,255,0.1)'}}
        }
    },
    distance_time_nonuniform: {
        type: 'line',
        data: {
            labels: ['0','1','2','3','4','5','6','7','8','9','10'],
            datasets:[{label:'Non-Uniform Motion',data:[0,5,12,22,35,50,68,89,113,140,170],borderColor:'#ff006e',backgroundColor:'rgba(255,0,110,0.1)',borderWidth:3,fill:true,tension:0.4,pointRadius:4,pointBackgroundColor:'#ff006e',pointBorderColor:'#fff',pointBorderWidth:2}]
        },
        options: {
            responsive:true,maintainAspectRatio:false,
            plugins:{legend:{labels:{color:'#e0e0e0',font:{size:12}}}},
            scales:{x:{title:{display:true,text:'Time (s)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(255,0,110,0.1)'}},y:{title:{display:true,text:'Distance (m)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(255,0,110,0.1)'}}
        }
    },
    velocity_time_constant: {
        type: 'line',
        data: {
            labels: ['0','1','2','3','4','5','6','7','8','9','10'],
            datasets:[{label:'Constant Velocity',data:[20,20,20,20,20,20,20,20,20,20,20],borderColor:'#39ff14',backgroundColor:'rgba(57,255,20,0.1)',borderWidth:3,fill:true,tension:0,pointRadius:4,pointBackgroundColor:'#39ff14',pointBorderColor:'#fff',pointBorderWidth:2}]
        },
        options: {
            responsive:true,maintainAspectRatio:false,
            plugins:{legend:{labels:{color:'#e0e0e0',font:{size:12}}}},
            scales:{x:{title:{display:true,text:'Time (s)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(57,255,20,0.1)'}},y:{title:{display:true,text:'Velocity (m/s)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(57,255,20,0.1)'}}
        }
    },
    velocity_time_accelerated: {
        type: 'line',
        data: {
            labels: ['0','1','2','3','4','5','6','7','8','9','10'],
            datasets:[{label:'Uniformly Accelerated Motion',data:[0,5,10,15,20,25,30,35,40,45,50],borderColor:'#8338ec',backgroundColor:'rgba(131,56,236,0.1)',borderWidth:3,fill:true,tension:0.3,pointRadius:4,pointBackgroundColor:'#8338ec',pointBorderColor:'#fff',pointBorderWidth:2}]
        },
        options: {
            responsive:true,maintainAspectRatio:false,
            plugins:{legend:{labels:{color:'#e0e0e0',font:{size:12}}}},
            scales:{x:{title:{display:true,text:'Time (s)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(131,56,236,0.1)'}},y:{title:{display:true,text:'Velocity (m/s)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(131,56,236,0.1)'}}
        }
    },
    acceleration_time_positive: {
        type: 'line',
        data: {
            labels: ['0','1','2','3','4','5','6','7','8','9','10'],
            datasets:[{label:'Positive Acceleration',data:[5,5,5,5,5,5,5,5,5,5,5],borderColor:'#ff006e',backgroundColor:'rgba(255,0,110,0.2)',borderWidth:3,fill:true,tension:0,pointRadius:4,pointBackgroundColor:'#ff006e',pointBorderColor:'#fff',pointBorderWidth:2}]
        },
        options: {
            responsive:true,maintainAspectRatio:false,
            plugins:{legend:{labels:{color:'#e0e0e0',font:{size:12}}}},
            scales:{x:{title:{display:true,text:'Time (s)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(255,0,110,0.1)'}},y:{title:{display:true,text:'Acceleration (m/s²)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(255,0,110,0.1)'}}
        }
    },
    acceleration_time_variable: {
        type: 'line',
        data: {
            labels: ['0','1','2','3','4','5','6','7','8','9','10'],
            datasets:[{label:'Variable Acceleration',data:[2,3,4,4.5,5,5,4.5,4,3,2,1],borderColor:'#00d4ff',backgroundColor:'rgba(0,212,255,0.2)',borderWidth:3,fill:true,tension:0.4,pointRadius:4,pointBackgroundColor:'#00d4ff',pointBorderColor:'#fff',pointBorderWidth:2}]
        },
        options: {
            responsive:true,maintainAspectRatio:false,
            plugins:{legend:{labels:{color:'#e0e0e0',font:{size:12}}}},
            scales:{x:{title:{display:true,text:'Time (s)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(0,212,255,0.1)'}},y:{title:{display:true,text:'Acceleration (m/s²)',color:'#b0b0b0'},ticks:{color:'#b0b0b0'},grid:{color:'rgba(0,212,255,0.1)'}}
        }
    }
};

// Chart instances
let distanceTimeChart = null;
let velocityTimeChart = null;
let accelerationTimeChart = null;

// Current graph states
let graphStates = {dt:'distance_time_uniform',vt:'velocity_time_constant',at:'acceleration_time_positive'};

function deepClone(obj){return JSON.parse(JSON.stringify(obj));}

// Initialize charts
function initCharts(){
    const dtCanvas = document.getElementById('distanceTimeChart');
    const vtCanvas = document.getElementById('velocityTimeChart');
    const atCanvas = document.getElementById('accelerationTimeChart');

    if(dtCanvas){
        distanceTimeChart = new Chart(dtCanvas.getContext('2d'), deepClone(chartConfig.distance_time_uniform));
    }
    if(vtCanvas){
        velocityTimeChart = new Chart(vtCanvas.getContext('2d'), deepClone(chartConfig.velocity_time_constant));
    }
    if(atCanvas){
        accelerationTimeChart = new Chart(atCanvas.getContext('2d'), deepClone(chartConfig.acceleration_time_positive));
    }
}

// Toggle graph types with safe deep-clone updates
function toggleGraphType(type){
    let config;
    if(type==='dt' && distanceTimeChart){
        graphStates.dt = graphStates.dt === 'distance_time_uniform' ? 'distance_time_nonuniform' : 'distance_time_uniform';
        config = deepClone(chartConfig[graphStates.dt]);
        distanceTimeChart.config.data = config.data;
        distanceTimeChart.config.options = config.options;
        distanceTimeChart.update();
    } else if(type==='vt' && velocityTimeChart){
        graphStates.vt = graphStates.vt === 'velocity_time_constant' ? 'velocity_time_accelerated' : 'velocity_time_constant';
        config = deepClone(chartConfig[graphStates.vt]);
        velocityTimeChart.config.data = config.data;
        velocityTimeChart.config.options = config.options;
        velocityTimeChart.update();
    } else if(type==='at' && accelerationTimeChart){
        graphStates.at = graphStates.at === 'acceleration_time_positive' ? 'acceleration_time_variable' : 'acceleration_time_positive';
        config = deepClone(chartConfig[graphStates.at]);
        accelerationTimeChart.config.data = config.data;
        accelerationTimeChart.config.options = config.options;
        accelerationTimeChart.update();
    }
}

// Quiz functionality (use input values for matching)
function submitQuiz(){
    const answers = {q1:'Speed',q2:'Displacement',q3:'Object is at rest'};
    let score = 0; let totalQuestions = 3;
    for(let i=1;i<=totalQuestions;i++){
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if(selected && selected.value === answers[`q${i}`]) score++;
    }
    const resultDiv = document.getElementById('quiz-result');
    const percentage = (score/totalQuestions)*100;
    if(percentage>=66){resultDiv.className='quiz-result success';resultDiv.innerHTML=`🎉 Great! You scored ${score}/${totalQuestions} (${percentage.toFixed(0)}%)`}
    else{resultDiv.className='quiz-result error';resultDiv.innerHTML=`📚 You scored ${score}/${totalQuestions} (${percentage.toFixed(0)}%). Keep learning!`}
}

document.addEventListener('DOMContentLoaded',()=>{
    initCharts();
    document.getElementById('toggle-dt').addEventListener('click',()=>toggleGraphType('dt'));
    document.getElementById('toggle-vt').addEventListener('click',()=>toggleGraphType('vt'));
    document.getElementById('toggle-at').addEventListener('click',()=>toggleGraphType('at'));
    document.getElementById('submit-quiz').addEventListener('click',submitQuiz);

    // smooth scroll for anchor links if any
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
        anchor.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t) t.scrollIntoView({behavior:'smooth'});});
    });
});
