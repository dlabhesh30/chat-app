# Vue 3 Chat App (TypeScript)

A modern chat application built with Vue 3 and TypeScript, featuring rich markdown support, beautiful chat bubbles, and PrimeVue 4 components.

## Features

- ✨ **Vue 3 Composition API** - Modern reactive programming with TypeScript
- 🎨 **PrimeVue 4 Components** - Beautiful UI components
- 📝 **Markdown Support** - Rich text formatting in chat bubbles
- 🔒 **Type Safety** - Full TypeScript support with Zod schemas for validation
- 🎯 **Responsive Design** - Works on desktop and mobile
- 🔄 **Real-time Feel** - Typing indicators and smooth animations
- 🛡️ **XSS Protection** - DOMPurify for secure markdown rendering
- 🚀 **TypeScript** - Full type safety and better developer experience

## Markdown Features

The chat supports the following markdown formatting:

- **Bold text** (`**bold**`)
- *Italic text* (`*italic*`)
- `Inline code` (`` `code` ``)
- ```Code blocks``` (``` ```code``` ```)
- [Links](https://example.com) (`[text](url)`)
- > Blockquotes (`> quote`)
- Headers (`# H1`, `## H2`, etc.)
- Lists (`- item` or `1. item`)

## Installation

1. Navigate to the chat directory:
```bash
cd chat
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production with type checking
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
chat/
├── src/
│   ├── types/
│   │   └── chat.ts          # TypeScript interfaces and Zod schemas
│   ├── utils/
│   │   └── markdown.ts      # Markdown rendering utilities
│   ├── App.vue              # Main application component
│   ├── main.ts              # Vue app entry point
│   ├── style.css            # Global styles
│   └── env.d.ts             # TypeScript declarations
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # Node.js TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md               # This file
```

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **PrimeVue 4** - UI component library
- **Zod** - TypeScript-first schema validation
- **Marked** - Markdown parser
- **DOMPurify** - XSS protection
- **Vite** - Build tool and dev server

## TypeScript Features

- **Full Type Safety** - All components and functions are properly typed
- **Zod Integration** - Runtime validation with TypeScript types
- **Interface Definitions** - Clear type definitions for all data structures
- **Type Inference** - Automatic type inference for reactive data
- **IDE Support** - Better autocomplete and error detection

## Usage

1. **Sending Messages**: Type your message in the textarea and press Enter or click the send button
2. **Markdown Toggle**: Use the checkbox to enable/disable markdown formatting
3. **Rich Formatting**: Use markdown syntax to format your messages
4. **Responsive**: The app works seamlessly on both desktop and mobile devices

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production with type checking
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

### Customization

You can customize the app by:

1. **Styling**: Modify `src/style.css` for global styles
2. **Components**: Update `src/App.vue` for UI changes
3. **Types**: Modify `src/types/chat.ts` for schema changes
4. **Markdown**: Update `src/utils/markdown.ts` for rendering changes

## Security

- All markdown content is sanitized using DOMPurify
- Input validation using Zod schemas with TypeScript types
- XSS protection for user-generated content
- Type-safe message handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own applications!
