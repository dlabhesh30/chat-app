<template>
  <div class="chat-container">
    <!-- Chat Header -->
    <div class="chat-header">
      <h1>
        <i class="pi pi-comments"></i>
        Vue 3 Chat App
      </h1>
    </div>

    <!-- Chat Messages -->
    <div class="chat-messages" ref="messagesContainer">
      <div v-if="messages.length === 0" class="empty-state">
        <i class="pi pi-chat-circle"></i>
        <p>No messages yet. Start a conversation!</p>
      </div>
      
      <div
        v-for="message in messages"
        :key="message.id"
        :class="['message', message.sender === 'user' ? 'sent' : 'received']"
      >
        <div class="message-avatar">
          {{ message.sender === 'user' ? 'U' : 'O' }}
        </div>
        <div class="message-content">
          <div 
            v-if="message.isMarkdown" 
            class="markdown-content"
            v-html="renderMarkdown(message.content)"
          ></div>
          <div v-else class="plain-content">
            {{ message.content }}
          </div>
          <div class="message-time">
            {{ formatTimestamp(message.timestamp) }}
          </div>
        </div>
      </div>
      
      <div v-if="isLoading" class="message received">
        <div class="message-avatar">O</div>
        <div class="message-content">
          <div class="typing-indicator">
            <i class="pi pi-spin pi-spinner"></i>
            Typing...
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="chat-input">
      <div class="input-container">
        <div class="message-input">
          <Textarea
            v-model="newMessage"
            placeholder="Type your message here... (Markdown supported)"
            :rows="3"
            :autoResize="true"
            @keydown.enter.prevent="sendMessage"
            :disabled="isLoading"
          />
        </div>
        <Button
          icon="pi pi-send"
          class="send-button p-button-rounded"
          @click="sendMessage"
          :disabled="!newMessage.trim() || isLoading"
          :loading="isLoading"
        />
      </div>
      
      <!-- Markdown Toggle -->
      <div class="markdown-toggle">
        <Checkbox
          v-model="isMarkdownEnabled"
          :binary="true"
          inputId="markdown-toggle"
        />
        <label for="markdown-toggle" class="ml-2">
          Enable Markdown formatting
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'
import { Button } from 'primevue/button'
import { Textarea } from 'primevue/textarea'
import { Checkbox } from 'primevue/checkbox'
import { createMessage, validateUserInput } from './types/chat.js'
import { renderMarkdown, formatTimestamp } from './utils/markdown.js'

// Reactive state
const messages = ref([])
const newMessage = ref('')
const isLoading = ref(false)
const isMarkdownEnabled = ref(true)
const messagesContainer = ref(null)

// Sample messages for demonstration
const sampleMessages = [
  createMessage('# Welcome to Vue 3 Chat! 👋\n\nThis chat supports **markdown** formatting.', 'other'),
  createMessage('Hello! I can use **bold text**, *italic text*, and `code snippets`.', 'user'),
  createMessage('That\'s great! Here\'s a code block:\n\n```javascript\nconst greeting = "Hello World!";\nconsole.log(greeting);\n```', 'other'),
  createMessage('I can also create lists:\n\n- Item 1\n- Item 2\n- Item 3', 'user'),
  createMessage('And numbered lists:\n\n1. First step\n2. Second step\n3. Third step', 'other'),
  createMessage('> This is a blockquote\n> It can span multiple lines', 'user')
]

// Initialize with sample messages
onMounted(() => {
  messages.value = [...sampleMessages]
  scrollToBottom()
})

// Watch messages to auto-scroll
watch(messages, () => {
  nextTick(() => {
    scrollToBottom()
  })
}, { deep: true })

// Send message function
const sendMessage = async () => {
  const trimmedMessage = newMessage.value.trim()
  if (!trimmedMessage || isLoading.value) return

  // Validate input
  const validation = validateUserInput({
    content: trimmedMessage,
    isMarkdown: isMarkdownEnabled.value
  })

  if (!validation.success) {
    console.error('Invalid input:', validation.error)
    return
  }

  // Add user message
  const userMessage = createMessage(trimmedMessage, 'user', isMarkdownEnabled.value)
  messages.value.push(userMessage)
  
  // Clear input
  newMessage.value = ''
  
  // Simulate loading
  isLoading.value = true
  
  // Simulate response delay
  setTimeout(() => {
    const responses = [
      'Thanks for your message! I can see you\'re using **markdown** formatting.',
      'Great! Here\'s a helpful tip:\n\n> You can use markdown to format your messages with **bold**, *italic*, `code`, and more!',
      'I can also help with:\n\n- **Lists**\n- `Code snippets`\n- [Links](https://example.com)\n- And much more!',
      'Here\'s some code:\n\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n```',
      'You can create:\n\n1. **Numbered lists**\n2. *With formatting*\n3. `And code`',
      'That\'s interesting! Let me share a quote:\n\n> "The best way to predict the future is to invent it." - Alan Kay'
    ]
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    const botMessage = createMessage(randomResponse, 'other', true)
    messages.value.push(botMessage)
    isLoading.value = false
  }, 1000 + Math.random() * 2000) // Random delay between 1-3 seconds
}

// Scroll to bottom of messages
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}
</script>

<style scoped>
.markdown-toggle {
  display: flex;
  align-items: center;
  margin-top: 12px;
  font-size: 0.875rem;
  color: #6c757d;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: italic;
  opacity: 0.7;
}

.plain-content {
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* PrimeVue component overrides */
:deep(.p-textarea) {
  border-radius: 12px;
  border: 1px solid #e9ecef;
  transition: border-color 0.2s ease;
}

:deep(.p-textarea:focus) {
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

:deep(.p-button.p-button-rounded) {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  transition: transform 0.2s ease;
}

:deep(.p-button.p-button-rounded:hover) {
  transform: scale(1.05);
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}

:deep(.p-button.p-button-rounded:disabled) {
  background: #e9ecef;
  color: #6c757d;
  transform: none;
}

:deep(.p-checkbox .p-checkbox-box) {
  border-radius: 4px;
  border: 1px solid #e9ecef;
}

:deep(.p-checkbox .p-checkbox-box.p-highlight) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
}
</style>