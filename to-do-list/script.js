$(document).ready(function () {
    $('#add-task').click(function () {
        let taskText = $('#task-input').val().trim();
        if (taskText) {
            $('#tasks').append('<li>' + taskText + '<span class="remove-task"> x </span></li>');
            $('#task-input').val('');
        }
    });

    // Remove task on clicking 'x'
    $(document).on('click', '.remove-task', function () {
        $(this).parent().remove();
    });
});
