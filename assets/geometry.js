console.log(`Connected`);

function calculateTriangleArea(){
    const result = document.getElementById('result');
    result.classList.remove('hidden');

    const triBaseInput = document.getElementById('tri-base').value;
    const triBase = parseFloat(triBaseInput);

    const triheightInput = document.getElementById('tri-height').value;
    const triheight = parseFloat(triheightInput);
    
    const area = 0.5 * triBase * triheight;

    const triArea = document.getElementById('tri-area');
    triArea.innerText = area;
}

function calculateRectangleArea(){
    const result = document.getElementById('result2');
    result.classList.remove('hidden');

    const recWidthInput = document.getElementById('rec-width').value;
    const recWidth = parseFloat(recWidthInput);

    const recLengthInput = document.getElementById('rec-length').value;
    const recLength = parseFloat(recLengthInput);
    
    const area = recWidth * recLength;

    const recArea = document.getElementById('rec-area');
    recArea.innerText = area;
}