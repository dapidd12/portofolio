export const contactFormSchema = {
  name: {
    required: 'Nama harus diisi',
    minLength: {
      value: 2,
      message: 'Nama minimal 2 karakter'
    },
    maxLength: {
      value: 50,
      message: 'Nama maksimal 50 karakter'
    }
  },
  email: {
    required: 'Email harus diisi',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Format email tidak valid'
    }
  },
  message: {
    required: 'Pesan harus diisi',
    minLength: {
      value: 10,
      message: 'Pesan minimal 10 karakter'
    },
    maxLength: {
      value: 1000,
      message: 'Pesan maksimal 1000 karakter'
    }
  }
};

export const announcementSchema = {
  title: {
    required: 'Judul harus diisi',
    minLength: {
      value: 5,
      message: 'Judul minimal 5 karakter'
    },
    maxLength: {
      value: 200,
      message: 'Judul maksimal 200 karakter'
    }
  },
  content: {
    required: 'Konten harus diisi',
    minLength: {
      value: 10,
      message: 'Konten minimal 10 karakter'
    }
  }
};