function readURL(input) {
    console.log(input.files);
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('preview').setAttribute('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

document.getElementById('upload').addEventListener('change', function () {
    readURL(document.getElementById('upload'));
});
