document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#Section-Services nav ul li a");
    const gallery = document.querySelector("#Section-Services .gallery");

    // Agrupa todos los elementos en un array antes de hacer cualquier manipulación
    const allGalleryItems = Array.from(document.querySelectorAll("#Section-Services .gallery .item"));

    // Establece la categoría por defecto que deseas que esté activa
    const defaultCategory = "one"; // Cambia esto a la categoría deseada

    // Filtra y muestra por defecto los elementos de la categoría seleccionada
    const itemsToDisplayByDefault = allGalleryItems.filter(item => item.getAttribute("data-category") === defaultCategory);

    itemsToDisplayByDefault.forEach(item => {
        item.classList.add("active");
        gallery.appendChild(item); // Mueve los elementos al final del contenedor
    });

    menuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const category = this.getAttribute("data-category");

            // Filtra los elementos que coinciden con la categoría seleccionada
            const itemsToDisplay = allGalleryItems.filter(item => item.getAttribute("data-category") === category);

            // Oculta todos los elementos
            allGalleryItems.forEach(item => {
                item.classList.remove("active");
            });

            itemsToDisplay.forEach(item => {
                item.classList.add("active");
                gallery.appendChild(item); // Mueve los elementos al final del contenedor
            });
        });
    });
});
