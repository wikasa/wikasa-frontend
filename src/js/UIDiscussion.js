;( function( $, R ) {

    // Input section
    var $disInputs = $('.js.dis-inputs'),
        $inputCancel = $('.js.disinput-cancel'),
        $inputSubmit = $('.js.disinput-submit')
    ;

    $disInputs.each(function() {
        var $el = $(this).find('.dis-input'),
            $tools = $(this).find('.js.disinput-tools')
        ;

        $el.on('click', function() {
            if(!$el.hasClass('is-active')) {
                $el.addClass('is-active');
                $tools.addClass('is-shown');
            }
        });
    });

    $inputCancel.each(function() {
        var $el = $(this),
            $disInput = $el.closest('.js.dis-inputs').find('.js.dis-input')
        ;
        $el.on('click', function() {
            $disInput.val("");
            $disInput.removeClass('is-active');
            $(this).parent().removeClass('is-shown');
        });
    });

    // More section
    
    var $disMore = $('.js.dis-more')
    ;

    $disMore.removeClass('is-shown');
    $disMore.each(function() {
        var $el = $(this),
            $answers = $el.siblings('.js.dis-answers'),
            $answer = $el.parent().find('.js.answer'),
            $answerAfter = $el.parent().find('.js.answer:nth-child(n+2)'),
            $disMoreBtn = $el.find('.js.dismore-text'),
            $disMoreInfo = $el.find('.js.dislink-info'),
            $disMoreSum = $el.find('.js.dislink-sum'),
            isMoreActive = true
        ;

        if ( $answer.length > 1 ) {
            $el.addClass('is-shown');
            $disMoreSum.html($answer.length);
        }

        $disMoreBtn.on('click', function() {
            $answerAfter.toggleClass('is-shown');
            if (isMoreActive) {
                $disMoreInfo.html("Hide");
                $disMoreSum.html("");
                $answers.removeClass('.is-active');
                isMoreActive = false;
            } else {
                $disMoreInfo.html("View all");
                $disMoreSum.html($answer.length);
                $answers.addClass('.is-active');
                isMoreActive = true;
            }
        });
    });

    // Question add section
    var $questionAdd = $('.js.dis-add-question')
    ;

    $questionAdd.each(function() {
        var $parent = $(this),
            $currentInput = $parent.find('.js.dis-input'),
            $el = $parent.find('.js.disinput-submit')
        ;

        $el.on('click', function() {
            $currentInput.val("");
            $currentInput.removeClass('is-active');
            $el.parent().removeClass('is-shown');
        });

    });

    // Answer section
    var $disAnswer = $('.js.answer')
    ;

    // Answer Star section
    $disAnswer.each(function() {
        var $currentAnswer = $(this),
            $disStar = $currentAnswer.find('.js.dis-star'),
            $parent = $currentAnswer.parent(),
            isStarShine = false
        ;
        $disStar.on('click', function() {
            if($(this).hasClass('is-active')) {
                $(this).removeClass('is-active');
            } else {
                $parent.find('.js.dis-star').removeClass('is-active');
                $(this).addClass('is-active');
            }
        });
    });

    // Answer Add section
    var $answerAdd = $('.js.dis-add-answer')
    ;

    $answerAdd.each(function() {
        var $parent = $(this),
            $currentInput = $parent.find('.js.dis-input'),
            $answerMoreBtn = $parent.siblings('.js.dis-more'),
            $answersSibling = $parent.siblings('.js.dis-answers'),
            $el = $parent.find('.js.disinput-submit')
        ;

        $el.on('click', function() {
            if( $answersSibling.hasClass('is-active') ) {
                var newAnswerSum = $answersSibling.find('.js.answer').length;
                $answerMoreBtn.find('.js.dislink-sum').html(newAnswerSum);
            }

            $currentInput.val("");
            $currentInput.removeClass('is-active');
            $el.parent().removeClass('is-shown');
        });

    });

    // Comment section
    var $commentTrigger = $('.js.dismeta-comment-trigger')
    ;

    $commentTrigger.each(function() {
        var $el = $(this),
            $parent = $el.closest('.js.dis-meta'),
            $pane = $parent.siblings('.js.dis-comments'),
            $other = $el.siblings('.js.dismeta-flag-trigger'),
            $otherPane = $parent.siblings('.js.dis-flag'),
            $commentSum = $el.find('.dislink-sum'),
            $commentLabel = $el.find('.dislink-label'),
            currentSum = $pane.find('.comment').length
        ;
        $el.on('click', function() {
            $otherPane.removeClass('is-shown');
            $pane.toggleClass('is-shown');
            $el.toggleClass('is-active');
            $other.removeClass('is-active');
        });

        if( currentSum > 0 ) { $commentSum.html(currentSum); }
        if( currentSum > 1 ) { $commentLabel.html("comments"); }
    });

    // Comment Add section
    var $commentAdd = $('.js.dis-add-comment')
    ;

    $commentAdd.each(function() {
        var $parent = $(this),
            $currentInput = $parent.find('.js.dis-input'),
            $el = $parent.find('.js.disinput-submit')
        ;

        $el.on('click', function() {
            $currentInput.val("");
            $currentInput.removeClass('is-active');
            $el.parent().removeClass('is-shown');
        });

    });

    // Flag section
    var $flagTrigger = $('.js.dismeta-flag-trigger'),
    isFlagActive = false
    ;

    $flagTrigger.each(function() {
        var $el = $(this);
        $el.on('click', function() {
            var $parent = $el.closest('.js.dis-meta'),
                $pane = $parent.siblings('.js.dis-flag'),
                $other = $el.siblings('.js.dismeta-comment-trigger'),
                $otherPane = $parent.siblings('.js.dis-comments')
            ;
            $otherPane.removeClass('is-shown');
            $pane.toggleClass('is-shown');
            $el.toggleClass('is-active');
            $other.removeClass('is-active');
            isFlagActive != isFlagActive;
        });
    });

    var $disFlag = $('.js.dis-flag');

    $disFlag.each(function() {
        var $disFlagCancel = $(this).find('.js.disinput-cancel'),
            $el = $(this),
            $disFlagBtn = $el.parent().find('.js.dis-meta')
                .find('.dismeta-flag-trigger')
        ;

        $disFlagCancel.on('click', function() {
            $el.removeClass('is-shown');
            $disFlagBtn.removeClass('is-active');
        });
    });

})(jQuery, Response);
