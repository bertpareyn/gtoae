(function() {

    var initSearchField = function() {
        $('#topnavigation_search_input').focus(function() {
            $('#topnavigation_search_results_container').show();
        });
        $('#topnavigation_search_input').blur(function() {
            $('#topnavigation_search_results_container').hide();
        });
    };

    var initAutoSuggestExample = function() {
        var data = {items: [
            {
                value: "mjagger23",
                name: "Stanley Roberts",
                img: 'images/dummy_users/profile-pic-stanley.png'
            },
            {
                value: "jlibrarion53",
                name: "John Librarian",
                img: 'images/dummy_users/profile-pic-john.png'
            },
            {
                value: "janderson23",
                name: "Joyce Anderson",
                img: 'images/dummy_users/profile-pic-joyce.png'
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

    var initQuestionsPopup = function() {
        // Bind buttons
        $('.questions').on('click', function() {
            $('.gt-popup.question').toggle();
        });

        $('.questions-close').on('click', function() {
            $('.gt-popup.question').hide();
        });

        $('#question-send').on('click', function() {
            $('.gt-popup.question').hide();
            $('.gt-popup.success').show();
            setTimeout(function() {
                $('.gt-popup.success').fadeOut(300);
            }, 5000);
        });

        $('.success-close').on('click', function() {
            $('.gt-popup.success').hide();
        });

    };

    var init = function() {
        initAutoSuggestExample();
        initSearchField();
        initQuestionsPopup();
    };

    $(document).ready(init);
})();
