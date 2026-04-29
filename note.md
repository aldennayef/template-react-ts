Struktur Project

/src
  - /assets : file asset yang digunakan di project
  - /components : component yang reusable (bisa dipakai berulang kali) di /features dan juga /pages. contoh: modal, button, input, dll
  - /features : ui-ui yang dipakai di pages, contohnya loginForm, userTable, dll
  - /hooks : hooks yang digunakan di project, contohnya useAuth, useUsers, useProducts, dll
  - /layouts : layout utama dari aplikasi bisa berisi header, footer, sidebar, dll
  - lib : library atau lib biasanya berisi axios
  - /pages : halaman-halaman aplikasi contohnya home, login, register, dll dan isinya diambil dari /features
  - /routes : routes utama dari aplikasi
  - /services : service dari backend atau api yang digunakan. contohnya userService.ts berisi get, post, put, delete, dll.
  - /utils : helper kecil yang bisa dipakai di mana saja contohnya format date
  - App.tsx : file utama aplikasi
  - main.tsx : file utama aplikasi
  - index.css : file style utama aplikasi

Perbedaan ts dan tsx :
    - jika tidak mereturn elemen jsx seperti <Navigate/> atau return biasa maka menggunakan .ts
    - jika mereturn elemen jsx seperti <Navigate/> maka menggunakan .tsx

React ini sudah dikonfigurasi menggunakan Tailwind css, tinggal install semua :
npm install