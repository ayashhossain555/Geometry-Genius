console.log(`Connected`);

function showResult(resultId){
    const result = document.getElementById(resultId);
    result.classList.remove('hidden');
}

function getValue(inputId){
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

function setArea(areaId,area){
    const inputArea = document.getElementById(areaId);
    inputArea.innerText = area;
}

function calculateTriangleArea(){
    showResult('result');

    const triBase = getValue('tri-base');
    const triheight = getValue('tri-height');
    
    const area = 0.5 * triBase * triheight;

    setArea('tri-area',area);
}

function calculateRectangleArea(){
    showResult('result2');

    const recWidth = getValue('rec-width');
    const recLength = getValue('rec-length');

    const area = recWidth * recLength;

    setArea('rec-area',area);
}

function calculateParallelogramArea(){
    showResult('result3');

    const paraBase = getValue('para-base');
    const paraHeight = getValue('para-height');

    const area = paraBase * paraHeight;

    setArea('para-area',area);
}

function calculateRhombusArea(){
    showResult('result4');

    const rhomD1 = getValue('rhom-d1');
    const rhomD2 = getValue('rhom-d2');

    const area = 0.5 * rhomD1 * rhomD2;

    setArea('rhom-area',area);
}
function calculatePentagonArea(){
    showResult('result5');

    const penP = getValue('pen-p');
    const penB = getValue('pen-b');

    const area = 0.5 * penP * penB;

    setArea('pen-area',area);
}
function calculateEllipseArea(){
    showResult('result6');

    const eliA = getValue('eli-a');
    const eliB = getValue('eli-b');

    const area = Math.PI * eliA * eliB;

    setArea('eli-area',area);
}