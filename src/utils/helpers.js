import { format, formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

export const formatDate = (date, formatStr = 'dd MMMM yyyy') => {
  return format(new Date(date), formatStr, { locale: id });
};

export const formatDateTime = (date, formatStr = 'dd MMMM yyyy HH:mm') => {
  return format(new Date(date), formatStr, { locale: id });
};

export const timeAgo = (date) => {
  return formatDistanceToNow(new Date(date), { 
    addSuffix: true, 
    locale: id 
  });
};

export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};