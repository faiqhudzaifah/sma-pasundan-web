// prisma/seed.ts
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Cek apakah admin sudah ada
  const existingAdmin = await prisma.admin.findUnique({
    where: { username: 'admin' }
  })

  if (!existingAdmin) {
    // Kalau belum ada, buat baru
    await prisma.admin.create({
      data: {
        username: 'admin',
        password: 'admin123', // ini harus di-hash (bcrypt)
        name: 'Super Admin',
      },
    })
    console.log('✅ Akun Admin berhasil dibuat!')
    console.log('Username: admin')
    console.log('Password: admin123')
  } else {
    console.log('ℹ️ Akun admin sudah ada.')
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })