import { z } from 'zod'

// Message type schema
export const MessageSchema = z.object({
  id: z.string().uuid(),
  content: z.string().min(1, 'Message cannot be empty'),
  sender: z.enum(['user', 'other']),
  timestamp: z.date(),
  isMarkdown: z.boolean().default(true)
})

// Chat state schema
export const ChatStateSchema = z.object({
  messages: z.array(MessageSchema),
  isLoading: z.boolean().default(false),
  error: z.string().nullable().default(null)
})

// User input schema
export const UserInputSchema = z.object({
  content: z.string().min(1, 'Message cannot be empty').max(1000, 'Message too long'),
  isMarkdown: z.boolean().default(true)
})

// TypeScript interfaces derived from Zod schemas
export type Message = z.infer<typeof MessageSchema>
export type ChatState = z.infer<typeof ChatStateSchema>
export type UserInput = z.infer<typeof UserInputSchema>

// Sender type
export type Sender = 'user' | 'other'

// Create message helper function
export const createMessage = (content: string, sender: Sender, isMarkdown: boolean = true): Message => {
  return {
    id: crypto.randomUUID(),
    content,
    sender,
    timestamp: new Date(),
    isMarkdown
  }
}

// Validate message
export const validateMessage = (message: unknown) => {
  return MessageSchema.safeParse(message)
}

// Validate user input
export const validateUserInput = (input: unknown) => {
  return UserInputSchema.safeParse(input)
}