import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Alisson Andrey',
    email: 'alisson@email.com.br',
  },
})

// ORM - Object Relational Mapper
