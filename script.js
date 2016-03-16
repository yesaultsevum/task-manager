// JavaScript source code
(function () {
    // function createNewWindow () {
    //     var html_template =  '<li class="col-md-3 new-board-window">
    //                             <div class="new-board-window_head">
    //                                 <span>Create Board</span>
    //                                 <a href="#" class="new-board-window_head-close"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
    //                             </div><hr>
    //                             <div class="new-board-window_content">
    //                                 <form>
    //                                     <div class="form-group">
    //                                         <label for="exampleInputEmail1">Title</label>
    //                                         <input type="text" class="form-control" id="exampleInputEmail1" placeholder="name of project">
    //                                     </div>
    //                                     <div class="form-group">
    //                                         <label for="exampleInputPassword1">Description</label>
    //                                         <textarea class="form-control" rows="3"></textarea>
    //                                     </div>
    //                                     <button type="submit" class="btn btn-success">Create</button>
    //                                 </form>
    //                             </div>
    //                         </li>'
    //     console.log(html_template);
    // }
    $('.boards_list-item-new').on('click', function () {
        $(this).parent().hide();
        $('.boards_list').append(createNewWindow());
    });
    $('.new-board-window_head-close').on('click', function () {
        $(this).parent().parent().hide();
        $('.boards_list-item-new').parent().show();
    });
    $('button[type=submit]').on('click', function () {
        var title = $('input.form-control').val(),
            description = $('textarea.form-control').val();
        $('.boards_list').append('<li class="col-md-3"><a href="#" class="boards_list-item"><span class="board-title">' + title + '</span><p class="board-description">'+description+'</p></a></li>');
        $('.boards_list').append('<li class="col-md-3"><a href="#" class="boards_list-item boards_list-item-new"><span class="new-board-create">Create new board...</span></a></li>');
        $(this).parents('.new-board-window').hide();
    })
    //console.log('ok');
})();