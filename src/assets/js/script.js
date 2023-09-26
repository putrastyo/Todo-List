// Menekan Enter
$('#todo-input').keyup(function (e) { 
  if(e.keyCode == 13){
    if($('#todo-input').val() == '' || $('#todo-input').val() == null){
      alert('Inputan anda kosong!')
    } else {
      $('#btn-add').click()
    }
  }
})

// Menekan tombol check list
$('#todo-list').on('click', '.btn-check', function(){
  $(this).prop('disabled', true)
  $(this).parent().parent().addClass('bg-slate-100')
  $(this).parent().parent().find('span').addClass('line-through')
})

// Menekan tombol hapus list
$('#todo-list').on('click', '.remove-todo', function() {
  $(this).parent().parent().remove()

  if($('#todo-list').find('tr').length == 0){
    $('#empty').removeClass('hidden')
  }
})

// Menekan tombol add
$('#btn-add').click(function() {
  if($('#todo-input').val() == '' || $('#todo-input').val() == null){
    alert('Inputan anda kosong!')
    return false
  }
  let todoDesc = $('#todo-input').val()

  let newRow = `<tr class="border-b" id="row1">
  <td class="px-2">
    <span class="text-sm">${todoDesc}</span>
  </td>
  <td class="md:w-20 w-[calc(30%)] py-2">
    <button type="button" class="bg-emerald-700 p-2 rounded disabled:opacity-50 btn-check"><img src="assets/icons/check.png" alt="done" width="12px"></button>
    <button type="button" class="bg-red-600 p-2 rounded remove-todo"><img src="assets/icons/delete.png" alt="delete" width="12px"></button>
  </td>
</tr>`

  $('#todo-list').append(newRow)

  $('#todo-input').val('')

  $('#empty').addClass('hidden')
})