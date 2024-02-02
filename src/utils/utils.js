export function formatDate(inputDate) {
  if (!inputDate) {
    return;
  }

  const parts = inputDate.split('-');

  const dateObject = new Date(parts[0], parts[1] - 1, parts[2]);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const formattedDate = `${day < 10 ? '0' : ''}${day}.${
    month < 10 ? '0' : ''
  }${month}.${year}`;

  return formattedDate;
}

// получаем токен из ЛС
export const getAuthToken = () => {
  return localStorage.getItem('token');
};

// определяем, есть ли комментарии хоть в одной задаче
export function hasComments(tasks) {
  // Проходимся по каждой задаче
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    // Проверяем, есть ли комментарии у текущей задачи
    if (task.has_comments && task.comments) {
      return true; // Если есть хотя бы один комментарий, возвращаем true
    }
  }
  return false; // Если не найдено ни одного комментария, возвращаем false
}
