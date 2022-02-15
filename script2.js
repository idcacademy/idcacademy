const canvas = document.getElementById('canvas-eng')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name-eng')
const downloadBtn = document.getElementById('download-btn-eng')

const image = new Image()
image.src = 'idc_cert_eng.png'
image.onload = function () {
	drawImage()
}
document.getElementById("canvas-eng").hidden = true;

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = 'bold 150px Arial'
	ctx.fillStyle = '#15c'
	ctx.fillText(nameInput.value, 150, 650)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/png')
	downloadBtn.download = 'IDC Graduation - ' + nameInput.value
})