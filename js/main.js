(function() {

    var initAutoSuggestExample = function() {
        var data = {items: [
            {
                value: "mjagger23",
                name: "Mick Jagger",
                img: 'images/dummy_users/profile-pic-don.png'
            }
        ]};
        $('#autosuggest_example').autoSuggest(data.items, {
            selectedItemProp: "name",
            searchObjProps: "name",
            formatList: function(data, elem){
                var my_image = data.image;
                var new_elem = elem.html('<img src="' + data.img + '" class="gt-force-left" /><div class="autosuggest_name">' + data.name + '</div>');
                return new_elem;
            }
        });
    };

    $(document).ready(initAutoSuggestExample);
})();
