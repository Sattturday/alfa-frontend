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
