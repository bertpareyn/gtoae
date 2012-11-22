(function() {

    /**
     * Adds the triggers that show/hide search related fields
     */
    var initSearchField = function() {
        $('#topnavigation_search_input').focus(function() {
            $('#topnavigation_search_results_container').show();
        });

        $('.research_assistance_switch').click(function() {
            $('.research_assistance_switch').toggle();
            $('#topnavigation_search_results_results > div').toggle();
        });
    };

    /**
     * Initializes a basic autosuggest example with 3 people
     */
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
            },
            {
                value: "bio101",
                name: "Biology 101",
                img: 'images/dummy_content/activity-item5-collection-item1.png'
            },
            {
                value: "bioinspired",
                name: "Bio Microsystems",
                img: 'images/dummy_content/activity-item5-collection-item5.png'
            },
            {
                value: "biorobotics",
                name: "Bio-Robotics",
                img: 'images/dummy_content/activity-item5-collection-item6.png'
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

        $('#share_autosuggest').autoSuggest(data.items, {
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

    var initSharePopup = function() {
        // Bind buttons
        $('.action_button.share').on('click', function() {
            $('.gt-popup.share').toggle();
            $('.gt-popup.share').css('top', $('.action_button.share').position().top - 95);
            $('.gt-popup.share').css('left', $('.action_button.share').position().left - 100);
        });

        $('#share_new_collection').on('click', function() {
            $(this).hide();
            $('#share_new_collection_input').show();
            $('#share_new_collection_create').show();
            $('#share_new_collection_input').focus();
        });

        $('#share_new_collection_create').on('click', function() {
            $('#share_new_collection').show();
            $('#share_new_collection_input').hide();
            $('#share_new_collection_create').hide();
            $('#water_testing_listitem').show();
        });

        $('.gt-popup-close.share').on('click', function() {
            $('.gt-popup.share').hide();
        });
    };

    var initCenterPanel = function() {
        $(document).scroll(function() {
            var $panel = $('.center_panel');
            var panelWidth = $panel.width();
            if ($(this).scrollTop() >= 128) {
                $('#gt-search-results').css('margin-top', '110px');
                $panel.css('width', panelWidth);
                $panel.css('top', $(this).scrollTop());
                $panel.addClass('absolute_panel');
            } else {
                $('#gt-search-results').css('margin-top', '0');
                $panel.removeClass('absolute_panel');
                panelWidth = $panel.width();
            }
        });

        $('#gt-search-results input[type=checkbox]').on('change', function() {
            if ($('#gt-search-results input[type=checkbox]').is(':checked')) {
                $('.center-panel-inner').addClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: none !important');
            } else {
                $('.center-panel-inner').removeClass('center_panel_shown');
                $('.center-panel-closed').attr('style', 'display: block');
            }
        });
    };

    var initOverlays = function() {
        $('#gt_video_overlay_link').on('click', function() {
            $('#gt_video_overlay').show();
            $('#gt_video_overlay + div').show();
        });

        $('#gt_video_overlay_close').on('click', function() {
            $('#gt_video_overlay').hide();
            $('#gt_video_overlay + div').hide();
        });
    };

    var initSorryMessage = function() {
        // Set action on all links with no href
        $("a").each(function(index, el){
            var $anchor = $(el);
            if ($anchor.attr("href") && ($anchor.attr("href") === "#" || $anchor.attr("href") === "javascript:;")) {
                $anchor.on("click", function(){
                    alert("Ooops, not your fault, it's ours, try again...");
                    return false;
                });
            }
        });
    }

    var init = function() {
        initAutoSuggestExample();
        initSearchField();
        initQuestionsPopup();
        initSharePopup();
        initCenterPanel();
        initOverlays();
        initSorryMessage();
    };

$(document).ready(init);
})();
