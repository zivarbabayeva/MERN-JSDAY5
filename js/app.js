
let dropArea = document.querySelector("#DropArea");
let dragItem = document.querySelectorAll('#DragArea .box')
dropArea.addEventListener('dragover', function (e) {
    e.preventDefault();
    this.style.border = '3px dashed teal';
})
dropArea.addEventListener('dragleave', function (e) {
    this.style.border = '3px solid teal';
})
for (let i = 0; i < dragItem.length; i++) {
    dragItem[i].addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('param', this.id)
    })
}
dropArea.addEventListener('drop', function (e) {
    let index = e.dataTransfer.getData('param')
        let div = document.getElementById(index)
        dropArea.appendChild(div)
    }
)
        if(dragItem.length === 0){
            let alert_div = '';

            alert_div = `
                <div class="alert text-center alert-danger" role="alert">
                Drag olunacaq element yoxdur!
                    </div>
        `
     document.getElementById('list').innerHTML = alert_div
        }
 
 
