const image_input = document.getElementById("image_inpute");

var uploaded_image ="";

btn.addEventListener("click",function(){
    image_input.click();
});
function getImagePreview(event){
    var img = URL.createObjectURL(event.target.files[0]);
    var imgdiv = document.getElementById("display_image");
    var newimage = document.createElement("image_inpute");
    newimage.src = Image;
    imgdiv.appendChild(newimage);
 }

        document.querySelector("#btn-input").addEventListener("change" ,function(){

            console.lod(this.files);
        });

/***** **************************************************************
 * const btn=document.getElementById("btn-input");
 * const preview = document.getElementById("display_img");
const display = previewContainer.querySelector(".imgprev");
image_input.addEventListener("change", function(){
    const file = this.files[0];
    if (file){
        const reader= new FileReader();
        view.style.display = "none";
        display.style.display = "block";

        reader.addEventListener("load",function() {
            console.log(this);
                display.setAttribute("src" , this.result);
        });
        reader.readAsDataURL(file);
    }
});
 
*/