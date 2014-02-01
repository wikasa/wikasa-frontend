**COMMON HEAD**

    header.common-heads
        nav.common-head.inline-objects
            a.brand-alphas > img.brand-alpha
            a.brand-betas > img.brand-beta
            a.comhead-link-basic
            a.comhead-link-user
                span.comhead-username
                button.comhead-userpic
                span.comhead-drop-icon
            a.comhead-link-search


**COMMON SIDEBAR**

    nav.common-sidebars
        ul.common-sidebar
            li.comside-list > a.comside-link > span.comside-icon


**COMMON SIDEBAR NAV**

    nav.common-sidebars-nav
        ul.common-sidebar-nav
            li.comside-list > a.comside-link > span.comside-icon


**COMMON SIDEBAR TOOL**

    nav.common-sidebars-tool
        ul.common-sidebar-tool
            li.comside-list > a.comside-link > span.comside-icon


**COMMON SIDEBAR TIMELINE**

    nav.common-sidebars-timeline
        ul.common-sidebar-timeline
            li.comside-list > a.comside-link > span.comside-icon


**COMMON CARD**

    div.common-cards
        article.common-card
            div.comcard-images
                a.card-covers > img.card-cover
                a.card-userpics > img.card-userpic
            div.comcard-body
                p.card-meta
                    span.card-username
                    span.card-acmename
                    span.card-postdate
                a.card-title
                p.card-info
            // ul.comcard-categories
                // li > a.cardcat-link > img

**COMMON TAB**

    nav.common-tab
        a.comtab-link
        a.comtab-link


**COMMON MAIN HEAD**

    div.common-mainheads
        div.common-mainhead
            a.mainhead-userpics.userpic > img.mainhead-userpic
            p.mainhead-meta
                span.headmeta-username
                span.headmeta-acmename
                span.headmeta-date
            h1.mainhead-title


**LANDING**

    div.mains
        div.landing-bodies
            div.lanbody-a
                h1.lancontent-a1
                div.common-medias.lancontent-a2 > div.common-media
                p.lancontent-a3
                a.lancontent-a4.btn-huge.lancontent-btn
                p.lancontent-a4 > a
                p.lancontent-a5 > a
            div.lanbody-b
                p.lancontent-b1
                    img
                    h2
                    p


**ACCOUNT SETTINGS**

    div.mains
        div.main
            h2.subheads-2>{Account Settings}
            form.single-forms#edit_user[accept-charset="UTF-8" action="/users" method="post" role="form"]
                div.form-group
                    label[for="user_email"]>{Email}
                    input.form-control#user_email[type="email" name="user[email]" value="riantisilvi@gmail.com"]
                div.form-group
                    label[for="user_password"]>{Password}
                    input.form-control#user_password[type="password" name="user[password]" autocomplete="off"]
                div.form-group
                    label[for="user_current_password"]>{Current Password}
                    input.form-control#user_current_password[type="current_password" name="user[current_password]" autocomplete="off"]
                div.form-group
                    input.btn.btn-default.btn-sign[name="commit" type="submit" value="update"]
            form.single-forms
                a.btn.btn-primary[data-no-turbolink="true" href="#"]>{Connect Facebook}
            form.single-forms[action="/users" class="button_to" method="post"]
                h3>{We'd hate to see you go.}
                div.form-group
                    input[name="_method" type="hidden" value="delete"]
                    input.btn.btn-danger[data-confirm="DANGER: Are you sure?" type="submit" value="Cancel my account"]
                    input[name="authenticity_token" type="hidden" value="u3neBCsc2ZxunlfZcRWsNVd9uDCvmSAzYksXJWbDJk4="]


**COMMON-DISCUSSION**

    div.common-discussions
        div.common-discussion
            article.dis-thread
                div.dis-questions
                    div.dis-content.question
                        p.discon-text>{Lorem16}
                    div.dis-meta
                        div.dismeta-tools
                            p.disvote
                                span.disvote-sum>{0}
                                span.disvote-label>{Vote}
                                a.disvote-btn.voteup[href="#"]>i.fa.fa-plus.distool-icon
                                a.disvote-btn.voteup[href="#"]>i.fa.fa-minus.distool-icon
                            p.distool-separator>{&bull;}
                            a.distool-link.dismeta-comment-trigger.js[href="#"]>{comment}
                            a.distool-link.dismeta-flag-trigger.js[href="#"]>{flag}
                        div.dismeta-infos
                            a.distool-link.dismeta-time>{about 3 hours ago}
                            p.distool-separator>{by}
                            a.distool-link.dismeta-username>{Rianti Silvi}
                            p.distool-separator>{at}
                            a.distool-link.dismeta-acme>{Technology}
                    div.dis-comments.js.is-shown
                        div.dis-content.comment
                            p.discon-text>{lorem6}
                        form.dis-inputs.dis-add-comment.js.is-shown
                            textarea.dis-input.js[placeholder="Comment this question"]
                            div.disrepl-tools.is-shown
                                a.distool-link.disinput-cancel.js[href="#"]>{cancel}
                                p.distool-separator>{or}
                                input.disinput-btn.disinput-submit[type="submit"]>{Comment}
                    div.dis-flag.js.is-shown
                        form.dis-inputs.dis-add-comment.js.is-shown
                            textarea.dis-input.js[placeholder="Comment this question"]
                            div.disrepl-tools.is-shown
                                a.distool-link.disinput-cancel.js[href="#"]>{cancel}
                                p.distool-separator>{or}
                                input.disinput-btn.disinput-submit[type="submit"]>{Comment}
                    div.dis-answers
                        div.dis-content.answer
                            p.discon-text>{lorem64}
                    form.dis-inputs.dis-add-answer.js
                        textarea.dis-input.js[placeholder="Answer this question"]
                        div.disrepl-tools.is-shown
                            a.distool-link.disinput-cancel.js[href="#"]>{cancel}
                            p.distool-separator>{or}
                            input.disinput-btn.disinput-submit[type="submit"]>{Answer}


