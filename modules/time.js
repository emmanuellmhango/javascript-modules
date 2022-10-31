export const time = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const hrs = date.getHours();
  const mns = date.getMinutes();
  const sc = date.getSeconds();
  const tm = hrs > 12 ? 'PM' : 'AM';
  const nhrs = hrs > 12 ? hrs - 12 : hrs;
  return `${months[month]} ${day} ${year}, ${nhrs}:${mns}:${sc} ${tm}`;
}
